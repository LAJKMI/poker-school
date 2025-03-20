import Card from "../../../assets/generalComponents/cardComp/Card";
import CommonMistake from "../../../assets/generalComponents/commonMistake/CommonMistake";
import SectionHeading from "../../../assets/generalComponents/sectionHeadingComp/SectionHeading";

const cardColor = '#202127'

export default function FlowOfAHand() {
    return (
        <section className="FlowOfAHand">
            <SectionHeading heading="The Flow of a Poker Hand" info="Every poker hand follows the same structure, regardless of the variant:" />
            <div id="flow">
                <Card
                    bcgColor={cardColor}
                    heading="The Deal"
                    info="Players are dealt cards based on the game type. For example, in Texas Hold'em, each player receives two hole cards, while in Omaha, they get four."
                />
                <Card
                    bcgColor={cardColor}
                    heading="The First Betting Round"
                    info="The first betting round starts with the player left of the dealer, and players act in clockwise order. They can bet, call, fold, or check, depending on the situation."
                />
                <Card
                    bcgColor={cardColor}
                    heading="More Cards Are Revealed"
                    info="Depending on the variant, more cards are revealed in different stages, which can range from three to more cards being dealt at once."
                />
                <Card
                    bcgColor={cardColor}
                    heading="More Betting Rounds"
                    info="Every new set of revealed cards triggers a new betting round where players can fold, call, check or bet."
                />
                <Card
                    bcgColor={cardColor}
                    heading="The Showdown"
                    info="If two or more players remain after the final betting round, they reveal their hands. The best hand wins according to the game's rules. If a player bets and no one calls, they win automatically without revealing their hand."
                />
            </div>
            <CommonMistake firstMistake="Acting out of turn" secondMistake="Forgetting that each new set of community cards triggers a new betting round" />
        </section>
    )
}
