import { Link, useParams } from "react-router-dom";
import navLogo from '../assets/pictures/pokerLogo.png'
import './quizzComp.css'
import { useState } from "react";
import { NUMOFQUESTIONS } from "../utils/constants";
import QuizzQuestion from "./quizzQuestion/QuizzQuestion";
import QuizzCompleated from "./quizzCompleated/QuizzCompleated";
import useVariantRulesQuestions from "../hooks/useVRulesQuestions";

export interface Question {
    question: string
    choices: string[]
    answer: string

}

export interface wrongAnswers {
    correctAnswer: string
    thatQuestion: string
    selectedAnswer: string
}

export interface QuizzQuestions {
    id: string,
    quizQuestions: Question[]

}

export default function QuizzComp() {


    const [notAnswered, setNotAnswered] = useState(false)
    const [wrongAnswers, setWrongAnswers] = useState<wrongAnswers[]>([])
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [isQuizzFinished, setIsQuizzFinished] = useState(false)
    const [questionCounter, setQuestionCounter] = useState(1)
    const [score, setScore] = useState(0)
    const { id } = useParams()
    const { data: questions, isLoading, isError, error } = useVariantRulesQuestions()
    const question = questions?.find(q => q.id === id)
    const [currentIndex, setCurrentIndex] = useState(0)

    let currentQuestion = question?.quizQuestions[currentIndex]
    const styles = isQuizzFinished ? 'center' : ''
    const nextOrFinish = questionCounter === NUMOFQUESTIONS ? 'Finish Quizz' : 'Next Question'
    if (isLoading) return <div className="">Loading...</div>
    if (isError) return <div className="">{error.message}</div>
    if (!currentQuestion) return <div className="">current question undefined</div>

    const handleNextQuestion = () => {
        if (!selectedAnswer) {
            setNotAnswered(true)
            return
        }

        if (selectedAnswer === currentQuestion.answer) {
            setScore(prevScore => prevScore += 1)
        } else {
            setWrongAnswers(prevWrongAnswers => [
                ...prevWrongAnswers,
                {
                    correctAnswer: currentQuestion.answer,
                    thatQuestion: currentQuestion.question,
                    selectedAnswer: selectedAnswer
                }])
        }

        if (questionCounter === NUMOFQUESTIONS) {
            setIsQuizzFinished(true)
        } else {
            setCurrentIndex(prevIndex => prevIndex += 1)
            setQuestionCounter(prevQCounter => prevQCounter += 1)
        }
        setSelectedAnswer('')
        setNotAnswered(false)
    }

    const handleQuizzRedo = () => {
        setIsQuizzFinished(false)
        setScore(0)
        setQuestionCounter(1)
        setWrongAnswers([])
        setCurrentIndex(0)
    }

    if (!wrongAnswers) return
    return (
        <>
            <header id="quizzHeader">
                <Link to={'/'}><img src={navLogo} alt="logo" /></Link>
                <Link to={'/'}>
                    <button>Go Home</button>
                </Link>
            </header>
            <main id="quizzMain">
                {isQuizzFinished === false ? <QuizzQuestion questionCounter={questionCounter} currentQuestion={currentQuestion} selcetAnswer={setSelectedAnswer} /> : <QuizzCompleated score={score} wrongAnswers={wrongAnswers} />}

                {notAnswered && <p>Please select an answer even if you are not sure give it your best shot!</p>}

                <div className="nextBtnBox" style={{ justifyContent: styles }} >

                    {
                        !isQuizzFinished ? (
                            <button className="quizzNextBtn" onClick={() => {
                                handleNextQuestion()
                            }} >{nextOrFinish}</button>

                        ) : (
                            <button className="takeTheQuizzAgain" onClick={() => {
                                handleQuizzRedo()
                            }}>Redo the quizz</button>
                        )
                    }
                </div>
            </main>
        </>
    )
}
