// app/api/set-admin-claim/route.ts (App Router)
// OU pages/api/set-admin-claim.ts (Pages Router)

import { auth, clerkClient } from '@clerk/nextjs/server'
import {PrismaClient} from "@/prisma/client"

const prisma = new PrismaClient()

export async function POST() {
    const { userId } = await auth()

    if (!userId) {
        return new Response('Unauthorized', { status: 401 })
    }

    const mentor = await prisma.mentor.findUnique({
        where: { clerkId: userId },
        select: { admin: true },
    })

    if (!mentor) {
        return new Response('Mentor not found', { status: 404 })
    }

    const isAdmin = mentor.admin === true


    const client = await clerkClient()
    await client.users.updateUserMetadata(userId, {
        publicMetadata: { admin: isAdmin },
    })

    return new Response(`Admin claim set to ${isAdmin}`, { status: 200 })
}
