// app/api/projects/route.ts
import { NextResponse } from "next/server"
import {PrismaClient} from "@/prisma/client"

const prisma = new PrismaClient()


export async function GET() {
    try {
        const projects = await prisma.project.findMany()

        // Adaptar se necessário: por exemplo, o campo `budget` é Decimal — converter para number
        const parsed = projects.map((project) => ({
            ...project,
            budget: project.budget ? Number(project.budget) : null,
            mentors: [], // placeholder para manter compatibilidade com a UI que espera `mentors`
            status: "Aguardando Match", // opcional: default se não estiver no schema
            progress: 0, // idem
        }))

        return NextResponse.json(parsed)
    } catch (error) {
        console.error("Erro ao buscar projetos:", error)
        return NextResponse.json({ error: "Erro ao buscar projetos" }, { status: 500 })
    }
}

