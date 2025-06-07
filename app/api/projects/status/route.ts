import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

// Update project status and assign mentor
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const projectId = Number.parseInt(params.id)
        const body = await request.json()
        const { mentorId, status } = body

        if (isNaN(projectId)) {
            return NextResponse.json({ error: "Invalid project ID" }, { status: 400 })
        }

        // Update project with mentor assignment
        await prisma.$executeRaw`
      UPDATE project 
      SET mentorid = ${mentorId || null}
      WHERE id = ${projectId}
    `

        // If assigning a mentor, update the invite status to accepted
        if (mentorId && status === "Em Andamento") {
            await prisma.$executeRaw`
        UPDATE invite 
        SET status = 'accepted'
        WHERE projectId = ${projectId} AND mentorId = ${mentorId}
      `
        }

        return NextResponse.json({ success: true, message: "Project updated successfully" })
    } catch (error) {
        console.error("Error updating project:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
