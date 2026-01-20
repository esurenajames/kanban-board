'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DashboardPreview } from './dashboard-preview'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
    // Cursor tracking
    const cursorRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const imageContainerRef = useRef<HTMLDivElement>(null)
    const dashboardRef = useRef<HTMLDivElement>(null)

    // Mouse movement specific to Hero section
    const xTo = useRef<gsap.QuickToFunc | null>(null)
    const yTo = useRef<gsap.QuickToFunc | null>(null)

    useGSAP(() => {
        // Main Scroll Animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=800",
                scrub: 2,
            }
        })

        tl.fromTo(imageContainerRef.current,
            {
                rotateX: 25,
                y: 50,
                scale: 0.9,
                opacity: 0.8,
                transformPerspective: 1000
            },
            {
                rotateX: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                ease: "power2.out",
                duration: 1
            }
        ).fromTo([".success-widget", ".dialog-widget"],
            {
                opacity: 0,
                scale: 0.9,
                y: 30,
            },
            {
                opacity: 1,
                scale: 1,
                y: -20,
                stagger: 0.2,
                duration: 1,
                ease: "power2.out"
            },
            "-=0.5"
        )

        // Cursor Setup
        if (cursorRef.current) {
            xTo.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" })
            yTo.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" })
        }

        // Get dashboard bounds for bot movement
        const getDashboardBounds = () => {
            if (dashboardRef.current) {
                const rect = dashboardRef.current.getBoundingClientRect()
                const scrollY = window.scrollY
                return {
                    left: rect.left + 50,
                    right: rect.right - 50,
                    top: rect.top + scrollY + 50,
                    bottom: rect.bottom + scrollY - 50
                }
            }
            return null
        }

        // Bot Cursors Animation - Start in hero, move to dashboard on scroll
        const bots = gsap.utils.toArray('.bot-cursor')

        bots.forEach((bot: any, index: number) => {
            // Initial position in hero area
            gsap.set(bot, {
                x: gsap.utils.random(200, window.innerWidth - 200),
                y: gsap.utils.random(150, 400)
            })

            let isInDashboard = false

            // Random movement function
            const moveBot = () => {
                const bounds = getDashboardBounds()
                const scrollProgress = window.scrollY / 400 // Normalize scroll

                // Switch to dashboard area after some scrolling
                if (scrollProgress > 0.5 && bounds) {
                    isInDashboard = true
                    gsap.to(bot, {
                        x: gsap.utils.random(bounds.left, bounds.right),
                        y: gsap.utils.random(bounds.top, bounds.bottom),
                        duration: gsap.utils.random(2, 3.5),
                        ease: "sine.inOut",
                        onComplete: moveBot
                    })
                } else {
                    isInDashboard = false
                    gsap.to(bot, {
                        x: gsap.utils.random(200, window.innerWidth - 200),
                        y: gsap.utils.random(150, 450),
                        duration: gsap.utils.random(2, 4),
                        ease: "sine.inOut",
                        onComplete: moveBot
                    })
                }
            }

            // Stagger the start
            setTimeout(moveBot, index * 500)
        })

    }, { scope: containerRef })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (xTo.current && yTo.current && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            // Use clientX/Y relative to viewport, then offset by container position
            xTo.current(e.clientX - rect.left)
            yTo.current(e.clientY - rect.top)
        }
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => gsap.to(cursorRef.current, { opacity: 1, scale: 1, duration: 0.2 })}
            onMouseLeave={() => gsap.to(cursorRef.current, { opacity: 0, scale: 0, duration: 0.2 })}
            className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden bg-white cursor-none"
            aria-label="Hero Section"
            style={{
                backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}
        >
            {/* Custom User Cursor - Changed to absolute for proper scroll behavior */}
            <div ref={cursorRef} className="absolute top-0 left-0 z-50 pointer-events-none opacity-0 will-change-transform">
                <Cursor name="You" color="#3b82f6" isUser />
            </div>

            {/* Bot Cursors - Only 2 teammates */}
            <div className="bot-cursor absolute top-0 left-0 z-40 pointer-events-none">
                <Cursor name="Sarah" color="#ec4899" />
            </div>
            <div className="bot-cursor absolute top-0 left-0 z-40 pointer-events-none">
                <Cursor name="Mike" color="#f59e0b" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <header className="relative inline-block mb-6">
                    <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight text-zinc-900 leading-[0.9]">
                        A <span className="bg-purple-200 px-2 -mx-2 rounded-lg text-zinc-900">board</span> built for <br />
                        <span className="italic">better <span className="font-bold">flow</span></span>
                    </h1>
                </header>

                <p className="mt-8 text-lg md:text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
                    Integrate AI into your workflow to help your team build the right thing faster. <br /> Made by People, for People.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                    <Link
                        href="/login?signup=true"
                        className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-purple-200 hover:-translate-y-1 hover:cursor-none"
                    >
                        Start 1 month free trial
                    </Link>
                </div>
                <div className="perspective-1000 mt-6">
                    <div
                        ref={(el) => {
                            (imageContainerRef as any).current = el;
                            (dashboardRef as any).current = el;
                        }}
                        className="relative mx-auto max-w-6xl"
                    >
                        <DashboardPreview />

                        {/* Success Widget - Left */}
                        <div className="success-widget absolute -left-4 md:-left-12 top-1/3 bg-white rounded-[var(--radius)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 flex items-center gap-3 border border-zinc-100 z-20 max-w-[200px] md:max-w-none">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-semibold text-zinc-900">Task Completed</div>
                                <div className="text-xs text-zinc-500">Just now</div>
                            </div>
                        </div>

                        {/* Dialog Widget - Right */}
                        <div className="dialog-widget absolute -right-4 md:-right-12 top-10 bg-white rounded-[var(--radius)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 border border-zinc-100 z-20 w-64 text-left">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-zinc-900">Edit Task</span>
                                <div className="w-6 h-6 rounded-md hover:bg-zinc-100 flex items-center justify-center cursor-pointer text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-2 w-2/3 bg-zinc-100 rounded-full" />
                                <div className="h-2 w-full bg-zinc-100 rounded-full" />
                                <div className="h-2 w-5/6 bg-zinc-100 rounded-full" />
                            </div>
                            <div className="mt-4 flex gap-2">
                                <div className="flex-1 h-8 bg-zinc-900 rounded-md" />
                                <div className="w-8 h-8 bg-zinc-100 rounded-md" />
                            </div>
                        </div>

                        {/* Reflection gradient */}
                        <div className="absolute top-full left-0 right-0 h-40 bg-gradient-to-b from-purple-100/50 to-transparent transform scale-y-[-1] opacity-20 blur-sm pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Cursor({ name, color, isUser }: { name: string, color: string, isUser?: boolean }) {
    return (
        <div className="flex flex-col relative left-0 top-0">
            {/* Cursor SVG */}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
            >
                <path
                    d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                    fill={color}
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>

            {/* Name Badge */}
            <div
                className="px-2 py-1 rounded-full text-[10px] font-bold text-white whitespace-nowrap ml-3 mt-1 shadow-sm"
                style={{ backgroundColor: color }}
            >
                {name}
            </div>
        </div>
    )
}
