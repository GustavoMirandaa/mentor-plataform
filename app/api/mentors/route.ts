'use server'
import {PrismaClient} from "@/prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient()


export async function GET() {
    const mentors = await prisma.mentor.findMany()
    return NextResponse.json(mentors)
}


