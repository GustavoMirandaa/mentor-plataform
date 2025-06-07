import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function PATCH(request: NextRequest, { params }: { params: { inviteId: string } }) {
    try {
        const inviteId = Number.parseInt(params.inviteId)
        const body = await request.json()
        const { status, response_message } = body

        if (isNaN(inviteId)) {
            return NextResponse.json({ error: "Invalid invite ID" }, { status: 400 })
        }

        if (!["accepted", "declined"].includes(status)) {
            return NextResponse.json({ error: "Invalid status. Must be 'accepted' or 'declined'" }, { status: 400 })
        }

        // Update invite status
        await prisma.$executeRaw`
      UPDATE invite 
      SET status = ${status}, 
          response_message = ${response_message || ""}, 
          updatedAt = NOW()
      WHERE id = ${inviteId}
    `

        // Fetch updated invite with project details
        const updatedInvite = await prisma.$queryRaw`
      SELECT 
        i.*,
        p.tittle as projectTitle,
        m.name as mentorName
      FROM invite i
      JOIN project p ON i.projectId = p.id
      JOIN mentor m ON i.mentorId = m.id
      WHERE i.id = ${inviteId}
    `

        return NextResponse.json({
            success: true,
            message: `Convite ${status === "accepted" ? "aceito" : "recusado"} com sucesso!`,
            invite: Array.isArray(updatedInvite) ? updatedInvite[0] : updatedInvite,
        })
    } catch (error) {
        console.error("Error updating invite:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

export async function GET(request: NextRequest, { params }: { params: { inviteId: string } }) {
    try {
        const inviteId = Number.parseInt(params.inviteId)

        if (isNaN(inviteId)) {
            return NextResponse.json({ error: "Invalid invite ID" }, { status: 400 })
        }

        // Fetch invite with full project and mentor details
        const invite = await prisma.$queryRaw`
      SELECT 
        i.*,
        p.*,
        m.name as mentorName,
        m.email as mentorEmail
      FROM invite i
      JOIN project p ON i.projectId = p.id
      JOIN mentor m ON i.mentorId = m.id
      WHERE i.id = ${inviteId}
    `

        if (!Array.isArray(invite) || invite.length === 0) {
            return NextResponse.json({ error: "Invite not found" }, { status: 404 })
        }

        return NextResponse.json(invite[0])
    } catch (error) {
        console.error("Error fetching invite details:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
