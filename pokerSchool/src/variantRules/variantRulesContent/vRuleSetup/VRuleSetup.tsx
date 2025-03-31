import SectionHeading from "../../../assets/generalComponents/sectionHeadingComp/SectionHeading"
import { Setup } from "../../../hooks/useVariantRules"

interface SetupProps {
    setup: Setup
}

export default function VRuleSetup({ setup }: SetupProps) {
    return (
        <section className="setup">
            <h2 className="head">{setup.setupTitle}</h2>
            <p className="info">{setup.setupInfo}</p>
            {setup.setupParts.map(setupPart => (
                <SectionHeading key={`setup-${setupPart.setupPartsTitle}`} heading={setupPart.setupPartsTitle} info={setupPart.setupPartsInfo} />
            ))}
        </section>
    )
}
