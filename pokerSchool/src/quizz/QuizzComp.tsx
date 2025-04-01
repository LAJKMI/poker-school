import { Link, useParams } from "react-router-dom";
import navLogo from '../assets/pictures/pokerLogo.png'
import './quizzComp.css'
import Card from "../assets/generalComponents/cardComp/Card";
import useData from "../hooks/useData";
import { useEffect, useMemo, useState } from "react";

interface Question {
    question: string
    choices: string[]
    answer: string

}

interface WronglyAnsweredQuestion {
    correctAnswer: string
    thatQuestion: string
    selectedAnswer: string
}

interface QuizzQuestions {
    id: string,
    quizQuestions: Question[]

}

function* questionGetter(arr: Question[]) {
    for (let i = 1; i <= arr.length; i++) {
        yield arr[i]
    }
}

const wronglyAnsweredQuestions: WronglyAnsweredQuestion[] = []
let styles = ''
export default function QuizzComp() {
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [isQuizzFinished, setIsQuizzFinished] = useState(false)
    const [questionCounter, setQuestionCounter] = useState(1)
    const [score, setScore] = useState(0)
    const { id } = useParams()
    const { data: questions, isLoading, isError, error } = useData<QuizzQuestions>('quizzQuestions')
    const question = questions?.find(q => q.id === id)
    const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>()
    const questionGenerator = useMemo(() => questionGetter(question?.quizQuestions || []), [question?.quizQuestions, isQuizzFinished])

    useEffect(() => {
        setCurrentQuestion(question?.quizQuestions[0])
    }, [question?.quizQuestions])

    if (!currentQuestion) return <div className="">current question undefined</div>
    if (!question?.quizQuestions) return <div className=""> question undefined</div>

    if (isQuizzFinished) {
        styles = "center"
    }

    return (
        <>
            <header id="quizzHeader">
                <Link to={'/'}><img src={navLogo} alt="logo" /></Link>
                <Link to={'/'}>
                    <button>Go Home</button>
                </Link>
            </header>
            <main id="quizzMain">
                {isQuizzFinished === false ? <><Card heading={`question ${questionCounter}`} info={currentQuestion.question} />
                    <div className="choices">
                        {currentQuestion.choices.map(choice => {
                            const keyId = choice.replace(/\s+/g, "")
                            return <div className="choice" key={keyId}>
                                <input type="radio" value={choice} name="choice" id={keyId} onChange={(e) => setSelectedAnswer(e.target.value)} />
                                <label htmlFor={keyId}>{choice}</label>
                            </div>
                        })}
                    </div>
                </>
                    : <div id="compleatedQuizz">
                        <h1 id="score">Congratulations Your Score is {score}</h1>
                        <div className="quizzInfoContainer">
                            <h2>here are the questions you answered wrong and the correct answers to them:</h2>
                            {wronglyAnsweredQuestions.map((wrongQuestion, index) => (
                                <div className="wrongQuestionContainer" key={index}>
                                    <>
                                        <p>Question -</p>
                                        <div className="answersContainer">
                                            <p className="wrongP"><span className="wrongAnswer">You Answered -</span> {wrongQuestion.selectedAnswer}</p>
                                            <p><span className="correctAnswer">The Correct Answer -</span> {wrongQuestion.correctAnswer}</p>
                                        </div>
                                    </>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                <div className="nextBtnBox" style={{ justifyContent: styles }} >

                    {
                        !isQuizzFinished ? (
                            questionCounter !== 15 ? (
                                <button className="quizzNextBtn" onClick={() => {
                                    const nextQuestion = questionGenerator.next().value
                                    if (nextQuestion !== undefined) {
                                        setCurrentQuestion(nextQuestion)
                                    }
                                    setQuestionCounter(prevQCounter => prevQCounter += 1)
                                    if (selectedAnswer === currentQuestion.answer) {
                                        setScore(prevScore => prevScore += 1)
                                    } else {
                                        wronglyAnsweredQuestions.push({
                                            correctAnswer: currentQuestion.answer,
                                            thatQuestion: currentQuestion.question,
                                            selectedAnswer: selectedAnswer
                                        })
                                    }
                                }} >Next</button>
                            ) : (
                                <button className="quizzNextBtn" onClick={() => {
                                    setIsQuizzFinished(true)
                                }}>Finish quizz </button>
                            )
                        ) : (
                            <button className="takeTheQuizzAgain" onClick={() => {
                                setIsQuizzFinished(false)
                                setScore(0)
                                setQuestionCounter(1)
                                styles = ''
                            }}>Redo the quizz</button>
                        )
                    }
                </div>
            </main>
        </>
    )
}
