"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import mcqs from "../data/questions";
import Link from "next/link";


function Page() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    return (
        <div>

            <Navbar />

            <div className="container mx-auto p-4 bg-teal-50">
                <div className="p-10">
                    <p className="text-2xl">Hello,</p>
                    <h1 className="text-5xl font-semibold">Abdul Ahad</h1>
                </div>
                <h1 className="mx-auto w-fit p-4 text-teal-700 text-3xl font-bold text-center italic rounded-lg shadow-[1px_1px_10px_1px_rgba(0,0,0,.1)] ">
                    What Subject do you want to improve today?
                </h1>
                <div className="flex justify-center my-5 p-6 gap-6">
                    {mcqs.map((question) => (
                        <button
                            key={question.topic}
                            onClick={() => {
                                router.push('/quiz' + '?' + createQueryString('sort', question.topic))
                            }}
                            className="w-40 h-40 p-2 rounded-2xl flex justify-center items-center bg-teal-700"
                        >
                            <h1 className="text-gray-100 text-2xl text-center p-2">{question.topic}</h1>
                        </button>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Page