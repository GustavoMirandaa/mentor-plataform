import {PrismaClient} from "@/prisma/client"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { Filter } from "lucide-react"

export async function RecentProjects() {
    const prisma = new PrismaClient()
    const projects = await prisma.project.findMany()

    return (
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-blue-700">Projetos recentes</CardTitle>
                            <CardDescription>Últimos contratos e seu status</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                            <Filter className="w-4 h-4 mr-2"/>
                            Filtrar
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                            >
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">{project.tittle}</h3>
                                    <p>{project.description}</p>
                                    <h3 className="text-xs font-medium text-gray-900">Categoria do
                                        projeto: {project.category}</h3>
                                    <div className="flex items-center mt-2 space-x-4">
                                        <span
                                            className="text-sm font-medium text-green-600">{project.budget?.toString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}