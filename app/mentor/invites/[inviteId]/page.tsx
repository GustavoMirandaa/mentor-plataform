"use client"

import MentorInviteDetail from "../../../mentorsComponents/mentor-invite-detail"

export default function MentorInviteDetailPage({ params }: { params: { inviteId: string } }) {
    const inviteId = Number.parseInt(params.inviteId)

    return <MentorInviteDetail inviteId={inviteId} />
}
