import Footer from "../footerComponents/Footer";
import BettingRules from "./fundamentalsComponents/bettingRulesComp/BettingRules";
import FlowOfAHand from "./fundamentalsComponents/flowOfTheHandComp/FlowOfAHand";
import HandRankings from "./fundamentalsComponents/handRankingsComp/HandRankings";
import MobileHeroComponent from "./fundamentalsComponents/heroPageCompFolder/MobileHeroComponent";
import RoleOfADealer from "./fundamentalsComponents/roleOfADealerComp/RoleOfADealer";
import SpecialSituations from "./fundamentalsComponents/specialSituationsComp/SpecialSituations";
import TheShowDown from "./fundamentalsComponents/theShowDownComp/TheShowDown";
import Variants from "./fundamentalsComponents/variantsComp/Variants";

export default function MainContent() {
    return (
        <main>
            <MobileHeroComponent />
            <HandRankings />
            <BettingRules />
            <FlowOfAHand />
            <RoleOfADealer />
            <TheShowDown />
            <SpecialSituations />
            <Variants btnType="learn" />
            <Footer />
        </main>
    )
}
