import './roleOfADealer.css'
import SectionHeading from "../../../assets/generalComponents/sectionHeadingComp/SectionHeading";
import CommonMistake from '../../../assets/generalComponents/commonMistake/CommonMistake';

export default function RoleOfADealer() {
    return (
        <section className="roleOfADealer">
            <SectionHeading
                heading="The Role of the Dealer Button"
                info="In most poker games, a dealer button is used to indicate which player is in the dealer position for that hand"
            />
            <ul>
                <li>In flop games like Hold'em and Omaha, the player to the left of the dealer posts the small blind, and the next player posts the big blind.</li>
                <li>The dealer position is the strongest because they act last in each betting round.</li>
                <li>After each hand, the dealer button moves one seat to the left, ensuring that everyone takes turns playing in each position.</li>
            </ul>
            <CommonMistake firstMistake='Forgetting that the button moves every hand.' />
        </section>
    )
}
