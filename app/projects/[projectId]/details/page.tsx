"use client"

import { use } from "react"
import ProjectDetailsMentor from "../../../../components/pageComponents/project-details-mentor"

export default function ProjectDetailsPage({ params }: { params: Promise<{ projectId: string }> }) {
    const { projectId } = use(params)

    // Pegue o mentorId da autenticação real (Clerk, etc)
    const mentorId = 1 // Substituir futuramente

    return <ProjectDetailsMentor projectId={Number(projectId)} mentorId={mentorId} />
}
