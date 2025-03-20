import BettingRules from "./fundamentalsComponents/bettingRulesComp/BettingRules";
import FlowOfAHand from "./fundamentalsComponents/flowOfTheHandComp/FlowOfAHand";
import HandRankings from "./fundamentalsComponents/handRankingsComp/HandRankings";
import MobileHeroComponent from "./fundamentalsComponents/heroPageCompFolder/MobileHeroComponent";
import RoleOfADealer from "./fundamentalsComponents/roleOfADealerComp/RoleOfADealer";

export default function MainContent() {
    return (
        <main>
            <MobileHeroComponent />
            <HandRankings />
            <BettingRules />
            <FlowOfAHand />
            <RoleOfADealer />
        </main>
    )
}
