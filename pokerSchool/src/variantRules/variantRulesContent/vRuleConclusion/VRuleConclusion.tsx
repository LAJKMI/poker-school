import { Conclusion } from "../../../hooks/useVariantRules"

interface ConclusionProps {
    conclusion: Conclusion
}

export default function VRuleConclusion({ conclusion }: ConclusionProps) {
    return (
        <section className="conclusion">
            <h2 className="head">{conclusion.conclusionTitle}</h2>
            <p className="info">{conclusion.conclusionInfo}</p>
            <p>Ready to test your knowledge? <br /> Take our quiz on the rules  and sharpen your understanding!</p>
            <p>Ready Want to improve your skills? <br /> Try our hand scenarios and practice making the best decisions!</p>
            <div className="learnVariantBtns">
                <button className="quizz">Take The Quizz</button>
                <button className="practice">Practice</button>
            </div>
        </section>
    )
}
