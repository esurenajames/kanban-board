'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, Maximize2, MoreVertical, Sparkles, X, ChevronLeft, ChevronRight, Square, Users, Zap, Layout as LayoutIcon, Globe, Lock } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export function InnovationSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const videoSectionRef = useRef<HTMLDivElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(1)
    const totalSlides = 3

    useGSAP(() => {
        const cards = cardsRef.current
        const videoSection = videoSectionRef.current
        const text = textRef.current
        if (!cards || !videoSection || !text) return

        const scrollWidth = cards.scrollWidth
        const visibleWidth = cards.parentElement?.clientWidth || 0
        const moveAmount = scrollWidth - visibleWidth

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    end: "+=3000",
                    invalidateOnRefresh: true
                }
            })

            // 1. Horizontal Scroll
            tl.to(cards, {
                x: -moveAmount,
                ease: "none",
                duration: 2
            })

                // 2. Fade out cards
                .to([cards, text], {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.5,
                    ease: "power2.inOut"
                })

                // 3. Fade in video section
                .to(videoSection, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out"
                }, "-=0.2") // Overlap slightly

                // 4. Animate text entrance in video section
                .fromTo(".video-content-entrance",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
                )
        })

    }, { scope: containerRef })

    const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides))
    const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 1))

    return (
        <section ref={containerRef} className="relative bg-zinc-50 py-20 overflow-hidden min-h-screen flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.4]"
                style={{
                    backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10 w-full h-full">

                {/* Scrollable Content Wrapper */}
                <div className="relative w-full h-full flex flex-col md:flex-row items-center">

                    {/* Left Side - Sticky Text (Fades out with cards) */}
                    {/* Left Side - Sticky Text (Fades out with cards) */}
                    <div ref={textRef} className="w-full md:w-1/3 shrink-0 md:h-[60vh] flex flex-col justify-center transition-opacity duration-500" style={{ opacity: 1 }}>
                        {/* Note: In a complex timeline, we might want to animate this text fade out too via GSAP if strictly needed, 
                            but keeping it simple for now as per "cards shrinking" description. 
                            Actually, let's target this for fade out too if we want a clean transition.
                         */}
                        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-zinc-900 leading-[1.1]">
                            Experience <br />
                            the Innovation <br />
                            Workspace
                        </h2>
                    </div>


                    {/* Right Side - Scrolling Cards */}
                    <div className="w-full md:w-2/3 overflow-hidden ml-auto">
                        <div ref={cardsRef} className="flex gap-8 w-fit px-4 md:px-0 items-end">
                            {/* Card 1 Wrapper */}
                            <div className="flex flex-col gap-4 shrink-0">
                                {/* Header Widget & Label */}
                                <div className="ml-8 relative">
                                    <header className="flex items-center gap-2 bg-white rounded-lg shadow-sm border border-zinc-200 p-1 w-fit relative z-20">
                                        <span className="text-xs font-semibold px-2 text-red-500 flex items-center gap-1">
                                            <Play className="w-3 h-3 fill-current" /> Slides
                                        </span>
                                        <div className="h-4 w-px bg-zinc-200" />
                                        <button onClick={() => setIsPlaying(true)} className="p-1 hover:bg-zinc-50 rounded" aria-label="Play"><Play className="w-3 h-3 text-zinc-400" /></button>
                                        <button className="p-1 hover:bg-zinc-50 rounded" aria-label="Maximize"><Maximize2 className="w-3 h-3 text-zinc-400" /></button>
                                        <button className="p-1 hover:bg-zinc-50 rounded" aria-label="Menu"><MoreVertical className="w-3 h-3 text-zinc-400" /></button>
                                    </header>
                                </div>

                                {/* Card 1: Team & AI */}
                                <article className="w-[85vw] md:w-[600px] h-[600px] bg-white rounded-[var(--card-radius)] p-8 md:p-12 shadow-xl border border-zinc-100 flex flex-col gap-6 shrink-0 relative overflow-hidden group">
                                    <SlideContent slide={1} />
                                    <div className="mt-auto pt-6 border-t border-zinc-100">
                                        <h4 className="text-lg font-semibold text-zinc-900 mb-2">AI</h4>
                                        <p className="text-sm text-zinc-500 mb-4">Accelerate your team with collaborative AI workflows</p>
                                        <button className="bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
                                            Learn more
                                        </button>
                                    </div>
                                </article>
                            </div>

                            {/* Card 2: Intelligent Canvas */}
                            <article className="w-[85vw] md:w-[600px] h-[600px] bg-white rounded-[var(--card-radius)] p-8 md:p-12 shadow-xl border border-zinc-100 flex flex-col gap-6 shrink-0 relative overflow-hidden">

                                {/* Background Graphic */}
                                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-orange-100 via-pink-100 to-blue-100 opacity-50" />

                                <div className="relative z-10 mt-8 text-center">
                                    <div className="w-12 h-12 mx-auto mb-6 bg-transparent border border-zinc-900/10 rounded-full flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-zinc-900" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-600 leading-tight mb-2 tracking-tighter">
                                        DISCOVER, DEFINE
                                    </h3>
                                    <p className="text-xl md:text-2xl text-zinc-500 font-serif italic">as one on one</p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-zinc-100 relative z-10">
                                    <h4 className="text-lg font-semibold text-zinc-900 mb-2">Intelligent Canvas</h4>
                                    <p className="text-sm text-zinc-500 mb-4">Empower teamwork on one, infinite, multiplayer canvas</p>
                                    <button className="bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
                                        Learn more
                                    </button>
                                </div>
                            </article>

                            {/* Card 3: Placeholder (More Features) */}
                            <article className="w-[85vw] md:w-[600px] h-[600px] bg-zinc-900 rounded-[var(--card-radius)] p-8 md:p-12 shadow-xl border border-zinc-800 flex flex-col justify-center items-center text-center shrink-0 relative overflow-hidden">
                                <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
                                    Ready to <br /> <span className="italic text-purple-400">transform</span> your work?
                                </h3>
                                <button className="bg-white text-zinc-900 px-8 py-3 rounded-lg font-medium hover:bg-zinc-100 transition-all hover:scale-105">
                                    Get Started Free
                                </button>
                            </article>

                        </div>
                    </div>
                </div>

                {/* Video Section Overlay - hidden initially */}
                <div
                    ref={videoSectionRef}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 scale-90 pointer-events-none"
                    style={{ pointerEvents: 'auto' }} // We will control visibility with opacity but need clicks when visible. 
                // Actually pointer-events-none is good while opacity is 0. 
                // GSAP will handle this if we set autoAlpha. But simple opacity is fine if structure allows.
                // Let's rely on GSAP to set style.
                >
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-4xl md:text-6xl font-serif font-medium text-zinc-900 mb-6 video-content-entrance">
                            Introducing <span className="italic text-blue-600">Boardly</span> for <br />
                            Product Acceleration
                        </h2>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto video-content-entrance">
                            Break free from tool boundaries. Align faster. And ship what customers actually need—in one AI workspace.
                        </p>
                        <div className="mt-8">
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 cursor-pointer transition-colors shadow-lg shadow-purple-200 video-content-entrance">
                                Explore the solution
                            </div>
                            {/* User cursor decoration */}

                        </div>
                    </div>

                    <div className="w-full max-w-5xl aspect-video bg-zinc-200 rounded-[var(--card-radius)] shadow-2xl overflow-hidden border border-zinc-200 relative group cursor-pointer hover:bg-zinc-300 transition-colors video-content-entrance">
                        {/* Empty gray placeholder */}
                    </div>
                </div>

            </div>

            {/* Presentation Overlay */}
            {isPlaying && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 transition-opacity"
                    onClick={() => setIsPlaying(false)}
                >
                    <div
                        className="bg-white w-full max-w-6xl h-full md:h-[90vh] rounded-[var(--card-radius)] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Slide Content */}
                        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 bg-zinc-50/50">
                            <div className="w-full max-w-4xl mx-auto">
                                <SlideContent slide={currentSlide} isPresentation />
                            </div>
                        </div>

                        {/* Control Bar */}
                        <div className="h-16 border-t border-zinc-100 bg-white flex items-center justify-between px-6 shrink-0">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-full">
                                    Slide {currentSlide}/{totalSlides}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={prevSlide}
                                    disabled={currentSlide === 1}
                                    className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-600 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={currentSlide === totalSlides}
                                    className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-600 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            <button
                                onClick={() => setIsPlaying(false)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors flex items-center gap-2"
                            >
                                <Square className="w-4 h-4 fill-current" />
                                <span className="hidden sm:inline">Stop</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

function SlideContent({ slide, isPresentation = false }: { slide: number, isPresentation?: boolean }) {
    const scaleClass = isPresentation ? "scale-100" : "";

    // Using the same content for all slides or variations could be done here
    // For now, I'll return the same structure but maybe vary text if multiple slides needed distinct content
    if (slide === 1) return (
        <div className={`mt-12 text-center transition-all duration-500 ${scaleClass}`}>
            <h3 className={`${isPresentation ? 'text-4xl md:text-7xl mb-12' : 'text-3xl md:text-5xl mb-8'} font-medium text-zinc-900 leading-tight`}>
                Bring <span className="italic font-serif font-bold">TEAM</span>
                <div className={`${isPresentation ? 'w-12 h-12 -space-x-4 mx-4' : 'w-8 h-8 -space-x-2 mx-2'} inline-flex align-middle`}>
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`rounded-full border-2 border-white bg-zinc-200 ${isPresentation ? 'w-12 h-12' : 'w-8 h-8'}`} />
                    ))}
                </div>
                & artificial <br /> intelligence together
            </h3>

            {/* AI Canvas Diagram */}
            <div className={`bg-purple-50/50 rounded-2xl border border-purple-100 mx-auto ${isPresentation ? 'p-12 max-w-5xl' : 'p-6'}`}>
                <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-3 mb-4 text-purple-600 font-bold text-sm uppercase tracking-wide">
                    AI CANVAS
                </div>
                <ul className={`grid grid-cols-3 ${isPresentation ? 'gap-8' : 'gap-4'} text-left list-none p-0 m-0`}>
                    <li className={`bg-white rounded-lg border border-purple-50 shadow-sm ${isPresentation ? 'p-6' : 'p-3'}`}>
                        <div className={`text-purple-600 font-bold uppercase mb-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>Sidekicks</div>
                        <div className={`text-zinc-500 leading-tight ${isPresentation ? 'text-sm' : 'text-[10px]'}`}>chat-based AI agents to collaborate with on the canvas</div>
                    </li>
                    <li className={`bg-white rounded-lg border border-purple-50 shadow-sm ${isPresentation ? 'p-6' : 'p-3'}`}>
                        <div className={`text-purple-600 font-bold uppercase mb-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>Flows</div>
                        <div className={`text-zinc-500 leading-tight ${isPresentation ? 'text-sm' : 'text-[10px]'}`}>streamline processes with visual AI workflows</div>
                    </li>
                    <li className={`bg-white rounded-lg border border-purple-50 shadow-sm ${isPresentation ? 'p-6' : 'p-3'}`}>
                        <div className={`text-purple-600 font-bold uppercase mb-1 ${isPresentation ? 'text-lg' : 'text-xs'}`}>Knowledge</div>
                        <div className={`text-zinc-500 leading-tight ${isPresentation ? 'text-sm' : 'text-[10px]'}`}>bring in enterprise knowledge to make better decisions</div>
                    </li>
                </ul>
                <div className={`mt-4 flex items-center justify-center ${isPresentation ? 'gap-8 text-sm' : 'gap-4 text-[10px]'} text-zinc-400 font-medium uppercase tracking-wider`}>
                    <span className="text-purple-600">AI Trust</span>
                    <span>Security</span>
                    <span>Governance</span>
                    <span>Privacy</span>
                </div>
            </div>
        </div>
    )

    if (slide === 2) return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-4xl md:text-6xl font-medium text-zinc-900 mb-8">
                Detailed <span className="text-purple-600 italic">Sidekicks</span> Analysis
            </h3>
            <div className="p-12 bg-white rounded-3xl shadow-xl border border-zinc-100 max-w-3xl">
                <p className="text-xl text-zinc-500">
                    Collaborate with AI agents that understand your context. Sidekicks can generate code, write copy, and even design interfaces right alongside you.
                </p>
            </div>
        </div>
    )

    if (slide === 3) return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-4xl md:text-6xl font-medium text-zinc-900 mb-8">
                Visual <span className="text-blue-600 italic">Flows</span>
            </h3>
            <div className="p-12 bg-white rounded-3xl shadow-xl border border-zinc-100 max-w-3xl">
                <p className="text-xl text-zinc-500">
                    Map out your logic visually. Connect blocks to create complex workflows without writing a single line of glue code.
                </p>
            </div>
        </div>
    )

    return null
}
