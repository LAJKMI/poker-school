import CommonMistake from "../../../assets/generalComponents/commonMistake/CommonMistake"
import pokerHands from "../../../assets/pictures/handsPictures/hands"
import Hand from "./handComp/Hand"
import './handRanking.css'

export default function HandRankings() {
    return (
        <>
            <h2>Poker Fundamentals: <br /> Universal Rules for All Variants</h2>
            <section id="handRankings">
                <h3>Understanding Poker Hand Rankings</h3>
                <p className="introduction">All poker games are won by making the best five-card hand (except in special cases like Lowball). Below is the standard hand ranking, from strongest to weakest:</p>
                <div className="hands">
                    <Hand
                        heading="1. Royal Flush"
                        headingText="A straight from ten to ace, all in the same suit"
                        imgLink={pokerHands.royalFlush}
                    />
                    <Hand
                        heading="2. Straight Flush "
                        headingText="Any five consecutive cards of the same suit"
                        imgLink={pokerHands.straightFlush}
                    />
                    <Hand
                        heading="3. Four of a Kind "
                        headingText="Four matching cards"
                        imgLink={pokerHands.fourOfAKind}
                    />
                    <Hand
                        heading="4. Full House "
                        headingText="Three of a kind plus a pair"
                        imgLink={pokerHands.fullHouse}
                    />
                    <Hand
                        heading="5. Flush"
                        headingText="Any five cards of the same suit, not in sequence"
                        imgLink={pokerHands.flush}
                    />
                    <Hand
                        heading="6. Straight"
                        headingText="Five consecutive cards of different suits"
                        imgLink={pokerHands.straight}
                    />
                    <Hand
                        heading="7. Three of a Kind "
                        headingText="Three matching cards"
                        imgLink={pokerHands.threeOfAKind}
                    />
                    <Hand
                        heading="8. Two Pair"
                        headingText="Two pairs of matching cards"
                        imgLink={pokerHands.twoPair}
                    />
                    <Hand
                        heading="9. One Pair "
                        headingText="One pair of matching cards"
                        imgLink={pokerHands.pair}
                    />
                    <Hand
                        heading="10. High Card "
                        headingText="if no one has anything from above the highest single card wins"
                        imgLink={pokerHands.highCard}
                    />

                </div>
                <CommonMistake
                    firstMistake='Thinking a "wraparound" straight is valid. A hand like Q-K-A-2-3 is not a straight.'
                    secondMistake="Forgetting to use exactly five cards. In games like Omaha, players must use exactly two hole cards and three community cards."
                />

            </section>
        </>
    )
}
