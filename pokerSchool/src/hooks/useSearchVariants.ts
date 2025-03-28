import useSearch from "./useSearch"
import useVariants from "./useVariants"

const useSearchVariants = (search: string) => {
    const { data: variants, isLoading, isError, error } = useVariants()
    const filteredVariants = useSearch(variants, 'heading', search)

    return { filteredVariants, isLoading, isError, error }
}

export default useSearchVariants