// Result.js

import React from "react"

const Result = ({ score, questionsLength, handleRestartQuiz }) => {
	return (
		<div className="text-center">
			<h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
			<p className="text-4xl font-bold mb-4">
				Your score: {score} / {questionsLength}
			</p>
			<div className="flex justify-center space-x-2 mb-4">
				{[...Array(questionsLength)].map((_, index) => (
					<span key={index}>
						{index < score ? (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						)}
					</span>
				))}
			</div>
			<p className="text-lg mb-4">
				{score === questionsLength
					? "Perfect score! You're a quiz master!"
					: score >= questionsLength / 2
						? "Great job! You passed the quiz."
						: "Keep practicing. You'll do better next time!"}
			</p>
			<button
				onClick={handleRestartQuiz}
				className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
			>
				Restart Quiz
			</button>
		</div>
	)
}

export default Result
