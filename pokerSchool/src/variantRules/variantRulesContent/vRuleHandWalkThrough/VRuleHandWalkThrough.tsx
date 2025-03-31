import { HandWalkthrough } from "../../../hooks/useVariantRules"

interface HandWalkThroughProps {
    handWalkthrough: HandWalkthrough
}

export default function VRuleHandWalkThrough({ handWalkthrough }: HandWalkThroughProps) {
    return (
        <section className="handWalkthrough">
            <h2 className="head">{handWalkthrough.handWalkthroughTitle}</h2>
            <p className="info">{handWalkthrough.handWalkthroughInfo}</p>
            {handWalkthrough.handWalkthroughParts.map(handWalkThroughPart => (
                <div className="handFase" key={`handWalkThrough-${handWalkThroughPart.handWalkthroughPartsTitle}`}>
                    <h3>{handWalkThroughPart.handWalkthroughPartsTitle}</h3>
                    {handWalkThroughPart.handWalkthroughPartsInfo.handWalkthroughPartsInfoPtag.map(Ptag => (
                        <p key={`handWalkThrough-${Ptag}`}>{Ptag}</p>
                    ))}
                    <ul>
                        {handWalkThroughPart.handWalkthroughPartsInfo.handWalkthroughPartsInfoList?.map(listItem => (
                            <li key={`handWalkThrough-${listItem}`}>{listItem}</li>
                        ))}
                    </ul>
                    <p className="pot">{handWalkThroughPart.handWalkthroughPartsInfo.handWalkthroughPartsInfoEndNote}</p>
                </div>
            ))}
            <p>{handWalkthrough.handWalkthroughEndNote}</p>

        </section>
    )
}
