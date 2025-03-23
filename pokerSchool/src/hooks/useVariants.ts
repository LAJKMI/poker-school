import useData from "./useData"

interface Variant {
    id: number
    img: string
    heading: string
    info: string
}

const useVariants = () => useData<Variant>('variants')

export default useVariants