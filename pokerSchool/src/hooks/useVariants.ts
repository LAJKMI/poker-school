import useData from "./useData"

interface Variant {
    id: string
    img: string
    heading: string
    info: string
}

const useVariants = () => useData<Variant>('variants')

export default useVariants