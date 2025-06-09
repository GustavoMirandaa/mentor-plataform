import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(request: NextRequest, context: { params: { mentorId: string } }) {
    try {
        const { mentorId } = context.params
        const mentorIdNum = Number.parseInt(mentorId)

        if (isNaN(mentorIdNum)) {
            return NextResponse.json({ error: "Invalid mentor ID" }, { status: 400 })
        }

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
            WHERE i.mentorId = ${mentorIdNum}
            ORDER BY i.createdAt DESC
        `

        return NextResponse.json(invites)
    } catch (error) {
        console.error("Error fetching mentor invites:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
