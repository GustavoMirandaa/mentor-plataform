"use client"

import MentorNotifications from "../mentorsComponents/mentor-notifications"

export default function MentorNotificationsPage() {
    // In a real app, you'd get the mentorId from your authentication system
    // For example, from Clerk, NextAuth, or your session management
    const mentorId = 1 // Replace with actual mentor ID from auth

    return <MentorNotifications mentorId={mentorId} />
}
