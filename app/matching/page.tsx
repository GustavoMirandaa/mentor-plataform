"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, DollarSign, Clock, Users, Target, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

const projectToMatch = {
  id: 2,
  title: "Consultoria DevOps e Infraestrutura",
  client: "StartupXYZ",
  description: "Implementação de pipeline CI/CD e migração para cloud AWS",
  budget: 8500,
  duration: "6 semanas",
  skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  priority: "Alta",
  startDate: "2024-02-01",
}

const availableMentors = [
  {
    id: 2,
    name: "Carlos Santos",
    specialty: "DevOps Engineer",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    rating: 4.8,
    reviews: 32,
    hourlyRate: 150,
    location: "Rio de Janeiro, RJ",
    availability: "Disponível",
    projects: 12,
    matchScore: 95,
    estimatedCost: 3600,
    skillMatch: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    experience: "8 anos",
    lastProject: "Migração AWS para fintech",
  },
  {
    id: 6,
    name: "Roberto Silva",
    specialty: "Cloud Architect",
    skills: ["AWS", "Azure", "Terraform", "CI/CD"],
    rating: 4.7,
    reviews: 28,
    hourlyRate: 160,
    location: "São Paulo, SP",
    availability: "Disponível",
    projects: 15,
    matchScore: 88,
    estimatedCost: 3840,
    skillMatch: ["AWS", "CI/CD"],
    experience: "10 anos",
    lastProject: "Arquitetura multi-cloud",
  },
  {
    id: 7,
    name: "Ana Costa",
    specialty: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS"],
    rating: 4.6,
    reviews: 19,
    hourlyRate: 140,
    location: "Brasília, DF",
    availability: "Disponível",
    projects: 8,
    matchScore: 82,
    estimatedCost: 3360,
    skillMatch: ["Docker", "Kubernetes", "AWS"],
    experience: "6 anos",
    lastProject: "Containerização de aplicações",
  },
  {
    id: 8,
    name: "Pedro Oliveira",
    specialty: "Infrastructure Engineer",
    skills: ["AWS", "Terraform", "Monitoring", "Linux"],
    rating: 4.5,
    reviews: 15,
    hourlyRate: 130,
    location: "Recife, PE",
    availability: "Disponível",
    projects: 6,
    matchScore: 75,
    estimatedCost: 3120,
    skillMatch: ["AWS"],
    experience: "5 anos",
    lastProject: "Monitoramento de infraestrutura",
  },
]

export default function MatchingPage() {
  const [selectedMentors, setSelectedMentors] = useState<number[]>([])
  const [invitationsSent, setInvitationsSent] = useState<number[]>([])

  const toggleMentorSelection = (mentorId: number) => {
    setSelectedMentors((prev) => (prev.includes(mentorId) ? prev.filter((id) => id !== mentorId) : [...prev, mentorId]))
  }

  const sendInvitations = () => {
    setInvitationsSent([...invitationsSent, ...selectedMentors])
    setSelectedMentors([])
    alert(`Convites enviados para ${selectedMentors.length} mentor(es)!`)
  }

  const getMatchColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                MentorHub
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/mentors" className="text-gray-500 hover:text-gray-900">
                Mentores
              </Link>
              <Link href="/projects" className="text-gray-500 hover:text-gray-900">
                Projetos
              </Link>
              <Link href="/onboarding" className="text-gray-500 hover:text-gray-900">
                Onboarding
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sistema de Matching</h1>
          <p className="text-gray-600 mt-2">Encontre os mentores ideais para seus projetos</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Details */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Projeto para Match
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{projectToMatch.title}</h3>
                    <p className="text-sm text-gray-600">{projectToMatch.client}</p>
                  </div>

                  <p className="text-gray-700">{projectToMatch.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Orçamento:</span>
                      <span className="font-medium text-green-600">R$ {projectToMatch.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duração:</span>
                      <span className="font-medium">{projectToMatch.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Prioridade:</span>
                      <Badge className="bg-red-100 text-red-800">{projectToMatch.priority}</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Skills Necessárias:</h4>
                    <div className="flex flex-wrap gap-1">
                      {projectToMatch.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedMentors.length > 0 && (
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">
                          {selectedMentors.length} mentor(es) selecionado(s)
                        </span>
                      </div>
                      <Button onClick={sendInvitations} className="w-full" disabled={selectedMentors.length === 0}>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Convites
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Matching Results */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="matches" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="matches">Matches Sugeridos</TabsTrigger>
                <TabsTrigger value="all">Todos os Mentores</TabsTrigger>
              </TabsList>

              <TabsContent value="matches" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Melhores Matches ({availableMentors.length})</h2>
                  <p className="text-sm text-gray-600">Ordenado por compatibilidade</p>
                </div>

                {availableMentors.map((mentor) => (
                  <Card
                    key={mentor.id}
                    className={`transition-all ${
                      selectedMentors.includes(mentor.id) ? "ring-2 ring-purple-500 bg-purple-50" : "hover:shadow-md"
                    } ${invitationsSent.includes(mentor.id) ? "opacity-60" : ""}`}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                              {mentor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                            <p className="text-sm text-gray-600">{mentor.specialty}</p>
                            <p className="text-xs text-gray-500">{mentor.location}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className={`text-2xl font-bold ${getMatchColor(mentor.matchScore)}`}>
                            {mentor.matchScore}%
                          </div>
                          <p className="text-xs text-gray-500">Match Score</p>
                        </div>
                      </div>

                      {/* Match Progress */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Compatibilidade</span>
                          <span className={getMatchColor(mentor.matchScore)}>{mentor.matchScore}%</span>
                        </div>
                        <Progress value={mentor.matchScore} className="h-2" />
                      </div>

                      {/* Skills Match */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Skills Compatíveis:</h4>
                        <div className="flex flex-wrap gap-1">
                          {mentor.skills.map((skill, index) => (
                            <Badge
                              key={index}
                              variant={mentor.skillMatch.includes(skill) ? "default" : "outline"}
                              className={mentor.skillMatch.includes(skill) ? "bg-green-100 text-green-800" : ""}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {mentor.rating} ({mentor.reviews})
                        </div>
                        <div className="flex items-center text-gray-600">
                          <DollarSign className="w-4 h-4 mr-1" />
                          R$ {mentor.hourlyRate}/h
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-1" />
                          {mentor.projects} projetos
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          {mentor.experience}
                        </div>
                      </div>

                      {/* Cost Estimation */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Custo Estimado (6 semanas):</span>
                          <span className="font-semibold text-gray-900">
                            R$ {mentor.estimatedCost.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Baseado em {mentor.hourlyRate}/h × 24h estimadas</p>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        {invitationsSent.includes(mentor.id) ? (
                          <Button disabled className="flex-1">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Convite Enviado
                          </Button>
                        ) : (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              onClick={() => toggleMentorSelection(mentor.id)}
                            >
                              {selectedMentors.includes(mentor.id) ? "Remover" : "Selecionar"}
                            </Button>
                            <Button size="sm" className="flex-1">
                              Ver Perfil
                            </Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="all">
                <div className="text-center py-8">
                  <p className="text-gray-600">Lista completa de mentores disponíveis</p>
                  <Link href="/mentors">
                    <Button className="mt-4">Ver Todos os Mentores</Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
