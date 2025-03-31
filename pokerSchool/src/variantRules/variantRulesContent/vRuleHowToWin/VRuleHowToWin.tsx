import { HowToWin } from "../../../hooks/useVariantRules"

interface HowToWinProps {
    howToWin: HowToWin
}

export default function VRuleHowToWin({ howToWin }: HowToWinProps) {
    return (
        <section className="howToWin">
            <h2 className="head">{howToWin.howToWinTitle}</h2>
            <p className="info">{howToWin.howToWinInfo}</p>
            <ol>
                {howToWin.howToWinParts?.map(howToWinPart => (
                    <li key={`howToWin-${howToWinPart}`}>{howToWinPart}</li>
                ))}
            </ol>
            <p>{howToWin.howToWinEndNote}</p>
        </section>
    )
}
