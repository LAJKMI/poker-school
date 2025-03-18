import './commonMistake.css'

interface MistakesProps {
    firstMistake: string,
    secondMistake?: string
}

export default function CommonMistake({ firstMistake, secondMistake }: MistakesProps) {
    return (
        <div className="mistakes">
            <h3>Common Mistakes</h3>
            <ul>
                <li>{firstMistake}</li>
                <li>{secondMistake}</li>
            </ul>
        </div>
    )
}
