import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma"
import {clerkClient} from "@clerk/clerk-sdk-node"

const prisma = new PrismaClient()


export async function POST(req: Request){
    const body = await req.json();
    const { name, email, phone , address, linkedin, password, ocuppation, exp, bio, skill, } = body
    try {

        const usuarioClerk = await clerkClient.users.createUser({
            emailAddress: [email],
            password: password,
        })

        const newUser = await prisma.mentor.create({
            data: { name, email, phone , address, linkedin, password, ocuppation, exp, bio, skill, clerkId: usuarioClerk.id }
        });
        return NextResponse.json(newUser);
    }
    catch (error){
        console.error(error);
        return NextResponse.json({erro: 'erro ao cadastrar'})
    }
}