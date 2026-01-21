'use client'

import { Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const teamContent = {
    product: {
        title: "Product teams",
        subtitle: "Product Management teams use Boardly to",
        features: [
            "Rapidly prototype features to test with customers",
            "Collaborate on user flows with designers",
            "Make changes to web apps without consuming engineering sprints"
        ],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000"
    },
    design: {
        title: "Design teams",
        subtitle: "Product Design teams use Boardly to",
        features: [
            "Implement visual improvements to sites and apps",
            "Create interactive prototypes to test with users",
            "Maintain design system consistency without traditional engineering handoffs"
        ],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
    },
    engineering: {
        title: "Engineering teams",
        subtitle: "Engineering teams use Boardly to",
        features: [
            "Empower non-technical team members to make updates safely",
            "Focus on building core features and complex logic",
            "Integrate seamlessly with existing tech stacks and workflows"
        ],
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000"
    },
    content: {
        title: "Content teams",
        subtitle: "Content Marketing teams use Boardly to",
        features: [
            "Update copy and images instantly without code",
            "Run A/B tests on landing pages independently",
            "Maintain brand voice across all digital touchpoints"
        ],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
    }
}

export function TeamsSection() {
    return (
        <section className="bg-white py-24 px-6 md:px-12 w-full flex flex-col items-center">
            <div className="max-w-7xl mx-auto w-full">
                <Tabs defaultValue="product" className="w-full flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-zinc-900 max-w-xl">
                            Works with multiple teams across your company
                        </h2>

                        {/* Navigation Tabs */}
                        <TabsList className="bg-transparent h-auto p-0 flex flex-wrap gap-2 md:gap-8 justify-start">
                            {Object.keys(teamContent).map((tab) => (
                                <TabsTrigger
                                    key={tab}
                                    value={tab}
                                    className="rounded-full px-6 py-2 h-auto text-lg font-medium transition-all duration-300 border-0 bg-transparent text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-purple-200 capitalize"
                                >
                                    {tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {/* Content Cards */}
                    {Object.entries(teamContent).map(([key, content]) => (
                        <TabsContent key={key} value={key} className="mt-0 outline-none animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
                            <div className="bg-zinc-950 rounded-[var(--card-radius)] overflow-hidden text-white shadow-2xl min-h-[500px] flex flex-col md:flex-row">
                                {/* Left Panel: Content */}
                                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold mb-6 text-white">
                                        {content.title}
                                    </h3>

                                    <p className="text-zinc-400 text-lg mb-8">
                                        {content.subtitle}
                                    </p>

                                    <ul className="space-y-4 mb-10">
                                        {content.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                                    <Check className="w-3 h-3 text-primary" />
                                                </div>
                                                <span className="text-zinc-300 leading-relaxed">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors uppercase tracking-wide text-sm group">
                                        Learn more
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>

                                {/* Right Panel: Image/Visual */}
                                <div className="w-full md:w-1/2 relative bg-zinc-900 min-h-[300px] md:min-h-full border-l border-zinc-800">
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950/50">
                                            <Image
                                                src={content.image}
                                                alt={content.title}
                                                fill
                                                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                            />
                                            <div className="absolute top-4 left-4 right-4 h-8 bg-zinc-800/50 rounded-full blur-xl animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
