import { useState } from 'react'
import SearchBar from '../../../assets/generalComponents/searchBarComp/SearchBar'
import './varants.css'
import VariantCard from './variantCard/variant'

interface VariantsProps {
    btnType: "learn" | "practice"
}

export default function Variants({ btnType }: VariantsProps) {
    const [search, setSearch] = useState('')
    const learnClass = btnType === "learn" ? "learnVariants" : ''
    return (
        <section className={`variants ${learnClass}`} id='variants'>
            {btnType === "learn" && <h2 id='variantsHeading'>Poker Variants</h2>}
            <SearchBar setSearch={setSearch} />
            <div id="variantContainer">
                <VariantCard btnType={btnType} search={search} />
            </div>
        </section>
    )
}
