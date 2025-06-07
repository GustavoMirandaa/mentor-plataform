// /app/api/mentors/by-user/[userId]/route.ts
import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(req: Request, { params }: { params: { userId: string } }) {
    const { userId } = params

    try {
        const mentor = await prisma.mentor.findUnique({
            where: { clerkId: userId },
            select: { id: true },
        })

        if (!mentor) {
            return NextResponse.json({ error: "Mentor não encontrado" }, { status: 404 })
        }

        return NextResponse.json({ mentorId: mentor.id })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: "Erro ao buscar mentor" }, { status: 500 })
    }
}
