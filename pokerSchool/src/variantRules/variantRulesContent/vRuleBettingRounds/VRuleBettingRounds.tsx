import SectionHeading from "../../../assets/generalComponents/sectionHeadingComp/SectionHeading"
import { BettingRounds } from "../../../hooks/useVariantRules"

interface BettingRoundsProps {
    bettingRounds: BettingRounds
}

export default function VRuleBettingRounds({ bettingRounds }: BettingRoundsProps) {
    return (
        <section className="bettingRounds">
            <h2 className="head">{bettingRounds.bettingRoundsTitle}</h2>
            <p className="info">{bettingRounds.bettingRoundsInfo}</p>
            {bettingRounds.bettingRoundsParts.map(bettingRoundPart => (
                <SectionHeading key={`bettingRounds-${bettingRoundPart.bettingRoundsPartsTitle}`} heading={bettingRoundPart.bettingRoundsPartsTitle} info={bettingRoundPart.bettingRoundsPartsInfo} />
            ))}
        </section>
    )
}
