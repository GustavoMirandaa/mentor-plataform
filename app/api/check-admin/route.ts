// app/api/check-admin/route.ts
import { auth } from '@clerk/nextjs/server'
import {PrismaClient} from "@/prisma/client"

const prisma = new PrismaClient()

export async function GET() {
    const { userId } = await auth()

    if (!userId) return new Response('Unauthorized', { status: 401 })

    const mentor = await prisma.mentor.findUnique({
        where: { clerkId: userId },
        select: { admin: true },
    })

    if (!mentor) return new Response('Mentor not found', { status: 404 })

    if (mentor.admin) {
        return new Response('OK', { status: 200 })
    }

    return new Response('Forbidden', { status: 403 })
}
