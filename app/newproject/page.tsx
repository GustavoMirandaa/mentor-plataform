"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Clock, DollarSign, Send, X, Plus, UserPlus, Calculator, Target, Users } from "lucide-react"
import {GetServerSideProps} from "next";
import { NavBar } from "@/components/pageComponents/navbar"


export interface Mentor {
    id: number;
    name: string;
    email?: string;
    address?: string;
    phone?: string;
    linkedin?: string;
    ocuppation?: string;
    exp?: string;
    bio?: string;
    password?: string;
    skill: string[];
}




interface ProjectData {
    tittle: string
    description: string
    category: string
    duration: string
    budget: number
    priority: string
    skills: string[]
    start_date: string
    end_date: string
    requirements: string
}

interface MentorInvite {
    id: string
    email: string
    name: string
    specialty: string
    hourlyRate: number
    estimatedHours: number
    skills: string[]
    message: string
}


export default function NovoProjetoPage() {
    const [projectData, setProjectData] = useState<ProjectData>({
        tittle: "",
        description: "",
        category: "",
        duration: "",
        budget: 0,
        priority: "medium",
        skills: [],
        start_date: "",
        end_date: "",
        requirements: "",
    })




    const [mentorInvites, setMentorInvites] = useState<MentorInvite[]>([])
    const [newMentorEmail, setNewMentorEmail] = useState("")
    const [newMentorName, setNewMentorName] = useState("")
    const [newMentorSpecialty, setNewMentorSpecialty] = useState("")
    const [newMentorRate, setNewMentorRate] = useState(0)
    const [newMentorHours, setNewMentorHours] = useState(0)
    const [newMentorSkills, setNewMentorSkills] = useState<string[]>([])
    const [newMentorMessage, setNewMentorMessage] = useState("")
    const [newSkillInput, setNewSkillInput] = useState("")
    const [newMentorSkillInput, setNewMentorSkillInput] = useState("")

    const [autoMatchEnabled, setAutoMatchEnabled] = useState(true)
    const [sendInviteImmediately, setSendInviteImmediately] = useState(false)

    const addSkill = (skill: string, isForMentor = false) => {
        if (!skill.trim()) return

        if (isForMentor) {
            if (!newMentorSkills.includes(skill)) {
                setNewMentorSkills([...newMentorSkills, skill])
            }
            setNewMentorSkillInput("")
        } else {
            if (!projectData.skills.includes(skill)) {
                setProjectData((prev) => ({
                    ...prev,
                    skills: [...prev.skills, skill],
                }))
            }
            setNewSkillInput("")
        }
    }

    const removeSkill = (skillToRemove: string, isForMentor = false) => {
        if (isForMentor) {
            setNewMentorSkills(newMentorSkills.filter((skill) => skill !== skillToRemove))
        } else {
            setProjectData((prev) => ({
                ...prev,
                skills: prev.skills.filter((skill) => skill !== skillToRemove),
            }))
        }
    }

    const addMentorInvite = () => {
        if (!newMentorEmail || !newMentorName) return

        const newInvite: MentorInvite = {
            id: Date.now().toString(),
            email: newMentorEmail,
            name: newMentorName,
            specialty: newMentorSpecialty,
            hourlyRate: newMentorRate,
            estimatedHours: newMentorHours,
            skills: [...newMentorSkills],
            message: newMentorMessage,
        }

        setMentorInvites([...mentorInvites, newInvite])

        // Reset form
        setNewMentorEmail("")
        setNewMentorName("")
        setNewMentorSpecialty("")
        setNewMentorRate(0)
        setNewMentorHours(0)
        setNewMentorSkills([])
        setNewMentorMessage("")
    }

    const removeMentorInvite = (id: string) => {
        setMentorInvites(mentorInvites.filter((invite) => invite.id !== id))
    }

    const updateMentorInvite = (id: string, field: keyof MentorInvite, value: any) => {
        setMentorInvites(mentorInvites.map((invite) => (invite.id === id ? { ...invite, [field]: value } : invite)))
    }

    const calculateTotalCost = () => {
        return mentorInvites.reduce((total, invite) => {
            return total + invite.hourlyRate * invite.estimatedHours
        }, 0)
    }

    const calculateMatchScore = (mentorSkills: string[]) => {
        if (!projectData.skills.length || !mentorSkills.length) return 0

        const matchingSkills = mentorSkills.filter((skill) =>
            projectData.skills.some(
                (projectSkill) =>
                    skill.toLowerCase().includes(projectSkill.toLowerCase()) ||
                    projectSkill.toLowerCase().includes(skill.toLowerCase()),
            ),
        )

        return Math.round((matchingSkills.length / projectData.skills.length) * 100)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/project",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
        })
        if (response.ok){
            setProjectData({
                tittle: "",
                description: "",
                category: "",
                duration: "",
                budget: 0,
                priority: "medium",
                skills: [],
                start_date: "",
                end_date: "",
                requirements: "",

            })
        }

    }

    return (
        <div className="min-h-screen bg-background">
            <div >
                <NavBar></NavBar>

                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                        </div>
                        <Button variant="outline" onClick={() => window.history.back()}>
                            Cancelar
                        </Button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">

                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Detalhes do Projeto */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5" />
                                Detalhes do Projeto
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="tittle">Título do Projeto *</Label>
                                    <Input
                                        id="tittle"
                                        placeholder="Ex: Desenvolvimento de App Mobile"
                                        value={projectData.tittle}
                                        onChange={(e) => setProjectData((prev) => ({ ...prev, tittle: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Categoria *</Label>
                                    <Select
                                        value={projectData.category}
                                        onValueChange={(value) => setProjectData((prev) => ({ ...prev, category: value }))}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione uma categoria" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="web">Desenvolvimento Web</SelectItem>
                                            <SelectItem value="mobile">Desenvolvimento Mobile</SelectItem>
                                            <SelectItem value="design">Design UI/UX</SelectItem>
                                            <SelectItem value="devops">DevOps/Infraestrutura</SelectItem>
                                            <SelectItem value="data">Data Science/Analytics</SelectItem>
                                            <SelectItem value="marketing">Marketing Digital</SelectItem>
                                            <SelectItem value="business">Consultoria de Negócios</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Descrição do Projeto *</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Descreva os objetivos, escopo e requisitos do projeto..."
                                    className="min-h-[120px]"
                                    value={projectData.description}
                                    onChange={(e) => setProjectData((prev) => ({ ...prev, description: e.target.value }))}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="requirements">Requisitos Específicos</Label>
                                <Textarea
                                    id="requirements"
                                    placeholder="Detalhe requisitos técnicos, experiência necessária, certificações..."
                                    className="min-h-[80px]"
                                    value={projectData.requirements}
                                    onChange={(e) => setProjectData((prev) => ({ ...prev, requirements: e.target.value }))}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="duration">Duração</Label>
                                    <Select
                                        value={projectData.duration}
                                        onValueChange={(value) => setProjectData((prev) => ({ ...prev, duration: value }))}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1-2weeks">1-2 semanas</SelectItem>
                                            <SelectItem value="1month">1 mês</SelectItem>
                                            <SelectItem value="2-3months">2-3 meses</SelectItem>
                                            <SelectItem value="6months">6 meses</SelectItem>
                                            <SelectItem value="ongoing">Contínuo</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="budget">Orçamento Total (R$)</Label>
                                    <Input
                                        id="budget"
                                        type="number"
                                        placeholder="0"
                                        value={projectData.budget}
                                        onChange={(e) => setProjectData((prev) => ({ ...prev, budget: Number(e.target.value) }))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="start_date">Data de Início</Label>
                                    <Input
                                        id="start_date"
                                        type="date"
                                        value={projectData.start_date}
                                        onChange={(e) => setProjectData((prev) => ({ ...prev, start_date: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="priority">Prioridade</Label>
                                    <Select
                                        value={projectData.priority}
                                        onValueChange={(value) => setProjectData((prev) => ({ ...prev, priority: value }))}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">Baixa</SelectItem>
                                            <SelectItem value="medium">Média</SelectItem>
                                            <SelectItem value="high">Alta</SelectItem>
                                            <SelectItem value="urgent">Urgente</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Habilidades Necessárias</Label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {projectData.skills.map((skill, index) => (
                                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                                            {skill}
                                            <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Digite uma habilidade"
                                        value={newSkillInput}
                                        onChange={(e) => setNewSkillInput(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault()
                                                addSkill(newSkillInput)
                                            }
                                        }}
                                    />
                                    <Button type="button" variant="outline" onClick={() => addSkill(newSkillInput)}>
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Configurações de Match */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5" />
                                Configurações de Match
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label htmlFor="auto-match">Match Automático</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Calcular automaticamente a compatibilidade entre mentores e projeto
                                    </p>
                                </div>
                                <Switch id="auto-match" checked={autoMatchEnabled} onCheckedChange={setAutoMatchEnabled} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label htmlFor="send-invite">Enviar Convites Imediatamente</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Enviar convites por email assim que o projeto for criado
                                    </p>
                                </div>
                                <Switch id="send-invite" checked={sendInviteImmediately} onCheckedChange={setSendInviteImmediately} />
                            </div>
                        </CardContent>
                    </Card>
                    {/* Botões de Ação */}
                    <div className="flex justify-end gap-4">
                        <Button variant="outline" onClick={() => window.history.back()}>
                            Cancelar
                        </Button>
                        <Button onClick={handleSubmit} disabled={!projectData.tittle || !projectData.description}>
                            <Send className="h-4 w-4 mr-2" />
                            Criar Projeto
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
