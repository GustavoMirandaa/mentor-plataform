"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Image from 'next/image'
import { useUser } from '@clerk/nextjs' // importa o hook do Clerk

export function NavBar() {
    const { user, isLoaded } = useUser()

    const isAdmin = user?.publicMetadata?.admin === true

    return (
        <header className="bg-slate-50 border-b border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Image
                            src="/icon.png"
                            width={80}
                            height={80}
                            alt="Logo"
                        />
                        <h1 className="text-3xl font-semibold text-blue-700 sm:px-6 lg:px-8">
                            Aghanim’s Academy
                        </h1>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-blue-900 font-medium hover:text-purple-500">
                            Dashboard
                        </Link>
                        <Link href="/inviteResponses" className="text-blue-900 font-medium hover:text-purple-500">
                            notificações
                        </Link>
                        <Link href="/mentors" className="text-blue-900 hover:text-purple-500">
                            Mentores
                        </Link>
                        {isLoaded && isAdmin && (<Link href="/projects" className="text-blue-900 hover:text-purple-500">
                            Projetos
                        </Link>)}

                        <Link href="/onboarding" className="text-blue-900 hover:text-purple-500">
                            Onboarding
                        </Link>
                    </nav>

                    {isLoaded && isAdmin && (
                        <Link href="/newproject">
                            <Button>
                                <Plus className="w-4 h-4 mr-2" />
                                Novo Projeto
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}
