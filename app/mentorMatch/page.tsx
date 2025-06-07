"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Star, Clock, DollarSign, Filter, ArrowLeft, Eye, CheckCircle, Users, Target, Mail } from "lucide-react"
import Link from "next/link"

// Sample project data based on the form
type Mentor = {
    id: number
    name: string
    occupation: string
    experience: string
    location: string
    hourlyRate: string
    availability: string
    rating: number
    reviewCount: number
    matchPercentage: number
    skills: string[]
    matchingSkills: string[]
    bio: string
    completedProjects: number
    responseTime: string
    lastActive: string
    portfolioHighlights: string[]
}

export default function MentorMatchPage() {
    const [sortBy, setSortBy] = useState("match")
    const [mentors, setMentors] = useState<Mentor[]>([])
    const [invitedMentors, setInvitedMentors] = useState<number[]>([])

    useEffect(() => {
        fetch("/api/match-mentores")
            .then((res) => res.json())
            .then((data) => setMentors(data))
    }, [])
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
        if (percentage >= 85) return "text-blue-700 bg-blue-100 border-blue-200"
        if (percentage >= 80) return "text-yellow-700 bg-yellow-100 border-yellow-200"
        return "text-gray-700 bg-gray-100 border-gray-200"
    }

    const handleInviteMentor = (mentorId: number) => {
        setInvitedMentors((prev) => [...prev, mentorId])
        // Here you would typically make an API call to send the invitation
        console.log(`Convite enviado para mentor ID: ${mentorId}`)
    }

    const sortedMentors = [...mentors].sort((a, b) => {
        switch (sortBy) {
            case "match":
                return b.matchPercentage - a.matchPercentage
            case "rating":
                return b.rating - a.rating
            case "price":
                return Number.parseInt(a.hourlyRate) - Number.parseInt(b.hourlyRate)
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
                            <Link href="/projetos" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Voltar para Projetos
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-600">{invitedMentors.length} convite(s) enviado(s)</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Project Summary */}

                {/* Match Results Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Target className="w-6 h-6 mr-2 text-blue-600" />
                            Mentores Compatíveis
                        </h2>
                        <p className="text-gray-600">{mentors.length} mentores encontrados • Ordenados por compatibilidade</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <Filter className="w-4 h-4 text-gray-500" />
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-48">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="match">Maior Compatibilidade</SelectItem>
                                    <SelectItem value="rating">Melhor Avaliação</SelectItem>
                                    <SelectItem value="price">Menor Preço</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Mentors Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {sortedMentors.map((mentor) => (
                        <Card key={mentor.id} className="hover:shadow-lg transition-all duration-200 border-0 shadow-md">
                            <CardContent className="p-6">
                                {/* Header with Avatar and Match */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        <Avatar className="w-16 h-16 border-2 border-gray-100">
                                            <AvatarImage src="/placeholder.svg?height=64&width=64" />
                                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-semibold">
                                                {getInitials(mentor.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                                            <p className="text-blue-600 font-medium">{mentor.occupation}</p>
                                            <div className="flex items-center text-sm text-gray-600 mt-1">
                                                <MapPin className="w-3 h-3 mr-1" />
                                                {mentor.location}
                                                <span className="mx-2">•</span>
                                                <span className="text-green-600">{mentor.lastActive}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getMatchColor(mentor.matchPercentage)}`}
                                        >
                                            <Target className="w-3 h-3 mr-1" />
                                            {mentor.matchPercentage}% Match
                                        </div>
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{mentor.bio}</p>

                                {/* Skills Match */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {mentor.skills.slice(0, 8).map((skill, index) => (
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
                                                {mentor.matchingSkills.includes(skill) && <CheckCircle className="w-3 h-3 ml-1" />}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Portfolio Highlights */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Projetos em Destaque:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        {mentor.portfolioHighlights.map((highlight, index) => (
                                            <li key={index} className="flex items-center">
                                                <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-4 mb-4 py-3 bg-gray-50 rounded-lg px-3">
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                            <span className="font-semibold text-gray-900">{mentor.rating}</span>
                                        </div>
                                        <p className="text-xs text-gray-600">({mentor.reviewCount} avaliações)</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <Users className="w-4 h-4 text-blue-500 mr-1" />
                                            <span className="font-semibold text-gray-900">{mentor.completedProjects}</span>
                                        </div>
                                        <p className="text-xs text-gray-600">Projetos</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <Clock className="w-4 h-4 text-green-500 mr-1" />
                                            <span className="font-semibold text-gray-900">{mentor.responseTime}</span>
                                        </div>
                                        <p className="text-xs text-gray-600">Resposta</p>
                                    </div>
                                </div>

                                <Separator className="my-4" />

                                {/* Price and Actions */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-xl font-bold text-green-600">R$ {mentor.hourlyRate}</div>
                                        <span className="text-sm text-gray-500">/hora</span>
                                        <Badge variant="outline" className="text-xs">
                                            {mentor.availability === "full-time"
                                                ? "Full-time"
                                                : mentor.availability === "part-time"
                                                    ? "Part-time"
                                                    : "Flexível"}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button size="sm" variant="outline" className="border-gray-300">
                                            <Eye className="w-4 h-4 mr-1" />
                                            Ver Perfil
                                        </Button>
                                        {invitedMentors.includes(mentor.id) ? (
                                            <Button size="sm" disabled className="bg-green-100 text-green-700 border-green-200">
                                                <CheckCircle className="w-4 h-4 mr-1" />
                                                Convite Enviado
                                            </Button>
                                        ) : (
                                            <Button
                                                size="sm"
                                                onClick={() => handleInviteMentor(mentor.id)}
                                                className="bg-blue-600 hover:bg-blue-700 text-white"
                                            >
                                                <Mail className="w-4 h-4 mr-1" />
                                                Convidar Mentor
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Summary Footer */}
                {invitedMentors.length > 0 && (
                    <Card className="mt-8 bg-blue-50 border-blue-200">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
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
