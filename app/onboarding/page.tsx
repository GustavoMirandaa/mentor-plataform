"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { User, Briefcase, DollarSign, CheckCircle, ArrowRight, ArrowLeft, X } from "lucide-react"
import Link from "next/link"
import {NavBar} from "@/components/pageComponents/navbar";

const skillsOptions = [
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Java",
  "C#",
  "PHP",
  "Ruby",
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "Figma",
  "Adobe XD",
  "Sketch",
  "Photoshop",
  "Machine Learning",
  "Data Science",
  "AI",
  "TensorFlow",
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1 - Personal Info
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    password: "",

    // Step 2 - Professional Info
    ocuppation: "",
    exp: "",
    bio: "",
    skill: [] as string[],

    // Step 3 - Financial Info
    hourly_rate: "",
    weekly_availability: "",
    preferredProjects: "",


  })
  const handleSubmit= async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    if (response.ok){
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        password: "",

        // Step 2 - Professional Info
        ocuppation: "",
        exp: "",
        bio: "",
        skill: [] as string[],

        // Step 3 - Financial Info
        hourly_rate: "",
        weekly_availability: "",
        preferredProjects: "",


      })
    }
  }



  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skill: prev.skill.includes(skill) ? prev.skill.filter((s) => s !== skill) : [...prev.skill, skill],
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }




  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <NavBar></NavBar>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Cadastro de Novo Mentor</h1>
          <p className="text-gray-600 mb-6">Preencha as informações para adicionar um novo mentor à nossa rede</p>

          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progresso</span>
              <span>
                Etapa {currentStep} de {totalSteps}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between">
            {[
              { number: 1, title: "Dados Pessoais", icon: User },
              { number: 2, title: "Informações Profissionais", icon: Briefcase },
              { number: 3, title: "Valores e Disponibilidade", icon: DollarSign },
              { number: 4, title: "Finalização", icon: CheckCircle },
            ].map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.number ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-xs text-gray-600 mt-2 text-center">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <Card>
          <CardContent className="pt-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Dados Pessoais</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Digite o nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@exemplo.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Localização</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Cidade, Estado"
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/usuario"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Senha</Label>
                      <Input
                        id="password"
                        value={formData.password}
                        type={"password"}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Informações Profissionais</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="ocuppation">Especialidade Principal *</Label>
                      <Select
                        value={formData.ocuppation}
                        onValueChange={(value) => setFormData({ ...formData, ocuppation: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione sua especialidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="frontend">Frontend Developer</SelectItem>
                          <SelectItem value="backend">Backend Developer</SelectItem>
                          <SelectItem value="fullstack">Fullstack Developer</SelectItem>
                          <SelectItem value="mobile">Mobile Developer</SelectItem>
                          <SelectItem value="devops">DevOps Engineer</SelectItem>
                          <SelectItem value="data">Data Scientist</SelectItem>
                          <SelectItem value="design">UI/UX Designer</SelectItem>
                          <SelectItem value="pm">Product Manager</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="exp">Anos de Experiência</Label>
                      <Select
                        value={formData.exp}
                        onValueChange={(value) => setFormData({ ...formData, exp: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a experiência" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 anos</SelectItem>
                          <SelectItem value="3-5">3-5 anos</SelectItem>
                          <SelectItem value="6-10">6-10 anos</SelectItem>
                          <SelectItem value="10+">Mais de 10 anos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="bio">Biografia Profissional</Label>
                      <Textarea
                        id="bio"
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        placeholder="Descreva sua experiência, projetos relevantes e expertise..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label>Skills e Tecnologias *</Label>
                      <p className="text-sm text-gray-600 mb-3">Selecione todas as tecnologias que você domina</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-60 overflow-y-auto border rounded-lg p-4">
                        {skillsOptions.map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox
                              id={skill}
                              checked={formData.skill.includes(skill)}
                              onCheckedChange={() => handleSkillToggle(skill)}
                            />
                            <Label htmlFor={skill} className="text-sm">
                              {skill}
                            </Label>
                          </div>
                        ))}
                      </div>
                      {formData.skill.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm text-gray-600 mb-2">Skills selecionadas:</p>
                          <div className="flex flex-wrap gap-2">
                            {formData.skill.map((skill) => (
                              <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                                {skill}
                                <X className="w-3 h-3 cursor-pointer" onClick={() => handleSkillToggle(skill)} />
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Financial Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Valores e Disponibilidade</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="hourlyRate">Valor por Hora (R$) *</Label>
                      <Input
                        id="hourlyRate"
                        type="number"
                        value={formData.hourly_rate}
                        onChange={(e) => setFormData({ ...formData, hourly_rate: e.target.value })}
                        placeholder="150"
                      />
                      <p className="text-sm text-gray-600 mt-1">Este será seu valor base por hora de trabalho</p>
                    </div>

                    <div>
                      <Label htmlFor="availability">Disponibilidade Semanal</Label>
                      <Select
                        value={formData.weekly_availability}
                        onValueChange={(value) => setFormData({ ...formData, weekly_availability: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione sua disponibilidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="part-time">Part-time (até 20h/semana)</SelectItem>
                          <SelectItem value="full-time">Full-time (40h/semana)</SelectItem>
                          <SelectItem value="flexible">Flexível</SelectItem>
                          <SelectItem value="weekends">Apenas fins de semana</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="preferredProjects">Tipos de Projeto Preferidos</Label>
                      <Textarea
                        id="preferredProjects"
                        value={formData.preferredProjects}
                        onChange={(e) => setFormData({ ...formData, preferredProjects: e.target.value })}
                        placeholder="Ex: Desenvolvimento de aplicações web, consultoria técnica, treinamentos..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Final Review */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Revisão e Finalização</h2>

                  {/* Summary */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Resumo das Informações</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Nome:</span>
                        <span className="ml-2 text-gray-600">{formData.name || "Não informado"}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Email:</span>
                        <span className="ml-2 text-gray-600">{formData.email || "Não informado"}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Especialidade:</span>
                        <span className="ml-2 text-gray-600">{formData.ocuppation || "Não informado"}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Valor/Hora:</span>
                        <span className="ml-2 text-gray-600">
                          {formData.hourly_rate ? `R$ ${formData.hourly_rate}` : "Não informado"}
                        </span>
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-700">Skills:</span>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {formData.skill.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* Terms */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Próximos Passos</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Revisaremos seu perfil em até 2 dias úteis</li>
                      <li>• Entraremos em contato para uma entrevista técnica</li>
                      <li>• Após aprovação, você será adicionado à nossa rede</li>
                      <li>• Começará a receber convites para projetos compatíveis</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={nextStep} className="flex items-center">
                  Próximo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                  Finalizar Cadastro
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
