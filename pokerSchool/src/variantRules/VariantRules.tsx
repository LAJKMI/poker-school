import Footer from "../footerComponents/Footer";
import MobileNavComponent from "../headerComponents/navCompFolder/MobileNavComponent";
import th from '../../public/variantPictures/texasHoldm.png'
import './variantRules.css'
import SectionHeading from "../assets/generalComponents/sectionHeadingComp/SectionHeading";

export default function VariantRules() {
    return (
        <>
            <MobileNavComponent />
            <main id="variantRules">
                <img src={th} alt="" />
                <h1>Welcome To Texas Hold'em </h1>
                <section className="gameObjective">
                    <h2 className="head">Objective of the Game</h2>
                    <p className="info">The goal of Texas Hold'em is simple: Make the best five-card hand using any combination of the two private hole cards dealt to you and the five community cards that are shared by all players.
                        Texas Hold'em is a community card game, meaning that everyone shares the same set of community cards, but each player also has their own unique hole cards. The player with the best five-card hand (based on poker hand rankings) wins the pot.</p>
                </section>
                <section className="setup">
                    <h2 className="head">The Setup</h2>
                    <p className="info">Before we dive into gameplay, let's take a look at the setup.</p>
                    <SectionHeading heading="Players" info="Texas Hold'em can be played with 2 to 10 players." />

                    <SectionHeading heading="Deck" info="52 cards are used (no jokers or wild cards)." />

                    <SectionHeading heading="Blinds" info="In Texas Hold'em, there are two forced bets: the small blind and the big blind. These bets are made before the cards are even dealt and are designed to create action. Small Blind: The player to the left of the dealer posts this bet (usually half of the big blind). Big Blind: The player two seats to the left of the dealer posts this bet (usually the standard betting amount).  These forced bets ensure that there's always something to play for, even before players start betting." />

                    <SectionHeading heading="Dealer Button" info="The dealer button rotates clockwise around the table after each hand. This determines which player is the dealer for that hand, as well as who posts the blinds. In casino play, the dealer is usually a non-playing staff member, but in home games, the button moves to each player." />

                    <SectionHeading heading="Dealing the Cards" info="Dealing in texas hold'em happends  pre-flop meaining before any comunity cards are dealt The dealer shuffles the deck and deals two hole cards face down to each player.Players can look at their own hole cards but should keep them hidden from others. The player to the left of the big blind starts the first betting round (pre-flop).." />
                </section>
                <section className="bettingRounds">
                    <h2 className="head">Betting Rounds</h2>
                    <p className="info">There are four betting rounds in Texas Hold'em: Pre-flop, Post-flop, Post-turn, and Post-river. Let's break down each one.</p>
                    <SectionHeading heading="Pre-Flop Betting" info="After everyone receives their two hole cards, the first betting round begins with the player to the left of the big blind.The player can fold, call, or raise.
                    Fold: Discard your hand and stop participating in the current hand.
                    Call: Match the current bet (equal to the big blind if no raises have occurred).Raise: Increase the size of the current bet.
                    This continues clockwise around the table until everyone has had a chance to act." />

                    <SectionHeading heading="Post-Flop Betting" info="After the pre-flop round is complete, the dealer deals three community cards face-up in the center of the table. These cards are called the flop.
                    A new round of betting begins with the player to the left of the dealer. This time, players can bet on the strength of their hand based on the community cards.Players can bet, check (if no one has bet), or raise." />

                    <SectionHeading heading="Post-Turn Betting" info="After the flop, the dealer adds a fourth community card called the turn.Another round of betting takes place, again starting with the player to the left of the dealer.Players now have four community cards to use in combination with their hole cards to make their hand." />

                    <SectionHeading heading="Post-River Betting" info="Finally, the dealer places the fifth and last community card called the river.
                    The last betting round takes place, with the player to the left of the dealer once again beginning the betting." />

                    <SectionHeading heading="The Showdown" info="After the final betting round (post-river), if there are two or more players left in the hand, the showdown occurs. Players reveal their hole cards, and the best five-card hand is determined by combining the hole cards and community cards." />
                </section>
            </main>
            <Footer />
        </>
    )
}
