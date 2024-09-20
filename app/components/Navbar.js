'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className="bg-teal-300 text-gray-900 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="" className="text-3xl underline font-bold">
                        <h1 className="p-2">Quiz App</h1>
                    </Link>

                    <div className="block">
                        <p className="bg-teal-700 text-white text-lg py-2 px-4 rounded-xl shadow-[1px_1px_10px_1px_rgba(0,0,0,0.1)]">
                            Abdul Ahad
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}