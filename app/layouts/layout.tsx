import React from 'react';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
