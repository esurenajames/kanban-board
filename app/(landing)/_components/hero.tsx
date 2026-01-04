import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
    return (
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-500/20 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm md:mb-8 mb-6">
                    <Sparkles className="h-3 w-3 text-purple-400" />
                    <span className="text-zinc-400">AI-Powered Productivity</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                    Manage projects at <br className="hidden md:block" />
                    the speed of thought.
                </h1>

                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    The intelligent Kanban board that grows with your team.
                    Automate workflows, generate tasks with AI, and collaborate in real-time.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/login"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                        Start for free
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="/login"
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white hover:bg-white/10 transition-colors"
                    >
                        View Demo
                    </Link>
                </div>
            </div>
        </div>
    )
}
