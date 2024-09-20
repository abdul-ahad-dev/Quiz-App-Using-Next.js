"use client"

import React, { useState, useEffect } from "react"
import Result from "./Result"
import questions from "../data/questions"

export default function ModernQuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)


    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer)
    }

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
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
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-10/12">
                <div className="bg-teal-400 text-white p-4">
                    <h1 className="text-2xl font-bold text-center">Modern Quiz App</h1>
                </div>
                <div className="p-6 bg-teal-500 text-gray-100">
                    <div className="transition-opacity duration-300 ease-in-out">
                        {showScore ? (
                            <Result
                                score={score}
                                questionsLength={questions.length}
                                handleRestartQuiz={handleRestartQuiz}  // Pass the restart function as a prop
                            />
                        ) : (
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-medium">
                                        Question {currentQuestion + 1} of {questions.length}
                                    </span>
                                    <span className="flex items-center text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        00s
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                                    <div
                                        className="bg-teal-800 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                                        style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                                    ></div>
                                </div>
                                <h2 className="text-xl text-white text-center font-semibold mb-4">{questions[currentQuestion].text}</h2>
                                <div className="space-y-2 text-gray-900">
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <button
                                            key={index}
                                            className={`w-full p-2 text-left rounded-md transition-colors duration-300 ${selectedAnswer === option
                                                ? "bg-teal-600 text-white"
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
                <div className="bg-teal-400 p-4">
                    {showScore ? (
                        <button
                            onClick={handleRestartQuiz}
                            className="w-full bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-900 transition-colors duration-300"
                        >
                            Restart Quiz
                        </button>
                    ) : (
                        <button
                            onClick={handleNextQuestion}
                            disabled={!selectedAnswer}
                            className={`w-full py-2 px-4 rounded-md transition-colors duration-300 ${selectedAnswer
                                ? "bg-teal-700 text-white hover:bg-teal-900"
                                : "bg-teal-100 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}