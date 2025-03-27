import './variant.css'
import useVariants from '../../../../hooks/useVariants'
import { Link } from 'react-router-dom'


interface VariantCardProps {
    search: string
}

export default function VariantCard({ search }: VariantCardProps) {
    const { data: variants, isLoading, isError, error } = useVariants()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {(error as Error).message}</div>

    const filteredVariants = variants?.filter(variant => {
        const moddedHeading = variant.heading.replace(/[\s.]+/g, "").toLowerCase()
        const moddedSearch = search.replace(/[\s.]+/g, "").toLowerCase()
        return (
            moddedHeading.includes(moddedSearch)
        )
    })



    return (
        <>
            {filteredVariants?.map(variant => {

                return <div className="variantBox" key={variant.id}>
                    <img src={variant.img} className={variant.id} alt="" />
                    <div className="variant">

                        <div className="variantInfoBox">
                            <h4 className="variantHeading">{variant.heading}</h4>
                            <p className="variantInfo"> {variant.info}</p>
                            <Link to={`/variant/${variant.id}`}>
                                <button className="variantLearn">Learn</button>
                            </Link>
                        </div>
                    </div>
                </div>
            })}
        </>
    )
}
