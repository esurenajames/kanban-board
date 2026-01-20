import Layout from '@/app/layouts/layout'
import { Hero } from './_components/hero'
import { InnovationSection } from './_components/innovation-section'


import { SidekicksSection } from './_components/sidekicks-section'
import { PricingSection } from './_components/pricing-section'
import { TeamsSection } from './_components/teams-section'

export default function LandingPage() {
    return (
        <Layout>
            <Hero />
            <InnovationSection />
            <SidekicksSection />
            <PricingSection />
            <TeamsSection />
        </Layout>
    )
}
