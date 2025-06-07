"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    ArrowLeft,
    Clock,
    Calendar,
    FileText,
    CheckCircle,
    XCircle,
    Loader2,
    AlertCircle,
    User,
    Mail,
    Building,
    Target,
    MessageSquare,
} from "lucide-react"
import Link from "next/link"

interface Project {
    id: number
    tittle: string
    description: string
    category: string
    budget: number
    duration: string
    priority: string
    skills: string[]
    start_date: string
    end_date: string
    requirements: string
    owner: number
}

interface Invite {
    id: number
    projectId: number
    mentorId: number
    status: string
    message: string | null
    response_message: string | null
    createdAt: string
    updatedAt: string
}

interface ProjectOwner {
    name: string
    email: string
    company: string
}

interface ProjectDetailData {
    project: Project
    invite: Invite | null
    projectOwner: ProjectOwner
    estimatedHours: number
    estimatedValue: number
}

export default function ProjectDetailsMentor({
                                                 projectId,
                                                 mentorId,
                                             }: {
    projectId: number
    mentorId: number
}) {
    const [projectData, setProjectData] = useState<ProjectDetailData | null>(null)
    const [loading, setLoading] = useState(true)
    const [actionLoading, setActionLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [responseMessage, setResponseMessage] = useState("")
    const [showAcceptDialog, setShowAcceptDialog] = useState(false)
    const [showDeclineDialog, setShowDeclineDialog] = useState(false)

    useEffect(() => {
        fetchProjectDetails()
    }, [projectId, mentorId])

    const fetchProjectDetails = async () => {
        try {
            setLoading(true)
            const response = await fetch(`/api/projects/${projectId}/mentor-view?mentorId=${mentorId}`)

            if (!response.ok) {
                throw new Error("Failed to fetch project details")
            }

            const data = await response.json()
            setProjectData(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
        } finally {
            setLoading(false)
        }
    }

    const handleInviteResponse = async (status: "accepted" | "declined") => {
        if (!projectData?.invite) return

        try {
            setActionLoading(true)

            const response = await fetch(`/api/invites/${projectData.invite.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status,
                    response_message: responseMessage,
                }),
            })

            const result = await response.json()

            if (response.ok) {
                // Update local state
                setProjectData((prev) =>
                    prev
                        ? {
                            ...prev,
                            invite: prev.invite
                                ? {
                                    ...prev.invite,
                                    status,
                                    response_message: responseMessage,
                                }
                                : null,
                        }
                        : null,
                )

                setShowAcceptDialog(false)
                setShowDeclineDialog(false)
                setResponseMessage("")

                console.log(result.message)
            } else {
                throw new Error(result.error || "Failed to update invite")
            }
        } catch (err) {
            console.error("Error updating invite:", err)
        } finally {
            setActionLoading(false)
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
        })
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

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "Alta":
                return "bg-red-100 text-red-800 border-red-200"
            case "Média":
                return "bg-yellow-100 text-yellow-800 border-yellow-200"
            case "Baixa":
                return "bg-green-100 text-green-800 border-green-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    const calculateHourlyRate = () => {
        if (!projectData) return 0
        return Math.round(projectData.estimatedValue / projectData.estimatedHours)
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
                    <p className="text-gray-600">Carregando detalhes do projeto...</p>
                </div>
            </div>
        )
    }

    if (error || !projectData) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-600" />
                    <p className="text-red-600 mb-4">{error || "Projeto não encontrado"}</p>
                    <Link href="/mentor/notifications">
                        <Button>Voltar para Notificações</Button>
                    </Link>
                </div>
            </div>
        )
    }

    const { project, invite, projectOwner, estimatedHours, estimatedValue } = projectData

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/mentor/notifications" className="flex items-center text-gray-600 hover:text-gray-900">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Voltar para Notificações
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3">
                            {invite && (
                                <Badge className={`border ${getStatusColor(invite.status)}`}>
                                    <span className="capitalize">{invite.status}</span>
                                </Badge>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Project Header */}
                <Card className="mb-8 border-l-4 border-l-blue-600">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <CardTitle className="text-3xl text-blue-700 mb-3">{project.tittle}</CardTitle>
                                <p className="text-lg text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Badge variant="outline" className="text-sm px-3 py-1">
                                        {project.category}
                                    </Badge>
                                    <Badge className={`border ${getPriorityColor(project.priority)}`}>
                                        Prioridade {project.priority}
                                    </Badge>
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        <span>Início: {formatDate(project.start_date)}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Clock className="w-4 h-4 mr-1" />
                                        <span>{project.duration}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-bold text-green-600 mb-1">{formatBudget(project.budget)}</div>
                                <div className="text-sm text-gray-500">Orçamento Total</div>
                                <div className="text-lg font-semibold text-blue-600 mt-2">~R$ {calculateHourlyRate()}/hora</div>
                                <div className="text-xs text-gray-500">({estimatedHours}h estimadas)</div>
                            </div>
                        </div>
                    </CardHeader>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Project Description */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <FileText className="w-5 h-5 mr-2" />
                                    Descrição do Projeto
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Sobre o Projeto:</h4>
                                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                                </div>

                                {project.requirements && (
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Requisitos Específicos:</h4>
                                        <p className="text-gray-700 leading-relaxed">{project.requirements}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Skills Required */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Target className="w-5 h-5 mr-2" />
                                    Habilidades Necessárias
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-3">
                                    {project.skills.map((skill, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1 text-sm"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Project Timeline */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Cronograma do Projeto
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Data de Início:</h4>
                                        <p className="text-gray-700">{formatDate(project.start_date)}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Data de Término:</h4>
                                        <p className="text-gray-700">{project.end_date ? formatDate(project.end_date) : "A definir"}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Duração:</h4>
                                        <p className="text-gray-700">{project.duration}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Horas Estimadas:</h4>
                                        <p className="text-gray-700">{estimatedHours} horas</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Client Message */}
                        {invite?.message && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <MessageSquare className="w-5 h-5 mr-2" />
                                        Mensagem do Cliente
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                        <p className="text-blue-900 leading-relaxed">{invite.message}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Your Response */}
                        {invite?.response_message && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <User className="w-5 h-5 mr-2" />
                                        Sua Resposta
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-gray-50 p-4 rounded-lg border">
                                        <p className="text-gray-700 leading-relaxed">{invite.response_message}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Client Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Informações do Cliente</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Avatar className="w-12 h-12">
                                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                        <AvatarFallback className="bg-blue-600 text-white">{projectOwner.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{projectOwner.name}</h4>
                                        <p className="text-sm text-gray-600">{projectOwner.company}</p>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center">
                                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                                        <span className="text-gray-600">{projectOwner.email}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Building className="w-4 h-4 mr-2 text-gray-400" />
                                        <span className="text-gray-600">{projectOwner.company}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Project Summary */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Resumo Financeiro</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Orçamento Total:</span>
                                        <span className="font-semibold text-green-600">{formatBudget(project.budget)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Horas Estimadas:</span>
                                        <span className="font-medium">{estimatedHours}h</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Valor/Hora:</span>
                                        <span className="font-medium text-blue-600">~R$ {calculateHourlyRate()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Duração:</span>
                                        <span className="font-medium">{project.duration}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Action Buttons */}
                        {invite && invite.status === "pending" && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Responder Convite</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm text-gray-600 mb-4">
                                        Você foi convidado para participar deste projeto. Deseja aceitar?
                                    </p>

                                    <Dialog open={showAcceptDialog} onOpenChange={setShowAcceptDialog}>
                                        <DialogTrigger asChild>
                                            <Button className="w-full bg-green-600 hover:bg-green-700">
                                                <CheckCircle className="w-4 h-4 mr-2" />
                                                Aceitar Projeto
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Aceitar Projeto</DialogTitle>
                                            </DialogHeader>
                                            <div className="space-y-4">
                                                <p className="text-gray-600">
                                                    Você está prestes a aceitar este projeto. Deseja adicionar uma mensagem para o cliente?
                                                </p>
                                                <div>
                                                    <Label htmlFor="accept-message">Mensagem (opcional)</Label>
                                                    <Textarea
                                                        id="accept-message"
                                                        placeholder="Obrigado pelo convite! Estou animado para trabalhar neste projeto e contribuir para seu sucesso..."
                                                        value={responseMessage}
                                                        onChange={(e) => setResponseMessage(e.target.value)}
                                                        rows={4}
                                                    />
                                                </div>
                                                <div className="flex justify-end space-x-2">
                                                    <Button variant="outline" onClick={() => setShowAcceptDialog(false)}>
                                                        Cancelar
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleInviteResponse("accepted")}
                                                        disabled={actionLoading}
                                                        className="bg-green-600 hover:bg-green-700"
                                                    >
                                                        {actionLoading ? (
                                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                        ) : (
                                                            <CheckCircle className="w-4 h-4 mr-2" />
                                                        )}
                                                        Aceitar Projeto
                                                    </Button>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>

                                    <Dialog open={showDeclineDialog} onOpenChange={setShowDeclineDialog}>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                                                <XCircle className="w-4 h-4 mr-2" />
                                                Recusar Projeto
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Recusar Projeto</DialogTitle>
                                            </DialogHeader>
                                            <div className="space-y-4">
                                                <p className="text-gray-600">
                                                    Você está prestes a recusar este projeto. Deseja explicar o motivo para o cliente?
                                                </p>
                                                <div>
                                                    <Label htmlFor="decline-message">Motivo (opcional)</Label>
                                                    <Textarea
                                                        id="decline-message"
                                                        placeholder="Infelizmente não posso aceitar este projeto no momento devido a conflitos de agenda..."
                                                        value={responseMessage}
                                                        onChange={(e) => setResponseMessage(e.target.value)}
                                                        rows={4}
                                                    />
                                                </div>
                                                <div className="flex justify-end space-x-2">
                                                    <Button variant="outline" onClick={() => setShowDeclineDialog(false)}>
                                                        Cancelar
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleInviteResponse("declined")}
                                                        disabled={actionLoading}
                                                        variant="destructive"
                                                    >
                                                        {actionLoading ? (
                                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                        ) : (
                                                            <XCircle className="w-4 h-4 mr-2" />
                                                        )}
                                                        Recusar Projeto
                                                    </Button>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        )}

                        {/* Status Card for non-pending invites */}
                        {invite && invite.status !== "pending" && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Status do Convite</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center">
                                        <Badge className={`text-sm px-4 py-2 ${getStatusColor(invite.status)}`}>
                                            {invite.status === "accepted" && <CheckCircle className="w-4 h-4 mr-1" />}
                                            {invite.status === "declined" && <XCircle className="w-4 h-4 mr-1" />}
                                            <span className="capitalize">{invite.status === "accepted" ? "Aceito" : "Recusado"}</span>
                                        </Badge>
                                        <p className="text-sm text-gray-600 mt-2">
                                            {invite.status === "accepted"
                                                ? "Você aceitou este projeto. O cliente foi notificado."
                                                : "Você recusou este projeto. Obrigado por considerar a oportunidade."}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
