import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

// GET all invites for a project
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const projectId = Number.parseInt(params.id)

        if (isNaN(projectId)) {
            return NextResponse.json({ error: "Invalid project ID" }, { status: 400 })
        }

        const invites = await prisma.$queryRaw`
      SELECT 
        i.*,
        m.name as mentorName,
        m.email as mentorEmail,
        m.ocuppation as mentorOccupation,
        m.hourly_rate as mentorHourlyRate
      FROM invite i
      JOIN mentor m ON i.mentorId = m.id
      WHERE i.projectId = ${projectId}
      ORDER BY i.createdAt DESC
    `

        return NextResponse.json(invites)
    } catch (error) {
        console.error("Error fetching project invites:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
