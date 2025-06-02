import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export function TopMentors(){

    const topMentors = [
        { name: "Ana Silva", specialty: "React/Next.js", rating: 4.9, projects: 15, hourlyRate: 120 },
        { name: "Carlos Santos", specialty: "DevOps/AWS", rating: 4.8, projects: 12, hourlyRate: 150 },
        { name: "Maria Costa", specialty: "UI/UX Design", rating: 4.9, projects: 18, hourlyRate: 100 },
    ]

    return(

<div>
    <Card>
        <CardHeader>
            <CardTitle>Top Mentores</CardTitle>
            <CardDescription>Melhores avaliados este mês</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                {topMentors.map((mentor, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-medium">
                            {mentor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-gray-900">{mentor.name}</p>
                            <p className="text-sm text-gray-500">{mentor.specialty}</p>
                            <div className="flex items-center mt-1">
                                <span className="text-sm text-yellow-500">★ {mentor.rating}</span>
                                <span className="text-sm text-gray-500 ml-2">R$ {mentor.hourlyRate}/h</span>
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