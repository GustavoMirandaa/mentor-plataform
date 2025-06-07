import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { mentorId: string } }) {
    try {
        const mentorId = Number.parseInt(params.mentorId)

        if (isNaN(mentorId)) {
            return NextResponse.json({ error: "Invalid mentor ID" }, { status: 400 })
        }

        // Fetch invites with project details
        const invites = await prisma.$queryRaw`
      SELECT 
        i.*,
        p.tittle as projectTitle,
        p.description as projectDescription,
        p.category as projectCategory,
        p.budget as projectBudget,
        p.duration as projectDuration,
        p.priority as projectPriority,
        p.skills as projectSkills,
        p.start_date as projectStartDate,
        p.requirements as projectRequirements
      FROM invite i
      JOIN project p ON i.projectId = p.id
      WHERE i.mentorId = ${mentorId}
      ORDER BY i.createdAt DESC
    `

        return NextResponse.json(invites)
    } catch (error) {
        console.error("Error fetching mentor invites:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
