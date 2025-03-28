import './variant.css'
import { Link } from 'react-router-dom'
import useSearchVariants from '../../../../hooks/useSearchVariants'


interface VariantCardProps {
    search: string
}

export default function VariantCard({ search }: VariantCardProps) {
    const { filteredVariants, isLoading, isError, error } = useSearchVariants(search)

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {(error as Error).message}</div>

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
