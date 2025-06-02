    "use client"

    import { useState } from "react"
    import { Button } from "@/components/ui/button"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
    import { Badge } from "@/components/ui/badge"
    import { Users, Briefcase, DollarSign, TrendingUp, Plus, Filter } from "lucide-react"
    import Link from "next/link"
    import {QuickActions} from "@/components/pageComponents/quick-actions";
    import {TopMentors} from "@/components/pageComponents/top-mentors";
    import {StatCard} from "@/components/pageComponents/stats-cards";
    import {NavBar} from "@/components/pageComponents/navbar";



    const recentProjects = [
      {
        id: 1,
        title: "Desenvolvimento App Mobile",
        client: "TechCorp",
        budget: "R$ 15.000",
        mentors: 3,
        status: "Em Andamento",
      },
      {
        id: 2,
        title: "Consultoria DevOps",
        client: "StartupXYZ",
        budget: "R$ 8.500",
        mentors: 2,
        status: "Aguardando Match",
      },
      { id: 3, title: "Treinamento React", client: "EduTech", budget: "R$ 12.000", mentors: 4, status: "Concluído" },
    ]


    export default function Dashboard() {
      const [searchTerm, setSearchTerm] = useState("")

      return (
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
        <NavBar></NavBar>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats Grid */}
            <StatCard></StatCard>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Projects */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Projetos Recentes</CardTitle>
                        <CardDescription>Últimos contratos e seu status</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filtrar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentProjects.map((project) => (
                        <div
                          key={project.id}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{project.title}</h3>
                            <p className="text-sm text-gray-500">{project.client}</p>
                            <div className="flex items-center mt-2 space-x-4">
                              <span className="text-sm font-medium text-green-600">{project.budget}</span>
                              <span className="text-sm text-gray-500">{project.mentors} mentores</span>
                            </div>
                          </div>
                          <Badge
                            variant={
                              project.status === "Concluído"
                                ? "default"
                                : project.status === "Em Andamento"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Top Mentors */}
            <TopMentors></TopMentors>
            </div>
            {/* Quick Actions */}
            <QuickActions></QuickActions>
          </main>
        </div>
      )
    }
