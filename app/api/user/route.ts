import { NextResponse } from "next/server";
import {PrismaClient} from "@/prisma/generated/client"
import {clerkClient} from "@clerk/clerk-sdk-node"

const prisma = new PrismaClient()


export async function POST(req: Request){
    const body = await req.json();
    const { name, email, phone , address, linkedin, password, ocuppation, exp, bio, skill, weekly_availability, hourly_rate  } = body
    try {

        const usuarioClerk = await clerkClient.users.createUser({
            emailAddress: [email],
            password: password,
        })

        const newUser = await prisma.mentor.create({
            data: { name, email, phone, address, linkedin, password, ocuppation, exp, bio, skill, weekly_availability, hourly_rate, clerkId: usuarioClerk.id }
        });
        return NextResponse.json(newUser);
    }
    catch (error){
        console.error("Erro do Clerk:", JSON.stringify(error, null, 2));
        return NextResponse.json({erro: 'erro ao cadastrar'})
    }
}