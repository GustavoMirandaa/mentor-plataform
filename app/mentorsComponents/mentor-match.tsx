"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    MapPin,
    Star,
    Clock,
    DollarSign,
    Filter,
    ArrowLeft,
    Send,
    Eye,
    Heart,
    CheckCircle,
    Users,
    Target,
} from "lucide-react"
import Link from "next/link"

// Sample project data
const projectData = {
    title: "Desenvolvimento de App Mobile",
    category: "Mobile Development",
    description:
        "Desenvolvimento de aplicativo mobile para delivery de comida com funcionalidades de geolocalização e pagamento integrado.",
    requiredSkills: ["React Native", "TypeScript", "Node.js", "MongoDB", "Firebase"],
    budget: "R$ 15.000",
    duration: "3 meses",
    priority: "Alta",
}

// Sample mentor data with match scores
const mentors = [
    {
        id: 1,
        name: "Carlos Silva",
        occupation: "Mobile Developer",
        experience: "6-10",
        location: "São Paulo, SP",
        hourlyRate: "120",
        availability: "full-time",
        rating: 4.9,
        reviewCount: 87,
        matchPercentage: 95,
        skills: ["React Native", "TypeScript", "Node.js", "MongoDB", "Firebase", "AWS"],
        matchingSkills: ["React Native", "TypeScript", "Node.js", "MongoDB", "Firebase"],
        bio: "Especialista em desenvolvimento mobile com foco em React Native e arquiteturas escaláveis.",
        completedProjects: 42,
        responseTime: "1 hora",
    },
    {
        id: 2,
        name: "Ana Rodrigues",
        occupation: "Fullstack Developer",
        experience: "3-5",
        location: "Rio de Janeiro, RJ",
        hourlyRate: "100",
        availability: "part-time",
        rating: 4.8,
        reviewCount: 65,
        matchPercentage: 88,
        skills: ["React Native", "JavaScript", "Node.js", "PostgreSQL", "Firebase", "Docker"],
        matchingSkills: ["React Native", "Node.js", "Firebase"],
        bio: "Desenvolvedora fullstack com experiência em aplicações mobile e web modernas.",
        completedProjects: 28,
        responseTime: "2 horas",
    },
    {
        id: 3,
        name: "Pedro Santos",
        occupation: "Mobile Developer",
        experience: "10+",
        location: "Belo Horizonte, MG",
        hourlyRate: "180",
        availability: "flexible",
        rating: 5.0,
        reviewCount: 124,
        matchPercentage: 92,
        skills: ["React Native", "TypeScript", "Flutter", "Node.js", "MongoDB", "GraphQL"],
        matchingSkills: ["React Native", "TypeScript", "Node.js", "MongoDB"],
        bio: "Senior mobile developer com mais de 10 anos de experiência em projetos complexos.",
        completedProjects: 78,
        responseTime: "30 min",
    },
    {
        id: 4,
        name: "Mariana Costa",
        occupation: "Frontend Developer",
        experience: "3-5",
        location: "Florianópolis, SC",
        hourlyRate: "90",
        availability: "part-time",
        rating: 4.7,
        reviewCount: 43,
        matchPercentage: 75,
        skills: ["React", "TypeScript", "React Native", "CSS", "Firebase"],
        matchingSkills: ["React Native", "TypeScript", "Firebase"],
        bio: "Frontend developer com experiência crescente em desenvolvimento mobile.",
        completedProjects: 19,
        responseTime: "3 horas",
    },
    {
        id: 5,
        name: "Rafael Lima",
        occupation: "Backend Developer",
        experience: "6-10",
        location: "Recife, PE",
        hourlyRate: "130",
        availability: "full-time",
        rating: 4.8,
        reviewCount: 91,
        matchPercentage: 82,
        skills: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Docker"],
        matchingSkills: ["Node.js", "TypeScript", "MongoDB"],
        bio: "Backend developer especializado em APIs robustas e arquiteturas de microserviços.",
        completedProjects: 56,
        responseTime: "1 hora",
    },
]

