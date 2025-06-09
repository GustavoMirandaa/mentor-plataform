"use client"

import {useState, useEffect} from "react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Separator} from "@/components/ui/separator"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Textarea} from "@/components/ui/textarea"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label"
import {
    MapPin,
    Clock,
    DollarSign,
    Filter,
    ArrowLeft,
    Eye,
    CheckCircle,
    Target,
    Mail,
    Loader2,
    AlertCircle,
} from "lucide-react"
import Link from "next/link"

interface Project {
    id: number
    tittle: string | null
    description: string | null
    category: string | null
    duration: string | null
    budget: number | null
    priority: string | null
    skills: string[]
    start_date: string | null
    end_date: string | null
    requirements: string | null
    owner: number | null
}

interface MentorMatch {
    id: number
    clerkId: string
    name: string
    email: string | null
    address: string | null
    phone: string | null
    linkedin: string | null
    ocuppation: string | null
    exp: string | null
    bio: string | null
    skill: string[]
    disponibility: string | null
    weekly_availability: string | null
    hourly_rate: string | null
    matchPercentage: number
    matchingSkills: string[]
    skillsMatchCount: number
    experienceMatch: boolean
    budgetMatch: boolean
}

interface MatchResponse {
    project: Project
    matches: MentorMatch[]
    totalMentors: number
    qualifiedMentors: number
}

