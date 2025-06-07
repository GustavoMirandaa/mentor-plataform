"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
    ArrowLeft,
    Clock,
    DollarSign,
    Calendar,
    FileText,
    CheckCircle,
    XCircle,
    Loader2,
    AlertCircle,
    User,
    Mail,
} from "lucide-react"
import Link from "next/link"

interface InviteDetail {
    id: number
    projectId: number
    mentorId: number
    status: string
    message: string | null
    response_message: string | null
    createdAt: string
    updatedAt: string
    // Project details
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
    // Mentor details
    mentorName: string
    mentorEmail: string
}

export default function MentorInviteDetail({ inviteId }: { inviteId: number }) {
    const [invite, setInvite] = useState<InviteDetail | null>(null)
    const [loading, setLoading] = useState(true)
    const [actionLoading, setActionLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [responseMessage, setResponseMessage] = useState("")
    const [showAcceptDialog, setShowAcceptDialog] = useState(false)
    const [showDeclineDialog, setShowDeclineDialog] = useState(false)

    useEffect(() => {
        fetchInviteDetail()
    }, [inviteId])

    const fetchInviteDetail = async () => {
        try {
            setLoading(true)
            const response = await fetch(`/api/invites/${inviteId}`)

            if (!response.ok) {
                throw new Error("Failed to fetch invite details")
            }

            const data = await response.json()
            setInvite(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
        } finally {
            setLoading(false)
        }
    }

    const handleInviteResponse = async (status: "accepted" | "declined") => {
        try {
            setActionLoading(true)

            const response = await fetch(`/api/invites/${inviteId}`, {
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
                setInvite((prev) => (prev ? { ...prev, status, response_message: responseMessage } : null))
                setShowAcceptDialog(false)
                setShowDeclineDialog(false)
                setResponseMessage("")
                // You could add a toast notification here
                console.log(result.message)
            } else {
                throw new Error(result.error || "Failed to update invite")
            }
        } catch (err) {
            console.error("Error updating invite:", err)
            // You could add error toast notification here
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

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
                    <p className="text-gray-600">Carregando detalhes do convite...</p>
                </div>
            </div>
        )
    }

    if (error || !invite) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-600" />
                    <p className="text-red-600 mb-4">{error || "Convite não encontrado"}</p>
                    <Link href="/mentor/notifications">
                        <Button>Voltar para Notificações</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/mentor/notifications" className="flex items-center text-gray-600 hover:text-gray-900">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Voltar para Notificações
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Badge className={`border ${getStatusColor(invite.status)}`}>
                                <span className="capitalize">{invite.status}</span>
                            </Badge>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Project Header */}
                <Card className="mb-8 border-l-4 border-l-blue-600">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <CardTitle className="text-2xl text-blue-700 mb-2">{invite.tittle}</CardTitle>
                                <p className="text-gray-600 mb-4">{invite.description}</p>
                                <div className="flex flex-wrap items-center gap-4 text-sm">
                                    <div className="flex items-center text-gray-600">
                                        <DollarSign className="w-4 h-4 mr-1" />
                                        <span className="font-medium">{formatBudget(invite.budget)}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Clock className="w-4 h-4 mr-1" />
                                        <span className="font-medium">{invite.duration}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        <span className="font-medium">Início: {formatDate(invite.start_date)}</span>
                                    </div>
                                    <Badge variant={invite.priority === "Alta" ? "destructive" : "secondary"}>
                                        Prioridade {invite.priority}
                                    </Badge>
                                    <Badge variant="outline">{invite.category}</Badge>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Project Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <FileText className="w-5 h-5 mr-2" />
                                    Detalhes do Projeto
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Habilidades Necessárias:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {invite.skills.map((skill, index) => (
                                            <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {invite.requirements && (
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Requisitos Específicos:</h4>
                                        <p className="text-gray-700 leading-relaxed">{invite.requirements}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Data de Início:</h4>
                                        <p className="text-gray-700">{formatDate(invite.start_date)}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Data de Término:</h4>
                                        <p className="text-gray-700">{invite.end_date ? formatDate(invite.end_date) : "A definir"}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Invite Message */}
                        {invite.message && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Mensagem do Cliente
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-gray-700 leading-relaxed">{invite.message}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Response Message */}
                        {invite.response_message && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <User className="w-5 h-5 mr-2" />
                                        Sua Resposta
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="text-blue-900 leading-relaxed">{invite.response_message}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Status Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Status do Convite</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="text-center">
                                    <Badge className={`text-sm px-4 py-2 ${getStatusColor(invite.status)}`}>
                                        {invite.status === "pending" && <Clock className="w-4 h-4 mr-1" />}
                                        {invite.status === "accepted" && <CheckCircle className="w-4 h-4 mr-1" />}
                                        {invite.status === "declined" && <XCircle className="w-4 h-4 mr-1" />}
                                        <span className="capitalize">{invite.status}</span>
                                    </Badge>
                                </div>

                                <Separator />

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Recebido em:</span>
                                        <span className="font-medium">{formatDate(invite.createdAt)}</span>
                                    </div>
                                    {invite.status !== "pending" && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Respondido em:</span>
                                            <span className="font-medium">{formatDate(invite.updatedAt)}</span>
                                        </div>
                                    )}
                                </div>

                                {invite.status === "pending" && (
                                    <div className="space-y-2 pt-4">
                                        <Dialog open={showAcceptDialog} onOpenChange={setShowAcceptDialog}>
                                            <DialogTrigger asChild>
                                                <Button className="w-full bg-green-600 hover:bg-green-700">
                                                    <CheckCircle className="w-4 h-4 mr-2" />
                                                    Aceitar Convite
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Aceitar Convite</DialogTitle>
                                                </DialogHeader>
                                                <div className="space-y-4">
                                                    <p className="text-gray-600">
                                                        Você está prestes a aceitar este convite. Deseja adicionar uma mensagem?
                                                    </p>
                                                    <div>
                                                        <Label htmlFor="accept-message">Mensagem (opcional)</Label>
                                                        <Textarea
                                                            id="accept-message"
                                                            placeholder="Obrigado pelo convite! Estou animado para trabalhar neste projeto..."
                                                            value={responseMessage}
                                                            onChange={(e) => setResponseMessage(e.target.value)}
                                                            rows={3}
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
                                                            Aceitar
                                                        </Button>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>

                                        <Dialog open={showDeclineDialog} onOpenChange={setShowDeclineDialog}>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                                                    <XCircle className="w-4 h-4 mr-2" />
                                                    Recusar Convite
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Recusar Convite</DialogTitle>
                                                </DialogHeader>
                                                <div className="space-y-4">
                                                    <p className="text-gray-600">
                                                        Você está prestes a recusar este convite. Deseja explicar o motivo?
                                                    </p>
                                                    <div>
                                                        <Label htmlFor="decline-message">Motivo (opcional)</Label>
                                                        <Textarea
                                                            id="decline-message"
                                                            placeholder="Infelizmente não posso aceitar este projeto no momento devido a..."
                                                            value={responseMessage}
                                                            onChange={(e) => setResponseMessage(e.target.value)}
                                                            rows={3}
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
                                                            Recusar
                                                        </Button>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Project Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Informações do Projeto</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Categoria:</span>
                                    <span className="font-medium">{invite.category}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Duração:</span>
                                    <span className="font-medium">{invite.duration}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Orçamento:</span>
                                    <span className="font-medium text-green-600">{formatBudget(invite.budget)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Prioridade:</span>
                                    <Badge variant={invite.priority === "Alta" ? "destructive" : "secondary"} className="text-xs">
                                        {invite.priority}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
