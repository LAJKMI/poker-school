import { Link, useParams } from "react-router-dom"
import { Conclusion } from "../../../hooks/useVariantRules"

interface ConclusionProps {
    conclusion: Conclusion
}

export default function VRuleConclusion({ conclusion }: ConclusionProps) {
    const { id } = useParams()
    return (
        <section className="conclusion">
            <h2 className="head">{conclusion.conclusionTitle}</h2>
            <p className="info">{conclusion.conclusionInfo}</p>
            <p>Ready to test your knowledge? <br /> Take our quiz on the rules  and sharpen your understanding!</p>
            <p>Ready Want to improve your skills? <br /> Try our hand scenarios and practice making the best decisions!</p>
            <div className="learnVariantBtns">
                <Link to={`/quizz/${id}`}>
                    <button className="quizz">Take The Quizz</button>
                </Link>
                <Link to={`/scenario/${id}`}>
                    <button className="practice">Practice</button>
                </Link>
            </div>
        </section>
    )
}
