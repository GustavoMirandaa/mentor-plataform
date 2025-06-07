import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { calculateMentorMatches } from "@/lib/matching-algorithm"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const projectId = Number.parseInt(params.id)

        if (isNaN(projectId)) {
            return NextResponse.json({ error: "Invalid project ID" }, { status: 400 })
        }

        // Fetch project
        const project = await prisma.project.findUnique({
            where: { id: projectId },
        })

        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 })
        }

        // Fetch all mentors
        const mentors = await prisma.mentor.findMany()

        // Calculate matches
        const mentorMatches = calculateMentorMatches(project, mentors)

        // Filter mentors with at least 50% match
        const filteredMatches = mentorMatches.filter((mentor) => mentor.matchPercentage >= 50)

        return NextResponse.json({
            project,
            matches: filteredMatches,
            totalMentors: mentors.length,
            qualifiedMentors: filteredMatches.length,
        })
    } catch (error) {
        console.error("Error calculating matches:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
