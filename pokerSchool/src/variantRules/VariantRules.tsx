import Footer from "../footerComponents/Footer";
import MobileNavComponent from "../headerComponents/navCompFolder/MobileNavComponent";
import './variantRules.css'
import SectionHeading from "../assets/generalComponents/sectionHeadingComp/SectionHeading";
import useData from "../hooks/useData";

interface GameObjective {
    gameObjTitle: string,
    gameObjInfo: string,
}

interface SetupPartsObj {
    setupPartsTitle: string,
    setupPartsInfo: string
}

interface Setup {
    setupTitle: string,
    setupInfo: string,
    setupParts: SetupPartsObj[]

}
interface BettingRoundsPartsObj {
    bettingRoundsPartsTitle: string,
    bettingRoundsPartsInfo: string
}

interface BettingRounds {
    bettingRoundsTitle: string,
    bettingRoundsInfo: string,
    bettingRoundsParts: BettingRoundsPartsObj[]

}

interface HowToWin {
    howToWinTitle: string
    howToWinInfo: string
    howToWinParts?: string[]
    howToWinEndNote?: string
}

interface KeyStrategiesPartsObj {
    keyStrategiesPartsTitle: string,
    keyStrategiesPartsInfo: string
}

interface KeyStrategies {
    keyStrategiesTitle: string
    keyStrategiesInfo: string
    keyStrategiesParts: KeyStrategiesPartsObj[]
}

interface HandWalkthroughPartsInfoObj {
    handWalkthroughPartsInfoPtag: string[]
    handWalkthroughPartsInfoList: string[]
    handWalkthroughPartsInfoEndNote: string

}

interface HandWalkthroughPartsObj {
    handWalkthroughPartsTitle: string
    handWalkthroughPartsInfo: HandWalkthroughPartsInfoObj
}

interface HandWalkthrough {
    handWalkthroughTitle: string
    handWalkthroughInfo: string
    handWalkthroughParts: HandWalkthroughPartsObj[]
    handWalkthroughEndNote: string
}

interface Conclusion {
    conclusionTitle: string
    conclusionInfo: string
}

interface LearnVariant {
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

export default function VariantRules() {
    // const { data: variantsRules, isLoading, isError, error } = useData<LearnVariant>('learnVariant')

    // if (isLoading) return <div>Loading...</div>
    // if (isError) return <div>Error: {(error as Error).message}</div>
    return (
        <>
            <MobileNavComponent />

            {/* <main id="variantRules">
                {variantsRules?.map(variantRules => (
                    <div key={variantRules.id}>
                        <img src={variantRules.img} alt="variant logo" />
                        <h1>{variantRules.heading}</h1>
                        <section className="gameObjective">
                            <h2 className="head">{variantRules.gameObjective.gameObjTitle}</h2>
                            <p className="info">{variantRules.gameObjective.gameObjInfo}</p>
                        </section>
                        <section className="setup">
                            <h2 className="head">{variantRules.setup.setupTitle}</h2>
                            <p className="info">{variantRules.setup.setupInfo}</p>
                            {variantRules.setup.setupParts.map(setupPart => (
                                <SectionHeading key={`${variantRules.id}-${setupPart.setupPartsTitle}`} heading={setupPart.setupPartsTitle} info={setupPart.setupPartsInfo} />
                            ))}
                        </section>
                        <section className="bettingRounds">
                            <h2 className="head">{variantRules.bettingRounds.bettingRoundsTitle}</h2>
                            <p className="info">{variantRules.bettingRounds.bettingRoundsInfo}</p>
                            {variantRules.bettingRounds.bettingRoundsParts.map(bettingRoundPart => (
                                <SectionHeading key={`${variantRules.id}-${bettingRoundPart.bettingRoundsPartsTitle}`} heading={bettingRoundPart.bettingRoundsPartsTitle} info={bettingRoundPart.bettingRoundsPartsInfo} />
                            ))}
                        </section>
                        <section className="howToWin">
                            <h2 className="head">{variantRules.howToWin.howToWinTitle}</h2>
                            <p className="info">{variantRules.howToWin.howToWinInfo}</p>
                            <ol>
                                {variantRules.howToWin.howToWinParts.map(howToWinPart => (
                                    <li key={`${variantRules.id}-${howToWinPart}`}>{howToWinPart}</li>
                                ))}
                            </ol>
                            <p>{variantRules.howToWin.howToWinEndNote}</p>
                        </section>
                        <section className="KeyStrategies">
                            <h2 className="head">{variantRules.keyStrategies.keyStrategiesTitle}</h2>
                            <p className="info">{variantRules.keyStrategies.keyStrategiesInfo}</p>
                            {variantRules.keyStrategies.keyStrategiesParts.map(keyStrategyPart => (
                                <SectionHeading key={`${variantRules.id}-${keyStrategyPart.keyStrategiesPartsTitle}`} heading={keyStrategyPart.keyStrategiesPartsTitle} info={keyStrategyPart.keyStrategiesPartsInfo} />
                            ))}
                        </section>
                        <section className="handWalkthrough">
                            <h2 className="head">{variantRules.handWalkthrough.handWalkthroughTitle}</h2>
                            <p className="info">{variantRules.handWalkthrough.handWalkthroughInfo}</p>
                            {variantRules.handWalkthrough.handWalkthroughParts.map(handWalkThroughPart => (
                                <div className="handFase" key={`${variantRules.id}-${handWalkThroughPart.handWalkthroughPartsTitle}`}>
                                    <h3>{handWalkThroughPart.handWalkthroughPartsTitle}</h3>
                                    {handWalkThroughPart.handWalkthroughPartsInfo.handWalkthroughPartsInfoPtag.map(Ptag => (
                                        <p key={`${variantRules.id}-${Ptag}`}>{Ptag}</p>
                                    ))}
                                    <ul>
                                        {handWalkThroughPart.handWalkthroughPartsInfo.handWalkthroughPartsInfoList.map(listItem => (
                                            <li key={`${variantRules.id}-${listItem}`}>{listItem}</li>
                                        ))}
                                    </ul>
                                    <p className="pot">{handWalkThroughPart.handWalkthroughPartsInfo.handWalkthroughPartsInfoEndNote}</p>
                                </div>
                            ))}
                            <p>{variantRules.handWalkthrough.handWalkthroughEndNote}</p>

                        </section>
                        <section className="conclusion">
                            <h2 className="head">{variantRules.conclusion.conclusionTitle}</h2>
                            <p className="info">{variantRules.conclusion.conclusionInfo}</p>
                            <p>Ready to test your knowledge? </br> Take our quiz on the rules  and sharpen your understanding!</p>
                            <p>Ready Want to improve your skills? </br> Try our hand scenarios and practice making the best decisions!</p>
                            <div className="learnVariantBtns">
                                <button className="quizz">Take The Quizz</button>
                                <button className="practice">Practice</button>
                            </div>
                        </section>
                    </div>
                ))}
            </main> */}
            <Footer />
        </>
    )
}
