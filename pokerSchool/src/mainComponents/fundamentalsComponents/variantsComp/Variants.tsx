import './varants.css'
import VariantCard from './variantCard/VariantCard'

export default function Variants() {
    return (
        <section className="variants">
            <h2 id='variantsHeading'>Poker Variants</h2>
            <div id="variantContainer">
                <VariantCard />
                <VariantCard />
                <VariantCard />
                <VariantCard />
            </div>
        </section>
    )
}
