import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                        <Sparkles className="h-4 w-4 fill-white" />
                    </div>
                    <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Kanban AI
                    </span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/login"
                        className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    )
}
