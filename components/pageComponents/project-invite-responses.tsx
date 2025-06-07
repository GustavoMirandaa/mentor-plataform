"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    CheckCircle,
    XCircle,
    Clock,
    User,
    Mail,
    DollarSign,
    ArrowLeft,
    Loader2,
    AlertCircle,
    MessageSquare,
} from "lucide-react"
import Link from "next/link"

interface ProjectInvite {
    id: number
    projectId: number
    mentorId: number
    status: string
    message: string | null
    response_message: string | null
    createdAt: string
    updatedAt: string
    mentorName: string
    mentorEmail: string
    mentorOccupation: string
    mentorHourlyRate: string
}

interface Project {
    id: number
    tittle: string
    description: string
    category: string
    budget: number
    duration: string
    priority: string
    skills: string[]
}

export default function ProjectInviteResponses({ projectId }: { projectId: number }) {
    const [invites, setInvites] = useState<ProjectInvite[]>([])
    const [project, setProject] = useState<Project | null>(null)
    const [loading, setLoading] = useState(true)
    const [actionLoading, setActionLoading] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchData()
    }, [projectId])

    const fetchData = async () => {
        try {
            setLoading(true)

            // Fetch project details
            const projectResponse = await fetch(`/api/projects/${projectId}`)
            if (projectResponse.ok) {
                const projectData = await projectResponse.json()
                setProject(projectData)
            }

            // Fetch invites
            const invitesResponse = await fetch(`/api/projects/${projectId}/invites`)
            if (invitesResponse.ok) {
                const invitesData = await invitesResponse.json()
                setInvites(invitesData)
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
        } finally {
            setLoading(false)
        }
    }

    const handleAcceptMentor = async (mentorId: number) => {
        try {
            setActionLoading(mentorId)

            // Update project status and assign mentor
            const response = await fetch(`/api/projects/${projectId}/status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mentorId,
                    status: "Em Andamento",
                }),
            })

            if (response.ok) {
                // Refresh data
                await fetchData()
                console.log("Mentor aceito com sucesso!")
            } else {
                throw new Error("Failed to accept mentor")
            }
        } catch (err) {
            console.error("Error accepting mentor:", err)
        } finally {
            setActionLoading(null)
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

    const getStatusColor = (status: string) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-800 border-yellow-200"
            case "accepted":
                return "bg-green-100 text-green-800 border-green-200"
            case "declined":
                return "bg-red-100 text-red-800 border-red-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "pending":
                return <Clock className="w-4 h-4" />
            case "accepted":
                return <CheckCircle className="w-4 h-4" />
            case "declined":
                return <XCircle className="w-4 h-4" />
            default:
                return <AlertCircle className="w-4 h-4" />
        }
    }

    const formatBudget = (budget: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(budget)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
                    <p className="text-gray-600">Carregando respostas dos mentores...</p>
                </div>
            </div>
        )
    }

    if (error || !project) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-600" />
                    <p className="text-red-600 mb-4">{error || "Projeto não encontrado"}</p>
                    <Link href="/projects">
                        <Button>Voltar para Projetos</Button>
                    </Link>
                </div>
            </div>
        )
    }

    const pendingInvites = invites.filter((invite) => invite.status === "pending")
    const acceptedInvites = invites.filter((invite) => invite.status === "accepted")
    const declinedInvites = invites.filter((invite) => invite.status === "declined")

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/projects" className="flex items-center text-gray-600 hover:text-gray-900">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Voltar para Projetos
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Badge variant="outline">{invites.length} convite(s) enviado(s)</Badge>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Project Summary */}
                <Card className="mb-8 border-l-4 border-l-blue-600">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <CardTitle className="text-2xl text-blue-700 mb-2">{project.tittle}</CardTitle>
                                <p className="text-gray-600 mb-3">{project.description}</p>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <DollarSign className="w-4 h-4 mr-1" />
                                        <span className="font-medium">{formatBudget(project.budget)}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        <span className="font-medium">{project.duration}</span>
                                    </div>
                                    <Badge variant={project.priority === "Alta" ? "destructive" : "secondary"}>
                                        Prioridade {project.priority}
                                    </Badge>
                                    <Badge variant="outline">{project.category}</Badge>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">Habilidades Necessárias:</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, index) => (
                                    <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Response Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardContent className="p-6 text-center">
                            <div className="text-2xl font-bold text-yellow-600">{pendingInvites.length}</div>
                            <div className="text-sm text-gray-600">Aguardando Resposta</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 text-center">
                            <div className="text-2xl font-bold text-green-600">{acceptedInvites.length}</div>
                            <div className="text-sm text-gray-600">Aceitaram</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 text-center">
                            <div className="text-2xl font-bold text-red-600">{declinedInvites.length}</div>
                            <div className="text-sm text-gray-600">Recusaram</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Invites List */}
                {invites.length === 0 ? (
                    <Card className="p-8 text-center">
                        <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum convite enviado</h3>
                        <p className="text-gray-600 mb-4">Você ainda não enviou convites para este projeto.</p>
                        <Link href={`/projects/${projectId}/match`}>
                            <Button>Encontrar Mentores</Button>
                        </Link>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {/* Accepted Invites */}
                        {acceptedInvites.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                                    Mentores que Aceitaram ({acceptedInvites.length})
                                </h3>
                                <div className="space-y-3">
                                    {acceptedInvites.map((invite) => (
                                        <Card key={invite.id} className="border-green-200 bg-green-50">
                                            <CardContent className="p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-4">
                                                        <Avatar className="w-12 h-12">
                                                            <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                                            <AvatarFallback className="bg-green-600 text-white">
                                                                {getInitials(invite.mentorName)}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900">{invite.mentorName}</h4>
                                                            <p className="text-sm text-gray-600">{invite.mentorOccupation}</p>
                                                            <div className="flex items-center text-sm text-gray-500 mt-1">
                                                                <Mail className="w-3 h-3 mr-1" />
                                                                {invite.mentorEmail}
                                                                <span className="mx-2">•</span>
                                                                <DollarSign className="w-3 h-3 mr-1" />
                                                                R$ {invite.mentorHourlyRate}/hora
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Badge className={`border ${getStatusColor(invite.status)}`}>
                                                            {getStatusIcon(invite.status)}
                                                            <span className="ml-1">Aceito</span>
                                                        </Badge>
                                                        <Button
                                                            size="sm"
                                                            onClick={() => handleAcceptMentor(invite.mentorId)}
                                                            disabled={actionLoading === invite.mentorId}
                                                            className="bg-green-600 hover:bg-green-700"
                                                        >
                                                            {actionLoading === invite.mentorId ? (
                                                                <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                                                            ) : (
                                                                <User className="w-4 h-4 mr-1" />
                                                            )}
                                                            Contratar
                                                        </Button>
                                                    </div>
                                                </div>
                                                {invite.response_message && (
                                                    <div className="mt-3 p-3 bg-white rounded border">
                                                        <p className="text-sm text-gray-700">
                                                            <strong>Resposta:</strong> {invite.response_message}
                                                        </p>
                                                    </div>
                                                )}
                                                <div className="mt-2 text-xs text-gray-500">Aceito em {formatDate(invite.updatedAt)}</div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Pending Invites */}
                        {pendingInvites.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                                    Aguardando Resposta ({pendingInvites.length})
                                </h3>
                                <div className="space-y-3">
                                    {pendingInvites.map((invite) => (
                                        <Card key={invite.id} className="border-yellow-200 bg-yellow-50">
                                            <CardContent className="p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-4">
                                                        <Avatar className="w-12 h-12">
                                                            <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                                            <AvatarFallback className="bg-yellow-600 text-white">
                                                                {getInitials(invite.mentorName)}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900">{invite.mentorName}</h4>
                                                            <p className="text-sm text-gray-600">{invite.mentorOccupation}</p>
                                                            <div className="flex items-center text-sm text-gray-500 mt-1">
                                                                <Mail className="w-3 h-3 mr-1" />
                                                                {invite.mentorEmail}
                                                                <span className="mx-2">•</span>
                                                                <DollarSign className="w-3 h-3 mr-1" />
                                                                R$ {invite.mentorHourlyRate}/hora
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Badge className={`border ${getStatusColor(invite.status)}`}>
                                                        {getStatusIcon(invite.status)}
                                                        <span className="ml-1">Pendente</span>
                                                    </Badge>
                                                </div>
                                                <div className="mt-2 text-xs text-gray-500">Enviado em {formatDate(invite.createdAt)}</div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Declined Invites */}
                        {declinedInvites.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <XCircle className="w-5 h-5 mr-2 text-red-600" />
                                    Mentores que Recusaram ({declinedInvites.length})
                                </h3>
                                <div className="space-y-3">
                                    {declinedInvites.map((invite) => (
                                        <Card key={invite.id} className="border-red-200 bg-red-50">
                                            <CardContent className="p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-4">
                                                        <Avatar className="w-12 h-12">
                                                            <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                                            <AvatarFallback className="bg-red-600 text-white">
                                                                {getInitials(invite.mentorName)}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900">{invite.mentorName}</h4>
                                                            <p className="text-sm text-gray-600">{invite.mentorOccupation}</p>
                                                            <div className="flex items-center text-sm text-gray-500 mt-1">
                                                                <Mail className="w-3 h-3 mr-1" />
                                                                {invite.mentorEmail}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Badge className={`border ${getStatusColor(invite.status)}`}>
                                                        {getStatusIcon(invite.status)}
                                                        <span className="ml-1">Recusado</span>
                                                    </Badge>
                                                </div>
                                                {invite.response_message && (
                                                    <div className="mt-3 p-3 bg-white rounded border">
                                                        <p className="text-sm text-gray-700">
                                                            <strong>Motivo:</strong> {invite.response_message}
                                                        </p>
                                                    </div>
                                                )}
                                                <div className="mt-2 text-xs text-gray-500">Recusado em {formatDate(invite.updatedAt)}</div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    )
}
