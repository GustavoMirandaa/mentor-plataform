import { PrismaClient } from "../../../node_modules/@prisma/client"
import {NextRequest, NextResponse} from "next/server";

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
    const projectId = req.nextUrl.searchParams.get("projectId");

    if (!projectId) {
        return NextResponse.json({ error: "projectId is required" }, { status: 400 });
    }

    const project = await prisma.project.findUnique({
        where: { id: parseInt(projectId) },
    });

    if (!project) {
        return NextResponse.json({ error: "Projeto não encontrado" }, { status: 404 });
    }

    const requiredSkills = project.skills;

    const mentors = await prisma.mentor.findMany();

    const matchedMentors = mentors.map((mentor) => {
        const matchingSkills = mentor.skill.filter((s) => requiredSkills.includes(s));
        const matchPercentage = Math.round((matchingSkills.length / requiredSkills.length) * 100);

        return {
            id: mentor.id,
            name: mentor.name,
            occupation: mentor.ocuppation ?? "",
            experience: mentor.exp ?? "",
            location: mentor.address ?? "",
            hourlyRate: mentor.hourly_rate ?? "0",
            availability: mentor.disponibility ?? "flexível",
            rating: 4.5,
            reviewCount: 30,
            matchPercentage,
            skills: mentor.skill,
            matchingSkills,
            bio: mentor.bio ?? "",
            completedProjects: 10,
            responseTime: "2 horas",
            lastActive: "Online há 5 horas",
            portfolioHighlights: ["App de Delivery", "Sistema de Avaliações", "Integração com Stripe"],
        };
    });

    return NextResponse.json(matchedMentors);
}
