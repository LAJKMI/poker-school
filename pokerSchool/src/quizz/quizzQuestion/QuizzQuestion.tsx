import Card from "../../assets/generalComponents/cardComp/Card"
import { Question } from "../QuizzComp"

interface QuizzQuestionProps {
    questionCounter: number
    currentQuestion: Question
    selcetAnswer: (answer: string) => void
}

export default function QuizzQuestion({ questionCounter, currentQuestion, selcetAnswer }: QuizzQuestionProps) {
    return (
        <>
            <Card heading={`question ${questionCounter}`} info={currentQuestion.question} /><div className="choices">
                {currentQuestion.choices.map(choice => {
                    const keyId = choice.replace(/\s+/g, "")
                    return <div className="choice" key={keyId}>
                        <input type="radio" value={choice} name="choice" id={keyId} onChange={(e) =>

                            selcetAnswer(e.target.value)
                        } />
                        <label htmlFor={keyId}>{choice}</label>
                    </div>
                })}
            </div>
        </>
    )
}
