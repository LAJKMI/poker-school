import Footer from "../footerComponents/Footer";
import MobileNavComponent from "../headerComponents/navCompFolder/MobileNavComponent";
import './variantRules.css'
import useVariantRules from "../hooks/useVariantRules";
import VRuleContent from "./variantRulesContent/VRuleContent";
// import RotatingSuits from "../mainComponents/fundamentalsComponents/fallingSuits/RotatingSuits";



export default function VariantRules() {
    const { vRules, isLoading, isError, error } = useVariantRules()

    if (isError) return <div>{(error as Error).message}</div>
    if (isLoading) return <div>Loading...</div>
    if (!vRules) return <div>this variant doesn't exist</div>

    return (
        <>
            <MobileNavComponent />
            <main id="variantRules">
                <VRuleContent learnVariant={vRules} />
                {/* <RotatingSuits /> mozda */}
            </main>
            <Footer />
        </>
    )
}
