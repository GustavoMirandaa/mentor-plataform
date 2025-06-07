interface Project {
    id: number
    tittle: string | null
    description: string | null
    category: string | null
    duration: string | null
    budget: number | null
    priority: string | null
    skills: string[]
    start_date: string | null
    end_date: string | null
    requirements: string | null
    owner: number | null
}

interface Mentor {
    id: number
    clerkId: string
    name: string
    email: string | null
    address: string | null
    phone: string | null
    linkedin: string | null
    ocuppation: string | null
    exp: string | null
    bio: string | null
    skill: string[]
    disponibility: string | null
    weekly_availability: string | null
    hourly_rate: string | null
}

interface MentorMatch extends Mentor {
    matchPercentage: number
    matchingSkills: string[]
    skillsMatchCount: number
    experienceMatch: boolean
    budgetMatch: boolean
}

export function calculateMentorMatches(project: Project, mentors: Mentor[]): MentorMatch[] {
    return mentors
        .map((mentor) => {
            const matchData = calculateMatch(project, mentor)
            return {
                ...mentor,
                ...matchData,
            }
        })
        .sort((a, b) => b.matchPercentage - a.matchPercentage)
}

function calculateMatch(project: Project, mentor: Mentor) {
    // 1. Skills matching (60% weight)
    const skillsMatch = calculateSkillsMatch(project.skills, mentor.skill)

    // 2. Experience matching (20% weight)
    const experienceMatch = calculateExperienceMatch(project.category, mentor.ocuppation, mentor.exp)

    // 3. Budget matching (20% weight)
    const budgetMatch = calculateBudgetMatch(project.budget, mentor.hourly_rate, project.duration)

    // Calculate weighted match percentage
    const matchPercentage = Math.round(
        skillsMatch.percentage * 0.6 + experienceMatch.score * 0.2 + budgetMatch.score * 0.2,
    )

    return {
        matchPercentage: Math.min(matchPercentage, 100),
        matchingSkills: skillsMatch.matchingSkills,
        skillsMatchCount: skillsMatch.matchCount,
        experienceMatch: experienceMatch.matches,
        budgetMatch: budgetMatch.matches,
    }
}

function calculateSkillsMatch(projectSkills: string[], mentorSkills: string[]) {
    if (!projectSkills.length || !mentorSkills.length) {
        return { percentage: 0, matchingSkills: [], matchCount: 0 }
    }

    const normalizedProjectSkills = projectSkills.map((skill) => skill.toLowerCase().trim())
    const normalizedMentorSkills = mentorSkills.map((skill) => skill.toLowerCase().trim())

    const matchingSkills = projectSkills.filter((projectSkill) =>
        normalizedMentorSkills.includes(projectSkill.toLowerCase().trim()),
    )

    const matchCount = matchingSkills.length
    const percentage = (matchCount / normalizedProjectSkills.length) * 100

    return {
        percentage: Math.round(percentage),
        matchingSkills,
        matchCount,
    }
}

function calculateExperienceMatch(
    projectCategory: string | null,
    mentorOccupation: string | null,
    mentorExp: string | null,
) {
    let score = 50 // Base score

    // Check occupation relevance
    if (projectCategory && mentorOccupation) {
        const categoryLower = projectCategory.toLowerCase()
        const occupationLower = mentorOccupation.toLowerCase()

        if (
            occupationLower.includes(categoryLower) ||
            categoryLower.includes(occupationLower) ||
            (categoryLower.includes("mobile") && occupationLower.includes("mobile")) ||
            (categoryLower.includes("web") && occupationLower.includes("web")) ||
            (categoryLower.includes("fullstack") && occupationLower.includes("fullstack"))
        ) {
            score += 30
        }
    }

    // Experience level bonus
    if (mentorExp) {
        if (mentorExp.includes("10+")) score += 20
        else if (mentorExp.includes("6-10")) score += 15
        else if (mentorExp.includes("3-5")) score += 10
        else if (mentorExp.includes("1-2")) score += 5
    }

    return {
        score: Math.min(score, 100),
        matches: score > 70,
    }
}

function calculateBudgetMatch(
    projectBudget: number | null,
    mentorHourlyRate: string | null,
    projectDuration: string | null,
) {
    if (!projectBudget || !mentorHourlyRate || !projectDuration) {
        return { score: 50, matches: true } // Neutral if data missing
    }

    const hourlyRate = Number.parseFloat(mentorHourlyRate)
    if (isNaN(hourlyRate)) return { score: 50, matches: true }

    // Estimate project hours based on duration
    let estimatedHours = 160 // Default 1 month = ~160 hours
    if (projectDuration.includes("2")) estimatedHours = 320
    else if (projectDuration.includes("3")) estimatedHours = 480
    else if (projectDuration.includes("6")) estimatedHours = 960

    const estimatedCost = hourlyRate * estimatedHours
    const budgetRatio = Number(projectBudget) / estimatedCost

    let score = 50
    if (budgetRatio >= 1.2)
        score = 100 // Budget is 20% higher than cost
    else if (budgetRatio >= 1.0)
        score = 90 // Budget matches cost
    else if (budgetRatio >= 0.8)
        score = 70 // Budget is 80% of cost
    else if (budgetRatio >= 0.6)
        score = 50 // Budget is 60% of cost
    else score = 20 // Budget is too low

    return {
        score,
        matches: budgetRatio >= 0.8,
    }
}
