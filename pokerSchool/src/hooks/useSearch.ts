import { useMemo } from "react"
import { useDebounce } from "use-debounce";



const useSearch = <T extends { [key: string]: any }>(
    data: T[] | undefined,
    keyName: string,
    search: string
) => {
    const processedData = useMemo(() => {
        return data?.map(entry => {
            return {
                ...entry,
                searchKey: `${entry[keyName]}`.toLowerCase().replace(/[\s.]+/g, "")
            }
        }) || []
    }, [data])
    const [searchTerm] = useDebounce(search, 200)
    const filteredData = processedData?.filter(entry => {
        return (
            entry.searchKey.includes(searchTerm.toLowerCase().replace(/[\s.]+/g, ""))
        )
    })

    return filteredData
}

export default useSearch