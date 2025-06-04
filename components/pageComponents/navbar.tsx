import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";


export function NavBar() {
    return (

        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-900">MentorHub</h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-900 font-medium">
                            Dashboard
                        </Link>
                        <Link href="/mentors" className="text-gray-500 hover:text-gray-900">
                            Mentores
                        </Link>
                        <Link href="/projects" className="text-gray-500 hover:text-gray-900">
                            Projetos
                        </Link>
                        <Link href="/onboarding" className="text-gray-500 hover:text-gray-900">
                            Onboarding
                        </Link>
                    </nav>
                    <Button>
                        <Plus className="w-4 h-4 mr-2"/>
                        Novo Projeto
                    </Button>
                </div>
            </div>
        </header>
    )
}