import useData from "./useData";

interface termInfo {
    term: string
    termId: string
    explanation: string
}

interface Letter {
    letter: string
    letterId: string
    termInfo: termInfo[]

}

const useDictionary = () => useData<Letter>('pokerTerms')

export default useDictionary