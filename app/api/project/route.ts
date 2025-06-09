import { NextResponse } from "next/server";
import {PrismaClient} from "@/prisma/client"
import {clerkClient} from "@clerk/clerk-sdk-node"

const prisma = new PrismaClient()

export async function POST(req: Request){
    const body = await req.json();
    const{title, description, category, duration, budget, priority, skills, startDate, endDate, requirements } = body
    try {
        const newProject = await prisma.project.create({
            data: body
        });
        return NextResponse.json(newProject);
    }
    catch (error){
        console.error(error);
        return NextResponse.json({erro: 'erro ao cadastrar'})
    }
}


