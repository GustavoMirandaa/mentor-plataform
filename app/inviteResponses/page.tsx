"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import MentorNotifications from "../mentorsComponents/mentor-notifications"
import MentorInviteDetail from "../mentorsComponents/mentor-invite-detail"
import ProjectDetailsMentor from "../../components/pageComponents/project-details-mentor"

export default function Page() {
    const [currentView, setCurrentView] = useState<"notifications" | "invite-detail" | "project-detail">("notifications")
    const [selectedInviteId, setSelectedInviteId] = useState<number | null>(null)
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)

    // In a real app, you'd get the mentorId from authentication/session
    const mentorId = 6

    const showInviteDetail = (inviteId: number) => {
        setSelectedInviteId(inviteId)
        setCurrentView("invite-detail")
    }

    const showProjectDetail = (projectId: number) => {
        setSelectedProjectId(projectId)
        setCurrentView("project-detail")
    }

    const showNotifications = () => {
        setCurrentView("notifications")
        setSelectedInviteId(null)
        setSelectedProjectId(null)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Demo Navigation */}
            <div className="bg-white border-b border-gray-200 p-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center space-x-4">
                        <Button variant={currentView === "notifications" ? "default" : "outline"} onClick={showNotifications}>
                            Notificações
                        </Button>
                        <Button
                            variant={currentView === "invite-detail" ? "default" : "outline"}
                            onClick={() => showInviteDetail(1)}
                            disabled={!selectedInviteId && currentView !== "invite-detail"}
                        >
                            Detalhes do Convite
                        </Button>
                        <Button
                            variant={currentView === "project-detail" ? "default" : "outline"}
                            onClick={() => showProjectDetail(1)}
                            disabled={!selectedProjectId && currentView !== "project-detail"}
                        >
                            Detalhes do Projeto
                        </Button>
                    </div>
                </div>
            </div>

            {/* Content */}
            {currentView === "notifications" && <MentorNotifications mentorId={mentorId} />}
            {currentView === "invite-detail" && selectedInviteId && <MentorInviteDetail inviteId={selectedInviteId} />}
            {currentView === "project-detail" && selectedProjectId && (
                <ProjectDetailsMentor projectId={selectedProjectId} mentorId={mentorId} />
            )}
        </div>
    )
}
