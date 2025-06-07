"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Bell,
    Clock,
    DollarSign,
    Eye,
    CheckCircle,
    XCircle,
    Loader2,
    AlertCircle,
    Calendar,
    Target,
} from "lucide-react"
import Link from "next/link"

interface Invite {
    id: number
    projectId: number
    mentorId: number
    status: string
    message: string | null
    createdAt: string
    updatedAt: string
    projectTitle: string
    projectDescription: string
    projectCategory: string
    projectBudget: number
    projectDuration: string
    projectPriority: string
    projectSkills: string[]
    projectStartDate: string
    projectRequirements: string
}

export default function MentorNotifications({ mentorId }: { mentorId: number }) {
    const [invites, setInvites] = useState<Invite[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [filter, setFilter] = useState<"all" | "pending" | "accepted" | "declined">("all")

    useEffect(() => {
        fetchInvites()
    }, [mentorId])

    const fetchInvites = async () => {
        try {
            setLoading(true)
            const response = await fetch(`/api/mentors/${mentorId}/invites`)

            if (!response.ok) {
                throw new Error("Failed to fetch invites")
            }

            const data = await response.json()
            setInvites(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
        } finally {
            setLoading(false)
        }
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

    const filteredInvites = invites.filter((invite) => {
        if (filter === "all") return true
        return invite.status === filter
    })

    const pendingCount = invites.filter((invite) => invite.status === "pending").length

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
                    <p className="text-gray-600">Carregando notificações...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-600" />
                    <p className="text-red-600 mb-4">{error}</p>
                    <Button onClick={fetchInvites}>Tentar Novamente</Button>
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
                            <h1 className="text-xl font-semibold text-gray-900 flex items-center">
                                <Bell className="w-6 h-6 mr-2 text-blue-600" />
                                Notificações
                                {pendingCount > 0 && <Badge className="ml-2 bg-red-500 text-white">{pendingCount}</Badge>}
                            </h1>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Button variant="outline" onClick={fetchInvites}>
                                Atualizar
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filter Tabs */}
                <div className="mb-6">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                            {[
                                { key: "all", label: "Todos", count: invites.length },
                                { key: "pending", label: "Pendentes", count: invites.filter((i) => i.status === "pending").length },
                                { key: "accepted", label: "Aceitos", count: invites.filter((i) => i.status === "accepted").length },
                                { key: "declined", label: "Recusados", count: invites.filter((i) => i.status === "declined").length },
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setFilter(tab.key as any)}
                                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                        filter === tab.key
                                            ? "border-blue-500 text-blue-600"
                                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    }`}
                                >
                                    {tab.label} ({tab.count})
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Invites List */}
                {filteredInvites.length === 0 ? (
                    <Card className="p-8 text-center">
                        <Bell className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {filter === "all" ? "Nenhuma notificação" : `Nenhum convite ${filter}`}
                        </h3>
                        <p className="text-gray-600">
                            {filter === "all"
                                ? "Você não tem notificações no momento."
                                : `Você não tem convites ${filter} no momento.`}
                        </p>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {filteredInvites.map((invite) => (
                            <Card key={invite.id} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <h3 className="text-lg font-semibold text-gray-900">{invite.projectTitle}</h3>
                                                <Badge className={`border ${getStatusColor(invite.status)}`}>
                                                    {getStatusIcon(invite.status)}
                                                    <span className="ml-1 capitalize">{invite.status}</span>
                                                </Badge>
                                            </div>
                                            <p className="text-gray-600 mb-3">{invite.projectDescription}</p>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <DollarSign className="w-4 h-4 mr-1" />
                                                    <span className="font-medium">{formatBudget(invite.projectBudget)}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    <span className="font-medium">{invite.projectDuration}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    <span className="font-medium">Início: {invite.projectStartDate}</span>
                                                </div>
                                                <Badge variant={invite.projectPriority === "Alta" ? "destructive" : "secondary"}>
                                                    Prioridade {invite.projectPriority}
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="text-right text-sm text-gray-500">
                                            <p>Recebido em</p>
                                            <p className="font-medium">{formatDate(invite.createdAt)}</p>
                                        </div>
                                    </div>


                                    {/* Custom Message */}
                                    {invite.message && (
                                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                                            <h4 className="text-sm font-medium text-gray-900 mb-1">Mensagem do Cliente:</h4>
                                            <p className="text-sm text-gray-700">{invite.message}</p>
                                        </div>
                                    )}

                                    {/* Requirements */}
                                    {invite.projectRequirements && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-medium text-gray-900 mb-1">Requisitos Específicos:</h4>
                                            <p className="text-sm text-gray-700">{invite.projectRequirements}</p>
                                        </div>
                                    )}

                                    <Separator className="my-4" />

                                    {/* Actions */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Badge variant="outline" className="text-xs">
                                                {invite.projectCategory}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Link href={`/mentor/invites/${invite.id}`}>
                                                <Button size="sm" variant="outline">
                                                    <Eye className="w-4 h-4 mr-1" />
                                                    Ver Detalhes
                                                </Button>
                                            </Link>
                                            {invite.status === "pending" && (
                                                <Link href={`/mentor/invites/${invite.id}`}>
                                                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                                        <Target className="w-4 h-4 mr-1" />
                                                        Responder
                                                    </Button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
