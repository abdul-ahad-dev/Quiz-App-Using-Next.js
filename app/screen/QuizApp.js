"use client"

import React, { useState, useEffect } from "react"
import Result from "./Result"
import questions from "../data/questions"
import Link from "next/link"


export default function ModernQuizApp({ topic }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [timer, setTimer] = useState(100)

    const filterQ = questions.filter(item => item.topic === topic);
    const filterQuestion = filterQ.length > 0 ? filterQ[0].questions : [];
    console.log(filterQuestion[0].answer);

    useEffect(() => {
        setTimeout(() => {
            if (timer > 0) {
                setTimer(timer - 1)
                console.log(timer);
            } else {
                setShowScore(true)
            }
        }, 1000)
    }, [timer])

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer)
    }

    const handleNextQuestion = () => {
        if (selectedAnswer === filterQuestion[currentQuestion].answer) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion < filterQuestion.length) {
            setCurrentQuestion(nextQuestion)
            setSelectedAnswer("")
        } else {
            setShowScore(true)
        }
    }

    const handleRestartQuiz = () => {
        setCurrentQuestion(0)
        setSelectedAnswer("")
        setScore(0)
        setShowScore(false)
        setTimer(100)
    }

    return (
        <Link href="">
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ECE9E6] to-[#FFFFFF] p-6">
                <div className="bg-white rounded-lg overflow-hidden w-full md:w-10/12 border-2 border-gray-300 shadow-[1px_1px_15px_5px_rgba(0,0,0,.1)]">
                    <div className="bg-teal-400 text-white p-6">
                        <h1 className="text-5xl font-bold text-center">{filterQ[0].topic} Quiz</h1>
                    </div>
                    <div className="p-6 bg-teal-500 text-gray-100">
                        <div className="transition-opacity duration-300 ease-in-out">
                            {showScore ? (
                                <Result
                                    score={score}
                                    questionsLength={filterQuestion.length}
                                    handleRestartQuiz={handleRestartQuiz}
                                />
                            ) : (
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-md shadow-md rounded-xl p-2 font-medium">
                                            Question {currentQuestion + 1} of {filterQuestion.length}
                                        </span>
                                        <span className="flex items-center text-md shadow-md rounded-xl p-2 font-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {timer}s
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-lg mb-4">
                                        <div
                                            className="bg-teal-800 h-3 rounded-full transition-all duration-300 ease-in-out"
                                            style={{ width: `${(currentQuestion / filterQuestion.length) * 100}%` }}
                                        ></div>
                                    </div>
                                    <h2 className="text-3xl text-white text-center font-semibold shadow-md rounded-xl p-4 mb-4">{filterQuestion[currentQuestion].question}</h2>
                                    <div className="space-y-4 text-gray-900">
                                        {filterQuestion[currentQuestion].options.map((option, index) => (
                                            <button
                                                key={index}
                                                className={`w-full p-3 text-left rounded-md shad transition-colors duration-300 ${selectedAnswer === option
                                                    ? "bg-teal-800 text-white"
                                                    : "bg-teal-50 hover:bg-teal-100"
                                                    }`}
                                                onClick={() => handleAnswerSelect(option)}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bg-teal-400 p-6">
                        {showScore ? (
                            <Link
                                href="/home"
                                className="w-full bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-900 transition-colors duration-300"
                            >
                                Home
                            </Link>
                        ) : (
                            <button
                                onClick={handleNextQuestion}
                                disabled={!selectedAnswer}
                                className={`w-full py-2 px-4 rounded-md transition-colors duration-300 ${selectedAnswer
                                    ? "bg-teal-800 text-white hover:bg-teal-900"
                                    : "bg-teal-50 text-gray-800 cursor-not-allowed"
                                    }`}
                            >
                                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}