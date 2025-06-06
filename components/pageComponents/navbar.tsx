import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react"
import Image from 'next/image'




export function NavBar() {
    return (



        <header className="bg-slate-50 border-b border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                               <Image src="/icon.png"
                                      width={80}
                                      height={80}
                                      alt="Picture of the author"
                               />


                        <h1 className="text-3xl font-semibold text-blue-700 sm:px-6 lg:px-8  ">Aghanim’s Academy</h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-blue-900 font-medium hover:text-purple-500">
                            Dashboard
                        </Link>
                        <Link href="/mentors" className="text-blue-900 hover:text-purple-500">
                            Mentores
                        </Link>
                        <Link href="/projects" className="text-blue-900 hover:text-purple-500">
                            Projetos
                        </Link>
                        <Link href="/onboarding" className="text-blue-900 hover:text-purple-500">
                            Onboarding
                        </Link>
                    </nav>
                    <Link href="/newproject">


                    <Button>
                        <Plus className="w-4 h-4 mr-2"/>
                        Novo Projeto
                    </Button>
                    </Link>

                </div>
            </div>
        </header>
    )
}