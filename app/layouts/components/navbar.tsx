import Link from 'next/link'


export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-md border-b border-zinc-100">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 font-serif text-2xl tracking-tighter text-zinc-900">
                    <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-purple-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                        </svg>
                    </div>
                    <span>Boardly</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden md:block text-sm font-medium text-zinc-600 hover:text-primary transition-colors hover:scale-105 transform duration-200"
                    >
                        Talk to us
                    </Link>
                    <Link
                        href="/pricing"
                        className="hidden md:block text-sm font-medium text-zinc-600 hover:text-primary transition-colors hover:scale-105 transform duration-200"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/login"
                        className="px-5 py-2 text-sm font-bold text-primary border-2 border-primary/20 hover:border-primary rounded-full hover:bg-primary/5 transition-all hover:-translate-y-0.5"
                    >
                        Sign in
                    </Link>
                    <Link
                        href="/login?signup=true"
                        className="px-6 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-md shadow-purple-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-300"
                    >
                        Try for free
                    </Link>
                </div>
            </div>
        </nav>
    )
}
