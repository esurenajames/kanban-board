'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { login, signup, loginWithGoogle } from '../actions'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function AuthForm() {
    // For this specific design, we primarily show "Log in". 
    // If the user wants to sign up, we could toggle this or navigate to a signup page.
    // Given the prompt "adjust the login", we focus on the login UI.
    // We will keep the state to allow switching if needed, or just default to login.
    const [isLogin, setIsLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="w-full">
            <div className="space-y-3 mb-6">
                <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 h-11"
                    onClick={() => loginWithGoogle()}
                    type="button"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </Button>
            </div>

            <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-400">or</span>
                </div>
            </div>

            <form className="space-y-4">
                <div className="space-y-2">
                    {/* Input without label for cleaner look, or placeholder only as per image */}
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email address or username"
                        required
                        className="bg-white border-gray-300 focus-visible:ring-blue-500/20 focus-visible:border-blue-500 h-11"
                    />
                </div>

                <div className="space-y-2">
                    <div className="relative group">
                        <Input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            minLength={6}
                            className="bg-white border-gray-300 focus-visible:ring-blue-500/20 focus-visible:border-blue-500 h-11 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors bg-transparent border-none p-0 flex items-center justify-center outline-none focus:outline-none"
                        >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                <div className="flex justify-start">
                    <button type="button" className="text-xs text-blue-600 hover:underline bg-transparent border-none p-0">
                        Forgot your password?
                    </button>
                </div>

                <div className="pt-2">
                    <SubmitButton isLogin={isLogin} />
                </div>
            </form>

            <div className="mt-6 text-center text-xs">
                <span className="text-gray-500">Don't have an account? </span>
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-600 hover:underline font-medium bg-transparent border-none p-0"
                >
                    Sign up
                </button>
            </div>
        </div>
    )
}

function SubmitButton({ isLogin }: { isLogin: boolean }) {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            formAction={isLogin ? login : signup}
            disabled={pending}
            className="w-full bg-[#438ef7] hover:bg-[#3b7dd9] text-white font-medium h-11 shadow-sm"
        >
            {pending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
                'Continue'
            )}
        </Button>
    )
}
