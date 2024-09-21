"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import QuizApp from '../screen/QuizApp'

export default function QuizPage() {

    const searchParams = useSearchParams();   
    const topic = searchParams.get('sort');
      
    return (
        <div>
            
            <QuizApp topic={topic} />
        </div>
    );
}