import { Layout as LayoutIcon, Zap, Users } from 'lucide-react'

export function Features() {
    return (
        <div className="container mx-auto px-6 py-20 border-t border-white/5">
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={<Zap className="h-6 w-6 text-yellow-400" />}
                    title="AI Automation"
                    description="Generate generic tasks, predictive typing, and automated workflow organization."
                />
                <FeatureCard
                    icon={<LayoutIcon className="h-6 w-6 text-blue-400" />}
                    title="Smart Boards"
                    description="Visualize your work with clear, customizable Kanban boards designed for clarity."
                />
                <FeatureCard
                    icon={<Users className="h-6 w-6 text-green-400" />}
                    title="Team Sync"
                    description="Real-time collaboration with granular permissions for viewers and editors."
                />
            </div>
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-zinc-400 leading-relaxed">{description}</p>
        </div>
    )
}
