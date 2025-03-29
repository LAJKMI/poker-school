import { useState } from "react";
import SearchBar from "../assets/generalComponents/searchBarComp/SearchBar";
import Footer from "../footerComponents/Footer";
import MobileNavComponent from "../headerComponents/navCompFolder/MobileNavComponent";
import './dictionary.css'
import useSearchDictionary from "../hooks/useSearchDictionary";

export default function Dictionary() {
    const [search, setSearch] = useState('')
    const { filteredDictionary, isLoading, isError, error } = useSearchDictionary(search)

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {(error as Error).message}</div>

    return (
        <>
            <MobileNavComponent />
            <main id="dictionary">
                <h1>Poker Dictionary </h1>
                <SearchBar id="dictionarySearch" setSearch={setSearch} />
                <div id="terms">
                    {filteredDictionary?.map(entry => {
                        return <div className="termBox" key={entry.letterId}>
                            {/* <h2 className="letter">{entry.letter}</h2> */}
                            {entry.termInfo.length === 0 ? '' : <h2 className="letter">{entry.letter}</h2>}
                            {entry.termInfo?.map(item => {
                                return <div key={item.termId}>
                                    <p className="explenation" > <span className="term" >{item.term}:</span>{item.explanation}</p> <hr />
                                </div>
                            })}
                        </div>
                    })}

                </div>
            </main>
            <Footer />
        </>
    )
}