export default function MentorMatch() {
    const [sortBy, setSortBy] = useState("match")
    const [selectedMentors, setSelectedMentors] = useState<number[]>([])

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
    }

    const getMatchColor = (percentage: number) => {
        if (percentage >= 90) return "text-green-600 bg-green-50"
        if (percentage >= 80) return "text-blue-600 bg-blue-50"
        if (percentage >= 70) return "text-yellow-600 bg-yellow-50"
        return "text-gray-600 bg-gray-50"
    }

    const toggleMentorSelection = (mentorId: number) => {
        setSelectedMentors((prev) => (prev.includes(mentorId) ? prev.filter((id) => id !== mentorId) : [...prev, mentorId]))
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
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/projetos" className="flex items-center text-gray-600 hover:text-gray-900">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Voltar para Projetos
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Button variant="outline" disabled={selectedMentors.length === 0}>
                                <Send className="w-4 h-4 mr-2" />
                                Enviar Convites ({selectedMentors.length})
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Project Summary */}
                <Card className="mb-8">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl text-blue-700">{projectData.title}</CardTitle>
                                <p className="text-gray-600 mt-1">{projectData.category}</p>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <DollarSign className="w-4 h-4 mr-1" />
                                    {projectData.budget}
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {projectData.duration}
                                </div>
                                <Badge variant={projectData.priority === "Alta" ? "destructive" : "secondary"}>
                                    {projectData.priority}
                                </Badge>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 mb-4">{projectData.description}</p>
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">Habilidades Necessárias:</h4>
                            <div className="flex flex-wrap gap-2">
                                {projectData.requiredSkills.map((skill, index) => (
                                    <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Match Results Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                            <Target className="w-6 h-6 mr-2 text-blue-600" />
                            Mentores Compatíveis
                        </h2>
                        <p className="text-gray-600">
                            Encontramos {mentors.length} mentores que correspondem aos requisitos do seu projeto
                        </p>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {sortedMentors.map((mentor) => (
                        <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        <Avatar className="w-16 h-16">
                                            <AvatarImage src="/placeholder.svg?height=64&width=64" />
                                            <AvatarFallback className="bg-blue-600 text-white text-lg">
                                                {getInitials(mentor.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                                            <p className="text-blue-600 font-medium">{mentor.occupation}</p>
                                            <div className="flex items-center text-sm text-gray-600 mt-1">
                                                <MapPin className="w-3 h-3 mr-1" />
                                                {mentor.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(mentor.matchPercentage)}`}
                                        >
                                            <Target className="w-3 h-3 mr-1" />
                                            {mentor.matchPercentage}% Match
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mb-4">{mentor.bio}</p>

                                {/* Skills Match */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-900 mb-2">Habilidades Correspondentes:</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {mentor.skills.map((skill, index) => (
                                            <Badge
                                                key={index}
                                                variant={mentor.matchingSkills.includes(skill) ? "default" : "secondary"}
                                                className={mentor.matchingSkills.includes(skill) ? "bg-green-100 text-green-800" : ""}
                                            >
                                                {skill}
                                                {mentor.matchingSkills.includes(skill) && <CheckCircle className="w-3 h-3 ml-1" />}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                            <span className="font-medium">{mentor.rating}</span>
                                        </div>
                                        <p className="text-gray-600">({mentor.reviewCount} avaliações)</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <Users className="w-4 h-4 text-blue-500 mr-1" />
                                            <span className="font-medium">{mentor.completedProjects}</span>
                                        </div>
                                        <p className="text-gray-600">Projetos</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <Clock className="w-4 h-4 text-green-500 mr-1" />
                                            <span className="font-medium">{mentor.responseTime}</span>
                                        </div>
                                        <p className="text-gray-600">Resposta</p>
                                    </div>
                                </div>

                                <Separator className="my-4" />

                                {/* Price and Actions */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-lg font-semibold text-green-600">R$ {mentor.hourlyRate}/hora</div>
                                        <Badge variant="outline" className="text-xs">
                                            {mentor.availability === "full-time"
                                                ? "Full-time"
                                                : mentor.availability === "part-time"
                                                    ? "Part-time"
                                                    : "Flexível"}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => toggleMentorSelection(mentor.id)}
                                            className={selectedMentors.includes(mentor.id) ? "bg-blue-50 border-blue-300" : ""}
                                        >
                                            <Heart
                                                className={`w-4 h-4 mr-1 ${selectedMentors.includes(mentor.id) ? "fill-blue-500 text-blue-500" : ""}`}
                                            />
                                            {selectedMentors.includes(mentor.id) ? "Selecionado" : "Selecionar"}
                                        </Button>
                                        <Button size="sm" variant="outline">
                                            <Eye className="w-4 h-4 mr-1" />
                                            Ver Perfil
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom Actions */}
                {selectedMentors.length > 0 && (
                    <div className="fixed bottom-6 right-6">
                        <Card className="shadow-lg">
                            <CardContent className="p-4">
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-medium">{selectedMentors.length} mentor(es) selecionado(s)</span>
                                    <Button className="bg-blue-600 hover:bg-blue-700">
                                        <Send className="w-4 h-4 mr-2" />
                                        Enviar Convites
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </main>
        </div>
    )
}
