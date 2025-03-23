import SearchBar from '../../../assets/searchBarComp/SearchBar'
import './varants.css'
import VariantCard from './variantCard/variant'

export default function Variants() {
    return (
        <section className="variants">
            <h2 id='variantsHeading'>Poker Variants</h2>
            <SearchBar />
            <div id="variantContainer">
                <VariantCard />
            </div>
        </section>
    )
}
