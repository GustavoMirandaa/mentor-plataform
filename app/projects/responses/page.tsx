"use client"

import ProjectInviteResponses from "../../../components/pageComponents/project-invite-responses"

export default function ProjectResponsesPage({ params }: { params: { projectId: string } }) {
    const projectId = Number.parseInt(params.projectId)

    return <ProjectInviteResponses projectId={projectId} />
}
