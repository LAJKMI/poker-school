import { useState } from 'react'
import SearchBar from '../../../assets/generalComponents/searchBarComp/SearchBar'
import './varants.css'
import VariantCard from './variantCard/variant'

export default function Variants() {
    const [search, setSearch] = useState('')
    return (
        <section className="variants">
            <h2 id='variantsHeading'>Poker Variants</h2>
            <SearchBar setSearch={setSearch} />
            <div id="variantContainer">
                <VariantCard search={search} />
            </div>
        </section>
    )
}
