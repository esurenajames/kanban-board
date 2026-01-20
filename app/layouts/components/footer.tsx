import Link from 'next/link'

export function Footer() {
    return (
        <footer className="w-full bg-white border-t border-zinc-100 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Brand / Logo */}
                    <div className="flex items-center gap-3 font-serif text-2xl tracking-tighter text-zinc-900">
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
                    </div>

                    {/* Navigation Links - Matching Navbar Style */}
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <Link
                            href="/product"
                            className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors hover:scale-105 transform duration-200"
                        >
                            Product
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors hover:scale-105 transform duration-200"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors hover:scale-105 transform duration-200"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors hover:scale-105 transform duration-200"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Socials / Copyright */}
                    <div className="text-sm text-zinc-400">
                        © {new Date().getFullYear()} Boardly. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
