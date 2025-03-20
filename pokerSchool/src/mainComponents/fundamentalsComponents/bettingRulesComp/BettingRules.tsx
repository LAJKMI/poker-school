import './bettingRules.css'
import SectionHeading from "../../../assets/generalComponents/sectionHeadingComp/SectionHeading";
import Card from '../../../assets/generalComponents/cardComp/Card';
import CommonMistake from '../../../assets/generalComponents/commonMistake/CommonMistake';



export default function BettingRules() {
    return (
        <section className="BettingRules">
            <SectionHeading
                heading="Betting Rules: What Can You Do?"
                info="Every poker game allows the same four actions during a betting round:"
            />
            <div id="rules">
                <Card
                    heading='Fold'
                    info='Give up the hand and lose any money already bet.'
                />
                <Card
                    heading='Check'
                    info='Pass the action without betting (only if no bet has been made).'
                />
                <Card
                    heading='Call'
                    info='Match the current highest bet to stay in the hand.'
                />
                <Card
                    heading='Raise'
                    info='Increase the bet, forcing others to match or fold.'
                />
            </div>
            <CommonMistake
                firstMistake="Trying to check when there's already a bet. If another player has bet, you must call, raise, or fold instead."
                secondMistake='Not understanding minimum raises. In Limit games, raises are fixed. In No-Limit games, raises must be at least double the previous bet.'
            />

        </section>
    )
}
