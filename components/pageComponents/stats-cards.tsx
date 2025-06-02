import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Briefcase, DollarSign, TrendingUp, Users} from "lucide-react";
export function StatCard() {
    const stats = [
        {title: "Mentores Ativos", value: "127", icon: Users, change: "+12%"},
        {title: "Projetos em Andamento", value: "23", icon: Briefcase, change: "+8%"},
        {title: "Receita Mensal", value: "R$ 45.2k", icon: DollarSign, change: "+15%"},
        {title: "Taxa de Match", value: "94%", icon: TrendingUp, change: "+3%"},
    ]
    return (


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                        <stat.icon className="h-4 w-4 text-gray-400"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <p className="text-xs text-green-600 mt-1">{stat.change} vs mês anterior</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}