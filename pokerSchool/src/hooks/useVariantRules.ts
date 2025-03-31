import { useParams } from "react-router-dom"
import useData from "./useData"

export interface GameObjective {
    gameObjTitle: string,
    gameObjInfo: string,
}

interface SetupPartsObj {
    setupPartsTitle: string,
    setupPartsInfo: string
}

export interface Setup {
    setupTitle: string,
    setupInfo: string,
    setupParts: SetupPartsObj[]

}
interface BettingRoundsPartsObj {
    bettingRoundsPartsTitle: string,
    bettingRoundsPartsInfo: string
}

export interface BettingRounds {
    bettingRoundsTitle: string,
    bettingRoundsInfo: string,
    bettingRoundsParts: BettingRoundsPartsObj[]

}

export interface HowToWin {
    howToWinTitle: string
    howToWinInfo: string
    howToWinParts?: string[]
    howToWinEndNote?: string
}

interface KeyStrategiesPartsObj {
    keyStrategiesPartsTitle: string,
    keyStrategiesPartsInfo: string
}

export interface KeyStrategies {
    keyStrategiesTitle: string
    keyStrategiesInfo: string
    keyStrategiesParts: KeyStrategiesPartsObj[]
}

interface HandWalkthroughPartsInfoObj {
    handWalkthroughPartsInfoPtag: string[]
    handWalkthroughPartsInfoList?: string[]
    handWalkthroughPartsInfoEndNote: string

}

interface HandWalkthroughPartsObj {
    handWalkthroughPartsTitle: string
    handWalkthroughPartsInfo: HandWalkthroughPartsInfoObj
}

export interface HandWalkthrough {
    handWalkthroughTitle: string
    handWalkthroughInfo: string
    handWalkthroughParts: HandWalkthroughPartsObj[]
    handWalkthroughEndNote: string
}

export interface Conclusion {
    conclusionTitle: string
    conclusionInfo: string
}

export interface LearnVariant {
    id: string,
    img: string,
    heading: string,
    gameObjective: GameObjective
    setup: Setup
    bettingRounds: BettingRounds
    howToWin: HowToWin
    keyStrategies: KeyStrategies
    handWalkthrough: HandWalkthrough
    conclusion: Conclusion
}

const useVariantRules = () => {
    const { id } = useParams()
    const { data: variantsRules, isLoading, isError, error } = useData<LearnVariant>('learnVariant')
    const vRules = variantsRules?.find(v => v.id === id)

    return { vRules, isLoading, isError, error }

}

export default useVariantRules