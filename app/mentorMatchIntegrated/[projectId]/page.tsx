"use client"

import { use } from "react"
import MentorMatchIntegrated from "../../mentorsComponents/mentor-match-integrated"

interface PageProps {
    params: Promise<{ projectId: string }>
}

export default function Page(props: PageProps) {
    const { projectId } = use(props.params)
    const projectIdNumber = parseInt(projectId)

    return <MentorMatchIntegrated projectId={projectIdNumber} />
}
