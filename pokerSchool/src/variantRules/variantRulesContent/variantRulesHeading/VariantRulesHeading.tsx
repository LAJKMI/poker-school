import './variantRulesHeading.css'

interface VariantRulesHeadingProps {
    img: string
    heading: string
}

export default function VariantRulesHeading({ img, heading }: VariantRulesHeadingProps) {
    return (
        <>
            <img src={img} id="variantRulesLogo" alt="variant logo" />
            <h1 id="variantRulesHeading">{heading}</h1>
        </>
    )
}