export default function MentorMatchIntegrated({projectId}: { projectId: number }) {
    const [matchData, setMatchData] = useState<MatchResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [sortBy, setSortBy] = useState("match")
    const [invitedMentors, setInvitedMentors] = useState<number[]>([])
    const [inviteLoading, setInviteLoading] = useState<number | null>(null)
    const [selectedMentor, setSelectedMentor] = useState<MentorMatch | null>(null)
    const [inviteMessage, setInviteMessage] = useState("")

    useEffect(() => {
        fetchMatches()
        fetchExistingInvites()
    }, [projectId])

    const fetchMatches = async () => {
        try {
            setLoading(true)
            const response = await fetch(`/api/projects/${projectId}/matches`)

            if (!response.ok) {
                throw new Error("Failed to fetch matches")
            }

            const data = await response.json()
            setMatchData(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
        } finally {
            setLoading(false)
        }
    }

    const fetchExistingInvites = async () => {
        try {
            const response = await fetch(`/api/invites?projectId=${projectId}`)
            if (response.ok) {
                const invites = await response.json()
                const invitedIds = invites.map((invite: any) => invite.mentorId)
                setInvitedMentors(invitedIds)
            }
        } catch (err) {
            console.error("Error fetching existing invites:", err)
        }
    }

    const handleInviteMentor = async (mentor: MentorMatch, message = "") => {
        try {
            setInviteLoading(mentor.id)

            const response = await fetch("/api/invites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    projectId,
                    mentorId: mentor.id,
                    message,
                }),
            })

            const result = await response.json()

            if (response.ok) {
                setInvitedMentors((prev) => [...prev, mentor.id])
                setSelectedMentor(null)
                setInviteMessage("")
                // You could add a toast notification here
                console.log(result.message)
            } else {
                throw new Error(result.error || "Failed to send invite")
            }
        } catch (err) {
            console.error("Error sending invite:", err)
            // You could add error toast notification here
        } finally {
            setInviteLoading(null)
        }
    }

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
    }

    const getMatchColor = (percentage: number) => {
        if (percentage >= 90) return "text-green-700 bg-green-100 border-green-200"
        if (percentage >= 80) return "text-blue-700 bg-blue-100 border-blue-200"
        if (percentage >= 70) return "text-yellow-700 bg-yellow-100 border-yellow-200"
        return "text-gray-700 bg-gray-100 border-gray-200"
    }

    const getExperienceText = (exp: string | null) => {
        if (!exp) return "Não informado"
        const expMap: { [key: string]: string } = {
            "1-2": "1-2 anos",
            "3-5": "3-5 anos",
            "6-10": "6-10 anos",
            "10+": "Mais de 10 anos",
        }
        return expMap[exp] || exp
    }

    const formatBudget = (budget: number | null) => {
        if (!budget) return "Não informado"
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(Number(budget))
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600"/>
                    <p className="text-gray-600">Calculando compatibilidade dos mentores...</p>
                </div>
            </div>
        )
    }

    if (error || !matchData) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-600"/>
                    <p className="text-red-600 mb-4">{error || "Erro ao carregar dados"}</p>
                    <Button onClick={fetchMatches}>Tentar Novamente</Button>
                </div>
            </div>
        )
    }

    const {project, matches} = matchData

    const sortedMentors = [...matches].sort((a, b) => {
        switch (sortBy) {
            case "match":
                return b.matchPercentage - a.matchPercentage
            case "rating":
                // Since we don't have ratings in DB, sort by experience
                const expOrder = {"10+": 4, "6-10": 3, "3-5": 2, "1-2": 1}
                return (expOrder[b.exp as keyof typeof expOrder] || 0) - (expOrder[a.exp as keyof typeof expOrder] || 0)
            case "price":
                const aRate = Number.parseFloat(a.hourly_rate || "0")
                const bRate = Number.parseFloat(b.hourly_rate || "0")
                return aRate - bRate
            default:
                return 0
        }
    })

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/projects"
                                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                                <ArrowLeft className="w-5 h-5 mr-2"/>
                                Voltar para Projetos
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">
                {invitedMentors.length} convite(s) enviado(s) • {matchData.qualifiedMentors} mentores qualificados
              </span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Project Summary */}
                <Card className="mb-8 border-l-4 border-l-blue-600">
                    <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <CardTitle className="text-2xl text-blue-700 mb-2">{project.tittle}</CardTitle>
                                <p className="text-gray-600 mb-3">{project.description}</p>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <DollarSign className="w-4 h-4 mr-1"/>
                                        <span className="font-medium">{formatBudget(project.budget)}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1"/>
                                        <span className="font-medium">{project.duration}</span>
                                    </div>
                                    <Badge variant={project.priority === "Alta" ? "destructive" : "secondary"}>
                                        Prioridade {project.priority}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Habilidades Necessárias:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, index) => (
                                        <Badge key={index} variant="outline"
                                               className="bg-blue-50 text-blue-700 border-blue-200">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Requisitos Específicos:</h4>
                                <p className="text-sm text-gray-700">{project.requirements || "Nenhum requisito específico"}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Match Results Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Target className="w-6 h-6 mr-2 text-blue-600"/>
                            Mentores Compatíveis
                        </h2>
                        <p className="text-gray-600">
                            {matchData.qualifiedMentors} de {matchData.totalMentors} mentores correspondem aos
                            requisitos
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <Filter className="w-4 h-4 text-gray-500"/>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-48">
                                    <SelectValue/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="match">Maior Compatibilidade</SelectItem>
                                    <SelectItem value="rating">Mais Experiente</SelectItem>
                                    <SelectItem value="price">Menor Preço</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Mentors Grid */}
                {sortedMentors.length === 0 ? (
                    <Card className="p-8 text-center">
                        <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-400"/>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum mentor encontrado</h3>
                        <p className="text-gray-600">
                            Não encontramos mentores que correspondam aos requisitos do seu projeto. Tente ajustar as
                            habilidades
                            necessárias ou entre em contato conosco.
                        </p>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        {sortedMentors.map((mentor) => (
                            <Card key={mentor.id}
                                  className="hover:shadow-lg transition-all duration-200 border-0 shadow-md">
                                <CardContent className="p-6">
                                    {/* Header with Avatar and Match */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-4">
                                            <Avatar className="w-16 h-16 border-2 border-gray-100">
                                                <AvatarImage src="/placeholder.svg?height=64&width=64"/>
                                                <AvatarFallback
                                                    className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-semibold">
                                                    {getInitials(mentor.name)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                                                <p className="text-blue-600 font-medium">{mentor.ocuppation || "Desenvolvedor"}</p>
                                                <div className="flex items-center text-sm text-gray-600 mt-1">
                                                    <MapPin className="w-3 h-3 mr-1"/>
                                                    {mentor.address || "Localização não informada"}
                                                    <span className="mx-2">•</span>
                                                    <span>{getExperienceText(mentor.exp)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getMatchColor(mentor.matchPercentage)}`}
                                            >
                                                <Target className="w-3 h-3 mr-1"/>
                                                {mentor.matchPercentage}% Match
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                        {mentor.bio || "Desenvolvedor experiente com foco em soluções inovadoras e qualidade de código."}
                                    </p>

                                    {/* Skills Match */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                            Habilidades
                                            ({mentor.skillsMatchCount}/{project.skills.length} correspondências):
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {mentor.skill.slice(0, 8).map((skill, index) => (
                                                <Badge
                                                    key={index}
                                                    variant={mentor.matchingSkills.includes(skill) ? "default" : "secondary"}
                                                    className={
                                                        mentor.matchingSkills.includes(skill)
                                                            ? "bg-green-100 text-green-800 border-green-200"
                                                            : "bg-gray-100 text-gray-600"
                                                    }
                                                >
                                                    {skill}
                                                    {mentor.matchingSkills.includes(skill) &&
                                                        <CheckCircle className="w-3 h-3 ml-1"/>}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Match Indicators */}
                                    <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                                        <div
                                            className={`flex items-center p-2 rounded ${mentor.experienceMatch ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-600"}`}
                                        >
                                            <CheckCircle className="w-3 h-3 mr-1"/>
                                            Experiência Compatível
                                        </div>
                                        <div
                                            className={`flex items-center p-2 rounded ${mentor.budgetMatch ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"}`}
                                        >
                                            <DollarSign className="w-3 h-3 mr-1"/>
                                            {mentor.budgetMatch ? "Orçamento OK" : "Verificar Orçamento"}
                                        </div>
                                    </div>

                                    <Separator className="my-4"/>

                                    {/* Price and Actions */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div
                                                className="text-xl font-bold text-green-600">R$ {mentor.hourly_rate || "0"}</div>
                                            <span className="text-sm text-gray-500">/hora</span>
                                            <Badge variant="outline" className="text-xs">
                                                {mentor.weekly_availability || "Disponibilidade não informada"}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Button size="sm" variant="outline" className="border-gray-300">
                                                <Eye className="w-4 h-4 mr-1"/>
                                                Ver Perfil
                                            </Button>
                                            {invitedMentors.includes(mentor.id) ? (
                                                <Button size="sm" disabled
                                                        className="bg-green-100 text-green-700 border-green-200">
                                                    <CheckCircle className="w-4 h-4 mr-1"/>
                                                    Convite Enviado
                                                </Button>
                                            ) : (
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button
                                                            size="sm"
                                                            onClick={() => setSelectedMentor(mentor)}
                                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                                            disabled={inviteLoading === mentor.id}
                                                        >
                                                            {inviteLoading === mentor.id ? (
                                                                <Loader2 className="w-4 h-4 mr-1 animate-spin"/>
                                                            ) : (
                                                                <Mail className="w-4 h-4 mr-1"/>
                                                            )}
                                                            Convidar Mentor
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            <DialogTitle>Convidar {mentor.name}</DialogTitle>
                                                        </DialogHeader>
                                                        <div className="space-y-4">
                                                            <div>
                                                                <Label htmlFor="message">Mensagem personalizada
                                                                    (opcional)</Label>
                                                                <Textarea
                                                                    id="message"
                                                                    placeholder="Adicione uma mensagem personalizada para o mentor..."
                                                                    value={inviteMessage}
                                                                    onChange={(e) => setInviteMessage(e.target.value)}
                                                                    rows={4}
                                                                />
                                                            </div>
                                                            <div className="flex justify-end space-x-2">
                                                                <Button variant="outline"
                                                                        onClick={() => setSelectedMentor(null)}>
                                                                    Cancelar
                                                                </Button>
                                                                <Button
                                                                    onClick={() => handleInviteMentor(mentor, inviteMessage)}
                                                                    disabled={inviteLoading === mentor.id}
                                                                >
                                                                    {inviteLoading === mentor.id ? (
                                                                        <Loader2 className="w-4 h-4 mr-1 animate-spin"/>
                                                                    ) : (
                                                                        <Mail className="w-4 h-4 mr-1"/>
                                                                    )}
                                                                    Enviar Convite
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {/* Summary Footer */}
                {invitedMentors.length > 0 && (
                    <Card className="mt-8 bg-blue-50 border-blue-200">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600"/>
                                    <span className="font-medium text-blue-900">
                    {invitedMentors.length} convite(s) enviado(s) com sucesso!
                  </span>
                                </div>
                                <Button variant="outline" className="border-blue-300 text-blue-700">
                                    Ver Status dos Convites
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </main>
        </div>
    )
}
