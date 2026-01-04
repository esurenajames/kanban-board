import { Suspense } from 'react'
import { AuthForm } from './components/auth-form'
import { AuthMessages } from './components/auth-messages'
import { ArrowUpRight } from 'lucide-react'

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex">
            {/* Left Side - Image & Overlay Widgets - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 relative flex-col p-12 overflow-hidden bg-sky-500 m-4 rounded-4xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/login-bg.png"
                        alt="Background"
                        className="h-full w-full object-cover object-center"
                    />
                    {/* Gradient Overlay for text readability at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Floating Widgets Container */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between">

                    {/* Top Left Branding Icon */}
                    <div className="absolute top-0 left-0 flex items-center gap-2.5 text-white/90">
                        <div className="bg-white/20 backdrop-blur-md border border-white/20 p-2 rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM9 7H7V17H9V7ZM13 7H11V14H13V7ZM17 7H15V12H17V7Z" />
                            </svg>
                        </div>
                        <span className="font-bold text-lg tracking-tight">Kanban Board</span>
                    </div>

                    {/* Top Right Widget - Static Abstract Kanban */}
                    <div className="self-end mt-12 w-auto bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-white/20">
                        <div className="flex gap-4">
                            {/* Column 1 - Pink */}
                            <div className="flex flex-col gap-2">
                                <div className="h-2.5 w-10 bg-pink-500 rounded-full mb-1"></div>
                                <div className="flex gap-2">
                                    <div className="w-1 bg-pink-500 rounded-full h-full opacity-30"></div>
                                    <div className="flex flex-col gap-2">
                                        <div className="h-8 w-20 bg-white border border-gray-100 rounded shadow-sm flex flex-col justify-center px-1.5 gap-1">
                                            <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="h-8 w-20 bg-white border border-gray-100 rounded shadow-sm flex flex-col justify-center px-1.5 gap-1">
                                            <div className="flex gap-1 mb-0.5">
                                                <div className="h-1 w-3 bg-gray-200 rounded-full"></div>
                                                <div className="h-1 w-2 bg-gray-200 rounded-full"></div>
                                            </div>
                                            <div className="h-1 w-14 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="h-8 w-20 bg-white border border-gray-100 rounded shadow-sm flex flex-col justify-center px-1.5 gap-1">
                                            <div className="h-1 w-10 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="h-8 w-20 bg-white border border-gray-100 rounded shadow-sm flex flex-col justify-center px-1.5 gap-1">
                                            <div className="h-1 w-8 bg-gray-200 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 - Indigo */}
                            <div className="flex flex-col gap-2">
                                <div className="h-2.5 w-10 bg-indigo-500 rounded-full mb-1"></div>
                                <div className="flex gap-2">
                                    <div className="w-1 bg-indigo-500 rounded-full h-full opacity-30"></div>
                                    <div className="flex flex-col gap-2">
                                        <div className="h-8 w-20 bg-white border border-gray-100 rounded shadow-sm flex flex-col justify-center px-1.5 gap-1">
                                            <div className="h-1 w-16 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="h-8 w-20 bg-white border border-gray-100 rounded shadow-sm flex flex-col justify-center px-1.5 gap-1">
                                            <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="h-8 w-20 bg-white border border-gray-100 rounded shadow-sm flex flex-col justify-center px-1.5 gap-1">
                                            <div className="h-1 w-14 bg-gray-200 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3 - Blue */}
                            <div className="flex flex-col gap-2">
                                <div className="h-2.5 w-10 bg-blue-500 rounded-full mb-1"></div>
                                <div className="flex gap-2">
                                    <div className="w-1 bg-blue-500 rounded-full h-full opacity-30"></div>
                                    <div className="flex flex-col gap-2">
                                        <div className="h-8 w-20 bg-white border border-gray-100 rounded shadow-sm flex flex-col justify-center px-1.5 gap-1">
                                            <div className="h-1 w-14 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="h-8 w-20 bg-white border border-gray-100 rounded shadow-sm flex flex-col justify-center px-1.5 gap-1">
                                            <div className="flex gap-1">
                                                <div className="h-1 w-8 bg-gray-200 rounded-full"></div>
                                                <div className="h-1 w-4 bg-gray-200 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="h-8 w-20 bg-white border border-gray-100 rounded shadow-sm flex flex-col justify-center px-1.5 gap-1">
                                            <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-32">
                        <div className="self-start bg-white/95 backdrop-blur-sm rounded-full py-3 px-5 shadow-lg flex items-center gap-3 animate-in slide-in-from-left-4 duration-700 delay-150">
                            <div className="bg-blue-500 rounded-full p-1.5 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                            </div>
                            <div className="max-w-[120px]">
                                <p className="text-sm font-medium text-gray-900">Kanban Board with AI Integration</p>
                            </div>
                        </div>

                        {/* AI Feature Pill */}
                        <div className="flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                    <ArrowUpRight className="h-4 w-4" />
                                </div>
                                <span className="font-medium tracking-tight text-shadow-sm">Learn more about Kanban Board</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form/White Area */}
            <div className="flex-1 bg-white flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 overflow-y-auto">
                <div className="w-full max-w-[400px] space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-xl font-bold tracking-tight text-gray-900">
                            Log in to your account
                        </h1>
                    </div>

                    <Suspense fallback={<div className="h-4" />}>
                        <AuthMessages />
                    </Suspense>

                    <AuthForm />

                    <div className="text-center text-xs mt-8">
                        <a href="#" className="text-blue-600 hover:underline">Sign in to Webflow Optimize</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
