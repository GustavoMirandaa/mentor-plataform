
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {BadgeCheck, CircleDollarSign, DollarSign, Filter, MapPin, Search,} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import React from "react";
import {PrismaClient} from "@/prisma/client"
import Link from "next/link";


export async function MentorsDashboard() {


    const prisma = new PrismaClient()
    const mentors = await prisma.mentor.findMany()

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-blue-700">Mentores</h1>
                <p className="text-gray-600 mt-2">Gerencie sua rede de mentores especializados</p>
            </div>

            {/* Filters */}
            <Card className="mb-8">
                <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>
                            <Input
                                placeholder="Buscar mentores..."
                                className="pl-10"
                            />
                        </div>
                        <Button variant="outline">
                            <Filter className="w-4 h-4 mr-2"/>
                            Mais Filtros
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors.map((mentor) => (
                    <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3">
                                    <Avatar className="w-12 h-12">
                                        <AvatarFallback
                                            className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                                            {mentor.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h2></h2>
                                        <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 mb-4">{mentor.bio}</p>
                            {/* Skills */}
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-1">
                                    {mentor.skill.slice(0, 3).map((skill, index) => (
                                        <Badge key={index} variant="outline" className="text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                    {mentor.skill.length > 3 && (
                                        <Badge variant="outline" className="text-xs">
                                            +{mentor.skill.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-1"/>
                                    {mentor.address}
                                </div>
                                <div>
                                    <CircleDollarSign className="w-4 h-4 mr-1"/>
                                    {mentor.hourly_rate}
                                </div>
                                <div>
                                    <BadgeCheck className="w-4 h-4 mr-1"/>
                                    {mentor.weekly_availability}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-2">
                                <Link href={`/mentores/${mentor.id}`}>
                                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                                        Ver perfil
                                    </Button>
                                </Link>
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
                            <div className="text-sm text-gray-500">Disponíveis</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500">Valor Médio/Hora</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500">Avaliação Média</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}