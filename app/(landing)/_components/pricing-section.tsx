'use client'

import { useState, useRef } from 'react'
import { Check, X } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pricingPlans = [
    {
        name: 'Free',
        price: '0',
        description: 'For individuals and small teams just getting started.',
        features: [
            'Unlimited boards',
            '3 team members',
            'Basic automation',
            '1,000 runs per month'
        ],
        cta: 'Get started for free',
        popular: false
    },
    {
        name: 'Pro',
        price: '12',
        description: 'For growing teams that need more power and improved collaboration.',
        features: [
            'Unlimited team members',
            'Advanced automation',
            'Unlimited runs',
            'Guest access',
            'Priority support'
        ],
        cta: 'Start free trial',
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations needing enterprise-grade control and security.',
        features: [
            'SSO & refined permissions',
            'Audit logs',
            'Data residency',
            'Dedicated success manager',
            '24/7 SLA support'
        ],
        cta: 'Contact sales',
        popular: false
    }
]

const comparisonFeatures = [
    { name: 'Private board sharing', free: true, pro: true, enterprise: true },
    { name: 'Board exports', free: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
    { name: 'Integrations', free: 'Core', pro: 'Core + Jira', enterprise: 'All + Salesforce' },
    { name: 'Interactive presentation mode', free: true, pro: true, enterprise: true },
    { name: 'Private mode', free: false, pro: true, enterprise: true },
    { name: 'Voting', free: false, pro: true, enterprise: true },
    { name: 'Timer', free: false, pro: true, enterprise: true },
    { name: 'Advanced search', free: false, pro: true, enterprise: true },
    { name: 'Layers', free: true, pro: true, enterprise: true },
]

export function PricingSection() {
    const [showComparison, setShowComparison] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Simple fade animation when switching views
    useGSAP(() => {
        gsap.fromTo(".animate-view",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        )
    }, { scope: containerRef, dependencies: [showComparison] })

    return (
        <section ref={containerRef} className="bg-white py-24 px-6 md:px-12 min-h-screen flex flex-col items-center justify-start overflow-hidden" id="pricing">
            <div className="max-w-7xl mx-auto w-full relative">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-zinc-900 mb-6">
                        Priced to fit your team
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-8">
                        Whether you’re a startup or a global enterprise, we have a plan that grows with you.
                    </p>

                    {/* View Toggle (Cards vs Comparison) */}
                    <div className="relative inline-flex bg-zinc-100 p-1 rounded-lg">
                        <div
                            className={`absolute inset-y-1 w-[calc(50%-4px)] bg-white rounded-md shadow-sm transition-all duration-300 ease-in-out ${showComparison ? 'left-[calc(50%+2px)]' : 'left-1'}`}
                        />
                        <button
                            onClick={() => setShowComparison(false)}
                            className={`relative z-10 px-8 py-2.5 text-sm font-medium transition-colors duration-300 w-36 ${!showComparison ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
                        >
                            Plans
                        </button>
                        <button
                            onClick={() => setShowComparison(true)}
                            className={`relative z-10 px-8 py-2.5 text-sm font-medium transition-colors duration-300 w-36 ${showComparison ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
                        >
                            Comparison
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="animate-view min-h-[600px]">
                    {!showComparison ? (
                        /* Cards View */
                        <div className="grid md:grid-cols-3 gap-8 items-start w-full">
                            {pricingPlans.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`
                                        relative p-8 rounded-[var(--card-radius)] border flex flex-col h-full transition-all duration-300
                                        ${plan.popular
                                            ? 'bg-zinc-900 text-white border-zinc-900 shadow-xl scale-105 z-10'
                                            : 'bg-white text-zinc-900 border-zinc-200 hover:border-zinc-300 hover:shadow-lg'
                                        }
                                    `}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="mb-2">
                                        <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-zinc-900'}`}>
                                            {plan.name}
                                        </h3>
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-4xl font-bold">
                                                {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                                            </span>
                                            {plan.price !== 'Custom' && (
                                                <span className={`text-sm ${plan.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                                    /user/mo
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <p className={`text-sm leading-relaxed mb-8 ${plan.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                            {plan.description}
                                        </p>

                                        <ul className="space-y-4 mb-8 flex-1">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3 text-sm">
                                                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-primary/70' : 'text-primary'}`} />
                                                    <span className={plan.popular ? 'text-zinc-300' : 'text-zinc-600'}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button className={`
                                            w-full py-3 px-4 rounded-lg font-medium transition-colors
                                            ${plan.popular
                                                ? 'bg-primary hover:bg-primary/90 text-white'
                                                : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'
                                            }
                                        `}>
                                            {plan.cta}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Comparison View - Professional Table */
                        <div className="w-full bg-white rounded-[var(--card-radius)] border border-zinc-200 shadow-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr>
                                            <th className="p-6 md:p-8 w-1/4 bg-white border-b border-zinc-100 text-xl font-serif font-medium text-zinc-900 align-bottom">
                                                Select Plan
                                            </th>
                                            {pricingPlans.map((plan) => (
                                                <th
                                                    key={plan.name}
                                                    className={`
                                                        p-6 md:p-8 w-1/4 align-bottom transition-colors
                                                        ${plan.popular ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900 border-b border-zinc-100'}
                                                    `}
                                                >
                                                    <div className="flex flex-col gap-4 items-center">
                                                        <span className="text-xl font-bold">{plan.name}</span>
                                                        <div className="text-sm font-normal opacity-80 h-10 flex items-center text-center leading-tight">
                                                            {plan.description.split('.')[0]}
                                                        </div>
                                                        <button className={`
                                                            px-6 py-2.5 rounded-lg text-sm font-medium w-full mt-2 transition-colors
                                                            ${plan.popular
                                                                ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20'
                                                                : 'bg-zinc-50 border border-zinc-200 text-zinc-900 hover:bg-zinc-100'
                                                            }
                                                        `}>
                                                            {plan.cta}
                                                        </button>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-100">
                                        {comparisonFeatures.map((feature) => (
                                            <tr key={feature.name} className="group transition-colors hover:bg-zinc-50/50">
                                                <td className="p-4 md:px-8 text-sm font-medium text-zinc-600 bg-white group-hover:bg-zinc-50/50">
                                                    {feature.name}
                                                </td>

                                                {/* Free */}
                                                <td className="p-4 text-center text-sm text-zinc-500 bg-white group-hover:bg-zinc-50/50">
                                                    <div className="flex justify-center">
                                                        {typeof feature.free === 'boolean'
                                                            ? (feature.free ? <Check className="w-5 h-5 text-primary" /> : <X className="w-5 h-5 text-zinc-200" />)
                                                            : feature.free}
                                                    </div>
                                                </td>

                                                {/* Pro (Highlighted) */}
                                                <td className="p-4 text-center text-sm text-white bg-zinc-900 shadow-inner">
                                                    <div className="flex justify-center text-zinc-300">
                                                        {typeof feature.pro === 'boolean'
                                                            ? (feature.pro ? <Check className="w-5 h-5 text-white" /> : <X className="w-5 h-5 text-zinc-700" />)
                                                            : feature.pro}
                                                    </div>
                                                </td>

                                                {/* Enterprise */}
                                                <td className="p-4 text-center text-sm text-zinc-500 bg-white group-hover:bg-zinc-50/50">
                                                    <div className="flex justify-center">
                                                        {typeof feature.enterprise === 'boolean'
                                                            ? (feature.enterprise ? <Check className="w-5 h-5 text-primary" /> : <X className="w-5 h-5 text-zinc-200" />)
                                                            : feature.enterprise}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}
