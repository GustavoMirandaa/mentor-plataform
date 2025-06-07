import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const projectId = Number.parseInt(params.id)
        const { searchParams } = new URL(request.url)
        const mentorId = searchParams.get("mentorId")

        if (isNaN(projectId)) {
            return NextResponse.json({ error: "Invalid project ID" }, { status: 400 })
        }

        // Fetch project details
        const project = await prisma.project.findUnique({
            where: { id: projectId },
        })

        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 })
        }

        // Fetch invite details if mentorId is provided
        let inviteDetails = null
        if (mentorId) {
            const invite = await prisma.$queryRaw`
        SELECT * FROM invite 
        WHERE projectId = ${projectId} AND mentorId = ${Number.parseInt(mentorId)}
      `

            if (Array.isArray(invite) && invite.length > 0) {
                inviteDetails = invite[0]
            }
        }

        // Fetch project owner details (optional - if you have a users table)
        // For now, we'll use a placeholder
        const projectOwner = {
            name: "Cliente",
            email: "cliente@example.com",
            company: "Empresa XYZ",
        }

        // Calculate estimated project value
        const estimatedHours = project.duration?.includes("1")
            ? 160
            : project.duration?.includes("2")
                ? 320
                : project.duration?.includes("3")
                    ? 480
                    : project.duration?.includes("6")
                        ? 960
                        : 160

        return NextResponse.json({
            project,
            invite: inviteDetails,
            projectOwner,
            estimatedHours,
            estimatedValue: Number(project.budget || 0),
        })
    } catch (error) {
        console.error("Error fetching project for mentor view:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
