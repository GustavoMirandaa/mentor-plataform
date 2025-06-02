import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Avatar} from "@/components/ui/avatar"

interface MentorPageProps {
    params: {
        id: string
    }
}

export default function MentorPage({params}: MentorPageProps) {
    return (
        <div className="container mx-auto py-8">
            <Card>
                <CardHeader>
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12"/>
                        <CardTitle>Mentor Profile</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium">ID: {params.id}</h3>
                            <p className="text-sm text-gray-500">Mentor details will be displayed here</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}