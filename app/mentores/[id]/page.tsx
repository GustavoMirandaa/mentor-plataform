import {PrismaClient} from "@/prisma/client"
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    MapPin,
    Mail,
    Phone,
    Linkedin,
    Clock,
    DollarSign,
    Star,
    ArrowLeft,
    MessageCircle,
    Calendar,
    Award,
} from "lucide-react";
import Link from "next/link";
import { NavBar } from "@/components/pageComponents/navbar";

const prisma = new PrismaClient();

type PageProps = {
    params: {
        id: string;
    };
};

export default async function MentorProfilePage({ params }: PageProps) {
    const { id } = params;

    const mentorData = await prisma.mentor.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!mentorData) return notFound();

    const getInitials = (name: string) =>
        name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);

    const getExperienceText = (exp: string | null) => {
        const expMap: { [key: string]: string } = {
            "1-2": "1-2 anos",
            "3-5": "3-5 anos",
            "6-10": "6-10 anos",
            "10+": "Mais de 10 anos",
        };
        return exp ? expMap[exp] || exp : "Não informado";
    };

    const getAvailabilityText = (availability: string | null) => {
        const availMap: { [key: string]: string } = {
            "part-time": "Part-time (até 20h/semana)",
            "full-time": "Full-time (40h/semana)",
            flexible: "Flexível",
            weekends: "Apenas fins de semana",
        };
        return availability ? availMap[availability] || availability : "Não informado";
    };

    return (

        <div className="min-h-screen bg-gray-50">
                <NavBar></NavBar>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/mentors" className="flex items-center text-gray-600 hover:text-gray-900">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Voltar para Mentores
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Button variant="outline" className="flex items-center">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Enviar Mensagem
                            </Button>
                            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                Agendar Reunião
                            </Button>
                        </div>
                    </div>
                </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                    <Avatar className="w-24 h-24 mb-4">
                                        <AvatarImage src="/placeholder.svg?height=96&width=96" />
                                        <AvatarFallback className="text-xl bg-blue-600 text-white">
                                            {getInitials(mentorData.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{mentorData.name}</h1>
                                    <p className="text-lg text-blue-600 font-medium mb-4">{mentorData.ocuppation}</p>

                                    <div className="flex items-center text-gray-600 mb-2">
                                        <Award className="w-4 h-4 mr-2" />
                                        <span>{getExperienceText(mentorData.exp)}</span>
                                    </div>

                                    <div className="flex items-center text-gray-600 mb-4">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span>{mentorData.address}</span>
                                    </div>

                                    <div className="flex items-center space-x-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <span className="text-sm text-gray-600 ml-2">(4.9 • 127 avaliações)</span>
                                    </div>

                                    <div className="w-full space-y-3">
                                        <div className="flex items-center justify-between text-sm">

                                        </div>
                                        <div className="flex items-center justify-between text-sm">

                                        </div>
                                        <div className="flex items-center justify-between text-sm">

                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Informações de Contato</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="w-4 h-4 mr-3 text-gray-400" />
                                    <span className="text-sm">{mentorData.email}</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-4 h-4 mr-3 text-gray-400" />
                                    <span className="text-sm">{mentorData.phone}</span>
                                </div>
                                <div className="flex items-center">
                                    <Linkedin className="w-4 h-4 mr-3 text-gray-400" />
                                    <Link
                                        href={mentorData.linkedin || "#"}
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        LinkedIn Profile
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Valores e Disponibilidade</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                                        <span className="text-sm text-gray-600">Valor por hora</span>
                                    </div>
                                    <span className="font-semibold text-lg text-green-600">
                    R$ {mentorData.hourly_rate}
                  </span>
                                </div>
                                <Separator />
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-600">Disponibilidade</p>
                                        <p className="text-sm font-medium">
                                            {getAvailabilityText(mentorData.weekly_availability)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                    <span className="text-sm text-green-600 font-medium">Disponível agora</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Sobre o Mentor</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 leading-relaxed">{mentorData.bio}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Habilidades e Tecnologias</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {(mentorData.skill || []).map((skill, index) => (
                                        <Badge key={index} variant="secondary" className="px-3 py-1">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Tipos de Projeto Preferidos</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 leading-relaxed">
                                    Desenvolvimento de aplicações web modernas, consultoria em arquitetura de software e
                                    mentoria técnica para desenvolvedores júnior.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Avaliações Recentes</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    {
                                        name: "Maria Silva",
                                        rating: 5,
                                        comment: "Excelente mentor! Me ajudou muito com React e arquitetura de componentes.",
                                        date: "2 semanas atrás",
                                    },
                                    {
                                        name: "João Santos",
                                        rating: 5,
                                        comment: "Muito didático e paciente. Recomendo para quem quer aprender Node.js.",
                                        date: "1 mês atrás",
                                    },
                                ].map((review, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-2">
                                                <Avatar className="w-8 h-8">
                                                    <AvatarFallback className="text-xs">{getInitials(review.name)}</AvatarFallback>
                                                </Avatar>
                                                <span className="font-medium text-sm">{review.name}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="flex items-center">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500">{review.date}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-700">{review.comment}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
