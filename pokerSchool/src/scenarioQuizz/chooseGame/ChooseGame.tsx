import Footer from "../../footerComponents/Footer";
import MobileNavComponent from "../../headerComponents/navCompFolder/MobileNavComponent";
import Variants from "../../mainComponents/fundamentalsComponents/variantsComp/Variants";
import "./chooseGame.css"

export default function ChooseGame() {
    return (
        <>
            <MobileNavComponent />
            <main id="chooseGameMain">
                <h1>Pick a game to practice</h1>
                <Variants btnType="practice" />
            </main>
            <Footer />
        </>
    )
}
