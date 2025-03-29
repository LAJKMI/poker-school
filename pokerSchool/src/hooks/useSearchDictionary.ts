// import useSearch from "./useSearch";
import { useDebounce } from "use-debounce";
import useDictionary from "./useDictionary";
import { useMemo } from "react";


const useSearchDictionary = (search: string) => {
    const { data: dictionary, isLoading, isError, error } = useDictionary()
    const [searchTerm] = useDebounce(search, 200)

    const processedDictionary = useMemo(() => {
        return dictionary?.map(entry => ({
            ...entry,
            termInfo: entry.termInfo.map(term => ({
                ...term,
                searchKey: term.term.toLowerCase().replace(/[\s.]+/g, ""),
            }))
        }))
    }, [dictionary])

    const filteredDictionary = useMemo(() => {
        return processedDictionary?.map(entry => ({
            ...entry,
            termInfo: entry.termInfo?.filter(term =>
                term.searchKey.includes(searchTerm.toLowerCase().replace(/[\s.]+/g, ""))
            )
        }));
    }, [searchTerm, processedDictionary]);


    return { filteredDictionary, isLoading, isError, error }

}



export default useSearchDictionary