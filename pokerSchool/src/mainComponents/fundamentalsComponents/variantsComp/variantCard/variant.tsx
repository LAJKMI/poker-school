import './variant.css'
import { Link } from 'react-router-dom'
import useSearchVariants from '../../../../hooks/useSearchVariants'
import useScrollToSection from '../../../../hooks/useScrollSection'


interface VariantCardProps {
    search: string
    btnType: "learn" | "practice"
}

export default function VariantCard({ search, btnType }: VariantCardProps) {
    const { filteredVariants, isLoading, isError, error } = useSearchVariants(search)
    useScrollToSection()

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
                            {btnType === "learn" ?
                                <Link to={`/variant/${variant.id}/#variantRulesLogo`}>
                                    <button className="variantLearn">Learn</button>
                                </Link> : <Link to={`/scenario/${variant.id}`}>
                                    <button className="variantPractice">Practice</button>
                                </Link>

                            }
                        </div>
                    </div>
                </div>
            })}
        </>
    )
}
