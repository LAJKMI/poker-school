import SectionHeading from "../../../assets/generalComponents/sectionHeadingComp/SectionHeading";
import './specialSituation.css'

export default function SpecialSituations() {
    return (
        <section className="specialSituation">
            <SectionHeading heading="Special Situations" />
            <div className="textBox" id="sidePots">
                <h4>Side Pots (When a Player is All-In)</h4>
                <ul>
                    <li>If a player bets all their chips but others continue betting, a side pot is created.</li>
                    <li>The all-in player can only win the main pot, not the side pot.</li>
                </ul>
            </div>
            <div className="textBox" id="splitPots">
                <h4>Split Pots</h4>
                <ul>
                    <li>Some poker variants, such as Omaha Hi-Lo, split the pot between the highest and lowest hands.</li>
                    <li>If two players have identical hands, they split the winnings equally.</li>
                </ul>
            </div>

        </section>
    )
}
