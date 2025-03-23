import './variant.css'
import useVariants from '../../../../hooks/useVariants'




export default function VariantCard() {
    const { data: variants, isLoading, isError, error } = useVariants()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {(error as Error).message}</div>



    return (
        <>
            {variants?.map(variant => {

                return <div className="variantBox" key={variant.id}>
                    <img src={variant.img} className={variant.heading[0]} alt="" />
                    <div className="variant">

                        <div className="variantInfoBox">
                            <h4 className="variantHeading">{variant.heading}</h4>
                            <p className="variantInfo"> {variant.info}</p>
                            <button className="variantLearn">Learn</button>
                        </div>
                    </div>
                </div>
            })}
        </>
    )
}
