import { useEffect, useState } from 'react'
import './variant.css'
import axios from 'axios'

interface variant {
    id: number
    img: string
    heading: string
    info: string
}


export default function VariantCard() {
    const [variants, setVariants] = useState<variant[]>()

    useEffect(() => {
        const fetchVariants = async () => {
            try {
                const res = await axios.get<variant[]>('/data/variants.JSON')
                setVariants(res.data)
            } catch (error) {
                console.log(error);

            }
        }

        fetchVariants()
    }, [])


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
