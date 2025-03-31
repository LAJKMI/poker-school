import { LearnVariant } from "../../hooks/useVariantRules"
import VRuleGameObjective from "./gameObjective/VRuleGameObjective"
import VariantRulesHeading from "./variantRulesHeading/VariantRulesHeading"
import VRuleBettingRounds from "./vRuleBettingRounds/VRuleBettingRounds"
import VRuleConclusion from "./vRuleConclusion/VRuleConclusion"
import VRuleHandWalkThrough from "./vRuleHandWalkThrough/VRuleHandWalkThrough"
import VRuleHowToWin from "./vRuleHowToWin/VRuleHowToWin"
import VRuleKeyStrategies from "./vRuleKeyStrategies/VRuleKeyStrategies"
import VRuleSetup from "./vRuleSetup/VRuleSetup"

interface VRuleContentProps {
    learnVariant: LearnVariant
}

export default function VRuleContent({ learnVariant }: VRuleContentProps) {
    const { img, heading, gameObjective, setup, bettingRounds, howToWin, keyStrategies, handWalkthrough, conclusion } = learnVariant
    return (
        <>
            <VariantRulesHeading img={img} heading={heading} />
            <VRuleGameObjective gameObjective={gameObjective} />
            <VRuleSetup setup={setup} />
            <VRuleBettingRounds bettingRounds={bettingRounds} />
            <VRuleHowToWin howToWin={howToWin} />
            <VRuleKeyStrategies keyStrategies={keyStrategies} />
            <VRuleHandWalkThrough handWalkthrough={handWalkthrough} />
            <VRuleConclusion conclusion={conclusion} />
        </>
    )
}
