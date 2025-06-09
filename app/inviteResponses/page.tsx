"use client"

import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import MentorNotifications from "../mentorsComponents/mentor-notifications"
import MentorInviteDetail from "../mentorsComponents/mentor-invite-detail"
import ProjectDetailsMentor from "../../components/pageComponents/project-details-mentor"
import { NavBar } from "@/components/pageComponents/navbar"

export default function Page() {
    const { user, isLoaded } = useUser()
    const [mentorId, setMentorId] = useState<number | null>(null)
    const [loadingMentor, setLoadingMentor] = useState(true)
    const [currentView, setCurrentView] = useState<"notifications" | "invite-detail" | "project-detail">("notifications")
    const [selectedInviteId, setSelectedInviteId] = useState<number | null>(null)
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)

    useEffect(() => {
        const fetchMentorId = async () => {
            if (!user?.id) return

            try {
                const res = await fetch(`/api/mentors/by-user/${user.id}`)
                const data = await res.json()

                if (res.ok && data.mentorId) {
                    setMentorId(data.mentorId)
                } else {
                    console.error("Erro ao buscar mentorId:", data?.error)
                }
            } catch (err) {
                console.error("Erro na requisição do mentorId:", err)
            } finally {
                setLoadingMentor(false)
            }
        }

        if (isLoaded) fetchMentorId()
    }, [user, isLoaded])

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

    if (!isLoaded || loadingMentor) return <div>Carregando...</div>
    if (!mentorId) return <div>Mentor não encontrado</div>

    return (
        <div className="min-h-screen bg-gray-50">
           <NavBar></NavBar>

            {currentView === "notifications" && <MentorNotifications mentorId={mentorId} />}
            {currentView === "invite-detail" && selectedInviteId && <MentorInviteDetail inviteId={selectedInviteId} />}
            {currentView === "project-detail" && selectedProjectId && (
                <ProjectDetailsMentor projectId={selectedProjectId} mentorId={mentorId} />
            )}
        </div>
    )
}
