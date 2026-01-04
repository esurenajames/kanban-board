'use client'

import { useSearchParams } from 'next/navigation'
import { AlertCircle, CheckCircle } from 'lucide-react'

export function AuthMessages() {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')
    const message = searchParams.get('message')

    if (error) {
        return (
            <div className="mb-6 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="h-4 w-4" />
                {error}
            </div>
        )
    }

    if (message) {
        return (
            <div className="mb-6 px-4 py-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                <CheckCircle className="h-4 w-4" />
                {message}
            </div>
        )
    }

    return null
}
