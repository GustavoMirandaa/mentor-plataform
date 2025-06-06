import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Briefcase, TrendingUp, Users} from "lucide-react";

export function QuickActions() {


        return (
            <div className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-blue-700">ações rápidas</CardTitle>
                        <CardDescription>Acesso rápido às funcionalidades principais</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Link href="/mentors">
                                <Button variant="outline" className="w-full h-20 flex flex-col">
                                    <Users className="w-6 h-6 mb-2"/>
                                    Gerenciar Mentores
                                </Button>
                            </Link>
                            <Link href="/newproject">
                                <Button variant="outline" className="w-full h-20 flex flex-col">
                                    <Briefcase className="w-6 h-6 mb-2"/>
                                    Criar Projeto
                                </Button>
                            </Link>
                            <Link href="/matching">
                                <Button variant="outline" className="w-full h-20 flex flex-col">
                                    <TrendingUp className="w-6 h-6 mb-2"/>
                                    Sistema de Match
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
}
