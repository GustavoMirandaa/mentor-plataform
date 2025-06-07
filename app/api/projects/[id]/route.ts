import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const projectId = Number.parseInt(params.id)

        if (isNaN(projectId)) {
            return NextResponse.json({ error: "Invalid project ID" }, { status: 400 })
        }

        const project = await prisma.project.findUnique({
            where: { id: projectId },
        })

        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 })
        }

        return NextResponse.json(project)
    } catch (error) {
        console.error("Error fetching project:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
