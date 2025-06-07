"use client"

import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import MentorNotifications from "../mentorsComponents/mentor-notifications"
import MentorInviteDetail from "../mentorsComponents/mentor-invite-detail"

export default function Page() {
    const { user } = useUser()
    const [mentorId, setMentorId] = useState<number | null>(null)
    const [currentView, setCurrentView] = useState<"notifications" | "detail">("notifications")
    const [selectedInviteId, setSelectedInviteId] = useState<number | null>(null)

    useEffect(() => {
        const fetchMentorId = async () => {
            if (user) {
                const res = await fetch(`/api/mentors/by-user/${user.id}`)
                if (res.ok) {
                    const data = await res.json()
                    setMentorId(data.mentorId)
                } else {
                    console.error("Mentor não encontrado para o usuário")
                }
            }
        }

        fetchMentorId()
    }, [user])

    const showInviteDetail = (inviteId: number) => {
        setSelectedInviteId(inviteId)
        setCurrentView("detail")
    }

    const showNotifications = () => {
        setCurrentView("notifications")
        setSelectedInviteId(null)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white border-b border-gray-200 p-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center space-x-4">
                        <Button variant={currentView === "notifications" ? "default" : "outline"} onClick={showNotifications}>
                            Notificações
                        </Button>
                        <Button
                            variant={currentView === "detail" ? "default" : "outline"}
                            onClick={() => showInviteDetail(1)}
                            disabled={!selectedInviteId && currentView !== "detail"}
                        >
                            Detalhes do Convite
                        </Button>
                    </div>
                </div>
            </div>

            {/* Content */}
            {mentorId ? (
                <>
                    {currentView === "notifications" && <MentorNotifications mentorId={mentorId} />}
                    {currentView === "detail" && selectedInviteId && <MentorInviteDetail inviteId={selectedInviteId} />}
                </>
            ) : (
                <p className="p-6 text-center text-gray-600">Carregando informações do mentor...</p>
            )}
        </div>
    )
}
