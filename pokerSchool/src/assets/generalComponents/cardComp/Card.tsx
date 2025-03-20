import './card.css'

interface CardProps {
    heading: string
    info: string
    bcgColor?: string
}

export default function Card({ heading, info, bcgColor }: CardProps) {
    return (
        <div id="cardContainer" style={{ backgroundColor: bcgColor }}>
            <h4 id="cardHeading">{heading}</h4>
            <p id="cardInfo">{info}</p>
        </div>
    )
}
