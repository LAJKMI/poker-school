import SectionHeading from "../../../assets/generalComponents/sectionHeadingComp/SectionHeading"
import { KeyStrategies } from "../../../hooks/useVariantRules"

interface KeyStrategiesProps {
    keyStrategies: KeyStrategies
}

export default function VRuleKeyStrategies({ keyStrategies }: KeyStrategiesProps) {
    return (
        <section className="KeyStrategies">
            <h2 className="head">{keyStrategies.keyStrategiesTitle}</h2>
            <p className="info">{keyStrategies.keyStrategiesInfo}</p>
            {keyStrategies.keyStrategiesParts.map(keyStrategyPart => (
                <SectionHeading key={`keyStrategies-${keyStrategyPart.keyStrategiesPartsTitle}`} heading={keyStrategyPart.keyStrategiesPartsTitle} info={keyStrategyPart.keyStrategiesPartsInfo} />
            ))}
        </section>
    )
}
