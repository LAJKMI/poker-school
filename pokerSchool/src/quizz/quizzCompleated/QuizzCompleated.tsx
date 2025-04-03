import { wrongAnswers } from "../QuizzComp"

interface QuizzCompleatedProps {
    score: number
    wrongAnswers: wrongAnswers[]
}



export default function QuizzCompleated({ score, wrongAnswers }: QuizzCompleatedProps) {
    return (
        <div id="compleatedQuizz">
            <h1 id="score">Congratulations Your Score is {score}</h1>
            <div className="quizzInfoContainer">
                <h2>here are the questions you answered wrong and the correct answers to them:</h2>
                {wrongAnswers.map((wrongQuestion, index) => (
                    <div className="wrongQuestionContainer" key={index}>
                        <p className="q">Question:</p>
                        <p className="thatQuestion">{wrongQuestion.thatQuestion} -</p>
                        <div className="answersContainer">
                            <p className="wrongP"><span className="wrongAnswer">You Answered -</span> {wrongQuestion.selectedAnswer}</p>
                            <p><span className="correctAnswer">The Correct Answer -</span> {wrongQuestion.correctAnswer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
