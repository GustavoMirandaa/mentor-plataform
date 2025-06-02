"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Filter, Plus, Star, MapPin, DollarSign, Briefcase } from "lucide-react"
import Link from "next/link"

const mentors = [
  {
    id: 1,
    name: "Ana Silva",
    specialty: "Frontend Developer",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    rating: 4.9,
    reviews: 47,
    hourlyRate: 120,
    location: "São Paulo, SP",
    availability: "Disponível",
    projects: 15,
    joinDate: "2023-01-15",
    bio: "Especialista em desenvolvimento frontend com 8 anos de experiência",
  },
  {
    id: 2,
    name: "Carlos Santos",
    specialty: "DevOps Engineer",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    rating: 4.8,
    reviews: 32,
    hourlyRate: 150,
    location: "Rio de Janeiro, RJ",
    availability: "Ocupado",
    projects: 12,
    joinDate: "2023-03-20",
    bio: "Expert em infraestrutura cloud e automação de processos",
  },
  {
    id: 3,
    name: "Maria Costa",
    specialty: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    rating: 4.9,
    reviews: 56,
    hourlyRate: 100,
    location: "Belo Horizonte, MG",
    availability: "Disponível",
    projects: 18,
    joinDate: "2022-11-10",
    bio: "Designer com foco em experiência do usuário e interfaces intuitivas",
  },
  {
    id: 4,
    name: "João Oliveira",
    specialty: "Backend Developer",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    rating: 4.7,
    reviews: 28,
    hourlyRate: 130,
    location: "Porto Alegre, RS",
    availability: "Disponível",
    projects: 9,
    joinDate: "2023-05-08",
    bio: "Desenvolvedor backend especializado em APIs e arquitetura de sistemas",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    specialty: "Data Scientist",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
    rating: 4.8,
    reviews: 21,
    hourlyRate: 140,
    location: "Brasília, DF",
    availability: "Disponível",
    projects: 7,
    joinDate: "2023-07-12",
    bio: "Cientista de dados com expertise em machine learning e análise preditiva",
  },
]

export default function MentorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [skillFilter, setSkillFilter] = useState("all")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSkill =
      skillFilter === "all" || mentor.skills.some((skill) => skill.toLowerCase().includes(skillFilter.toLowerCase()))
    const matchesAvailability = availabilityFilter === "all" || mentor.availability === availabilityFilter

    return matchesSearch && matchesSkill && matchesAvailability
  })

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
              <Link href="/mentors" className="text-gray-900 font-medium">
                Mentores
              </Link>
              <Link href="/projects" className="text-gray-500 hover:text-gray-900">
                Projetos
              </Link>
              <Link href="/onboarding" className="text-gray-500 hover:text-gray-900">
                Onboarding
              </Link>
            </nav>
            <Link href="/onboarding">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Mentor
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mentores</h1>
          <p className="text-gray-600 mt-2">Gerencie sua rede de mentores especializados</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar mentores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={skillFilter} onValueChange={setSkillFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrar por skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as skills</SelectItem>
                  <SelectItem value="React">React</SelectItem>
                  <SelectItem value="Python">Python</SelectItem>
                  <SelectItem value="AWS">AWS</SelectItem>
                  <SelectItem value="Figma">Figma</SelectItem>
                </SelectContent>
              </Select>
              <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Disponibilidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="Disponível">Disponível</SelectItem>
                  <SelectItem value="Ocupado">Ocupado</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Mais Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
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
                      <p className="text-sm text-gray-500">{mentor.specialty}</p>
                    </div>
                  </div>
                  <Badge
                    variant={mentor.availability === "Disponível" ? "default" : "secondary"}
                    className={mentor.availability === "Disponível" ? "bg-green-100 text-green-800" : ""}
                  >
                    {mentor.availability}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{mentor.bio}</p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {mentor.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {mentor.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{mentor.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    {mentor.rating} ({mentor.reviews})
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    R$ {mentor.hourlyRate}/h
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {mentor.projects} projetos
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {mentor.location.split(",")[0]}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Ver Perfil
                  </Button>
                  <Button size="sm" className="flex-1">
                    Convidar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Resumo da Rede</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">{mentors.length}</div>
                <div className="text-sm text-gray-500">Total de Mentores</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {mentors.filter((m) => m.availability === "Disponível").length}
                </div>
                <div className="text-sm text-gray-500">Disponíveis</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  R$ {Math.round(mentors.reduce((acc, m) => acc + m.hourlyRate, 0) / mentors.length)}
                </div>
                <div className="text-sm text-gray-500">Valor Médio/Hora</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {(mentors.reduce((acc, m) => acc + m.rating, 0) / mentors.length).toFixed(1)}
                </div>
                <div className="text-sm text-gray-500">Avaliação Média</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
