"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  Plus,
  Calendar,
  DollarSign,
  Users,
  Clock,
} from "lucide-react"
import { NavBar } from "@/components/pageComponents/navbar"
import Link from "next/link"

interface Project {
  id: number
  tittle: string
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
  mentors?: { name: string; role: string }[]
  status?: string
  progress?: number
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("Todos os status")
  const [priorityFilter, setPriorityFilter] = useState("Todas as prioridades")

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects")
        const data = await res.json()
        setProjects(data)
      } catch (error) {
        console.error("Erro ao buscar projetos:", error)
      }
    }
    fetchProjects()
  }, [])

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
        project.tittle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
        statusFilter === "Todos os status" || project.status === statusFilter
    const matchesPriority =
        priorityFilter === "Todas as prioridades" || project.priority === priorityFilter
    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em Andamento":
        return "bg-blue-100 text-blue-800"
      case "Concluído":
        return "bg-green-100 text-green-800"
      case "Aguardando Match":
        return "bg-yellow-100 text-yellow-800"
      case "Planejamento":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "bg-red-100 text-red-800"
      case "Média":
        return "bg-yellow-100 text-yellow-800"
      case "Baixa":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-700">Projetos</h1>
            <p className="text-gray-600 mt-2">
              Gerencie contratos e faça o match com mentores
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                      placeholder="Buscar projetos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos os status">Todos os status</SelectItem>
                    <SelectItem value="Em Andamento">Em Andamento</SelectItem>
                    <SelectItem value="Aguardando Match">Aguardando Match</SelectItem>
                    <SelectItem value="Concluído">Concluído</SelectItem>
                    <SelectItem value="Planejamento">Planejamento</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Prioridade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todas as prioridades">Todas as prioridades</SelectItem>
                    <SelectItem value="Alta">Alta</SelectItem>
                    <SelectItem value="Média">Média</SelectItem>
                    <SelectItem value="Baixa">Baixa</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Mais Filtros
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Projects List */}
          <div className="space-y-6">
            {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-xl">{project.tittle}</CardTitle>
                          {project.status && (
                              <Badge className={getStatusColor(project.status)}>
                                {project.status}
                              </Badge>
                          )}
                          {project.priority && (
                              <Badge className={getPriorityColor(project.priority)}>
                                {project.priority}
                              </Badge>
                          )}
                        </div>
                        <CardDescription className="text-base">{project.category}</CardDescription>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                      </div>
                      <div className="text-right">
                        {project.budget && (
                            <div className="text-2xl font-bold text-green-600">
                              R$ {Number(project.budget).toLocaleString()}
                            </div>
                        )}
                        <div className="text-sm text-gray-500">{project.duration}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Skills Necessárias:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, index) => (
                            <Badge key={index} variant="outline">
                              {skill}
                            </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.start_date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {project.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {project.mentors?.length || 0} mentores
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        R$ {Number(project.budget || 0).toLocaleString()}
                      </div>
                    </div>

                    {project.progress && project.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progresso</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {project.mentors && project.mentors.length > 0 ? (
                            <>
                              <span className="text-sm font-medium text-gray-700">Mentores:</span>
                              <div className="flex -space-x-2">
                                {project.mentors.map((mentor, index) => (
                                    <Avatar key={index} className="w-8 h-8 border-2 border-white">
                                      <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs">
                                        {mentor.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                ))}
                              </div>
                            </>
                        ) : (
                            <span className="text-sm text-gray-500">Nenhum mentor atribuído</span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        {project.status === "Aguardando Match" && (
                            <Link href={`/mentorMatchIntegrated/${project.id}`}>
                              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                                Fazer Match
                              </Button>
                            </Link>
                        )}
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Resumo dos Projetos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {projects.length}
                  </div>
                  <div className="text-sm text-gray-500">Total de Projetos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {projects.filter((p) => p.status === "Em Andamento").length}
                  </div>
                  <div className="text-sm text-gray-500">Em Andamento</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">
                    {projects.filter((p) => p.status === "Aguardando Match").length}
                  </div>
                  <div className="text-sm text-gray-500">Aguardando Match</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    R$ {projects.reduce((acc, p) => acc + Number(p.budget || 0), 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">Valor Total</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
  )
}
