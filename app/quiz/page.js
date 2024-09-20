"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

import QuizApp from '../screen/QuizApp'

function page() {

    const searchParams = useSearchParams();   
    const topic = searchParams.get('sort');
      
    return (
        <div>
            
            <QuizApp topic={topic} />
        </div>
    );
}

export default page