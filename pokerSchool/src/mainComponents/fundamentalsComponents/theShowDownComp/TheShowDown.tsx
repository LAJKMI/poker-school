import CommonMistake from "../../../assets/generalComponents/commonMistake/CommonMistake";
import SectionHeading from "../../../assets/generalComponents/sectionHeadingComp/SectionHeading";
import './thShowdown.css'

export default function TheShowDown() {
    return (
        <section className="theShowDown">
            <SectionHeading heading=" The Showdown: Deciding the Winner" info="If multiple players are still in the hand after the last bet, they reveal their cards." />
            <ul>
                <li>The best  hand wins based on standard poker hand rankings.</li>
                <li>If there's a tie, the pot is split evenly between the tied players.</li>
                <li>If all but one player folds, the last remaining player wins the pot without showing their hand.</li>
            </ul>
            <CommonMistake firstMistake="Forgetting that each new set of community cards triggers a new betting round" />
        </section>
    )
}
