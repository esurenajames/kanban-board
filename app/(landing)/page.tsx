import Layout from '@/app/layouts/layout'
import { Hero } from './_components/hero'
import { Features } from './_components/features'
import { Footer } from './_components/footer'

export default function LandingPage() {
    return (
        <Layout>
            <div className="overflow-hidden">
                <Hero />
                <Features />
                <Footer />
            </div>
        </Layout>
    )
}
