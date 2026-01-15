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
    const containerRef = useRef<HTMLDivElement>(null)
    const imageContainerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom center",
                scrub: 1,
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
                ease: "power2.out"
            }
        )
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="relative inline-block mb-6">
                    <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight text-zinc-900 leading-[0.9]">
                        A home for your <br />
                        <span className="italic">design system</span>
                    </h1>
                </div>

                <p className="mt-8 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                    Boardly helps designers and engineers document and publish their design systems.
                    Made for people. Ready for AI. Built for the future.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                    <Link
                        href="/login?signup=true"
                        className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-purple-200 hover:-translate-y-1"
                    >
                        Start 1 month free trial
                    </Link>
                </div>
                <div className="perspective-1000">
                    <div
                        ref={imageContainerRef}
                        className="relative mx-auto max-w-6xl"
                    >
                        <DashboardPreview />
                        {/* Reflection gradient */}
                        <div className="absolute top-full left-0 right-0 h-40 bg-gradient-to-b from-purple-100/50 to-transparent transform scale-y-[-1] opacity-20 blur-sm pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    )
}
