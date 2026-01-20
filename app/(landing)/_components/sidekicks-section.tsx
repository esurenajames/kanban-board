'use client'

import { ArrowRight, Sparkles, Workflow, Plus, Share2, FileText, ImageIcon, Smartphone, Monitor, Table, ArrowUp, ChevronDown } from 'lucide-react'

export function SidekicksSection() {
    return (
        <section className="bg-zinc-50 py-24 px-6 md:px-12 flex justify-center">
            <div className="max-w-7xl w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-[var(--card-radius)] p-8 md:p-12 lg:p-16 border border-zinc-100 flex flex-col md:flex-row gap-12 lg:gap-24 items-center shadow-sm relative overflow-hidden">

                {/* Background Glow effects */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-100/50 blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100/50 blur-[100px] -z-10" />

                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-10">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">
                        Sidekicks and Flows
                    </h2>

                    <div className="space-y-8">
                        {/* List Item 1 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 shrink-0 bg-white rounded-xl border border-zinc-200 flex items-center justify-center shadow-sm">
                                <Workflow className="w-6 h-6 text-zinc-700" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-semibold text-zinc-900 text-lg">Get into the flow of work with Boardly Flows</h3>
                                <p className="text-zinc-500 leading-relaxed">Make teamwork flow faster with visual, multi-step AI workflows</p>
                            </div>
                        </div>

                        {/* List Item 2 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 shrink-0 bg-white rounded-xl border border-zinc-200 flex items-center justify-center shadow-sm">
                                <Sparkles className="w-6 h-6 text-zinc-700" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-semibold text-zinc-900 text-lg">Meet your AI teammates: Boardly Sidekicks</h3>
                                <p className="text-zinc-500 leading-relaxed">Innovate faster with AI teammates that work alongside you on a shared canvas</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-purple-200">
                            Learn more
                        </button>
                    </div>
                </div>

                {/* Right Content - Visual Interface */}
                <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden relative">
                        {/* Fake Browser Toolbar/Header */}
                        <div className="bg-zinc-50 border-b border-zinc-100 p-3 flex items-center justify-between text-xs text-zinc-500">
                            <div className="flex items-center gap-2 px-2">
                                <span>4 objects selected</span>
                                <ChevronDown className="w-3 h-3" />
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-6 pb-20">
                            <p className="text-xl text-zinc-600 font-light leading-relaxed">
                                Turn these ideas into backlog items with status and start date columns<span className="animate-pulse">|</span>
                            </p>
                        </div>

                        {/* Bottom Toolbar */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-zinc-100 flex items-center justify-between">
                            <div className="flex items-center gap-1 md:gap-2">
                                <button className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-500"><Plus className="w-5 h-5" /></button>
                                <div className="w-px h-6 bg-zinc-200 mx-1" />
                                <button className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-500"><Workflow className="w-5 h-5" /></button>
                                <button className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-500"><FileText className="w-5 h-5" /></button>
                                <button className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-500"><ImageIcon className="w-5 h-5" /></button>
                                <button className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-500"><Smartphone className="w-5 h-5" /></button>
                                <button className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-500"><Monitor className="w-5 h-5" /></button>
                                <button className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-500"><Share2 className="w-5 h-5" /></button>
                                <button className="p-2 bg-zinc-200 rounded-lg text-zinc-800 relative group">
                                    <Table className="w-5 h-5" />
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-zinc-900 text-white text-xs whitespace-nowrap px-3 py-1.5 rounded shadow-lg">
                                        Create table
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
                                    </div>
                                    {/* Cursor */}
                                    <div className="absolute top-1/2 left-1/2 translate-x-1 translate-y-3 z-20 pointer-events-none">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                                            <path d="M5.5 2L11.5 19L14.5 12L21.5 9L5.5 2Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                            </div>

                            <button className="bg-primary text-white p-2 md:px-4 md:py-2 rounded-lg hover:bg-primary/90 transition-colors">
                                <ArrowUp className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    {/* Decorative dot grid background behind the interface */}
                    <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(#a1a1aa 1px, transparent 1px)', backgroundSize: '16px 16px', maskImage: 'linear-gradient(to bottom, transparent, black)' }}>
                    </div>
                </div>

            </div>
        </section>
    )
}
