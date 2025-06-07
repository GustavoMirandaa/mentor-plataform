"use client"

import MentorMatchIntegrated from "../../mentorsComponents/mentor-match-integrated"

export default function ProjectMatchPage({ params }: { params: { projectId: string } }) {
    const projectId = Number.parseInt(params.projectId)

    return <MentorMatchIntegrated projectId={projectId} />
}
