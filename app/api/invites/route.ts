import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

// Create invites table if it doesn't exist
// You'll need to add this to your Prisma schema:
/*
model invite {
  id         Int      @id @default(autoincrement())
  projectId  Int
  mentorId   Int
  status     String   @default("pending") // pending, accepted, declined
  message    String?  @db.VarChar(500)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@unique([projectId, mentorId])
}
*/

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { projectId, mentorId, message } = body

        if (!projectId || !mentorId) {
            return NextResponse.json({ error: "Project ID and Mentor ID are required" }, { status: 400 })
        }

        // Check if invite already exists
        const existingInvite = await prisma.$queryRaw`
      SELECT * FROM invite WHERE projectId = ${projectId} AND mentorId = ${mentorId}
    `

        if (Array.isArray(existingInvite) && existingInvite.length > 0) {
            return NextResponse.json({ error: "Invite already sent to this mentor" }, { status: 409 })
        }

        // Create new invite
        const invite = await prisma.$executeRaw`
      INSERT INTO invite (projectId, mentorId, message, status, createdAt, updatedAt)
      VALUES (${projectId}, ${mentorId}, ${message || ""}, 'pending', NOW(), NOW())
    `

        // Fetch mentor details for response
        const mentor = await prisma.mentor.findUnique({
            where: { id: mentorId },
            select: { name: true, email: true },
        })

        return NextResponse.json({
            success: true,
            message: `Convite enviado para ${mentor?.name}`,
            invite: {
                projectId,
                mentorId,
                status: "pending",
                mentorName: mentor?.name,
            },
        })
    } catch (error) {
        console.error("Error creating invite:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const projectId = searchParams.get("projectId")

        if (!projectId) {
            return NextResponse.json({ error: "Project ID is required" }, { status: 400 })
        }

        const invites = await prisma.$queryRaw`
      SELECT i.*, m.name as mentorName, m.email as mentorEmail
      FROM invite i
      JOIN mentor m ON i.mentorId = m.id
      WHERE i.projectId = ${Number.parseInt(projectId)}
      ORDER BY i.createdAt DESC
    `

        return NextResponse.json(invites)
    } catch (error) {
        console.error("Error fetching invites:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
