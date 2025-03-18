import './hand.scss'

interface HandPorps {
    heading: string,
    headingText: string,
    imgLink: string
}

export default function Hand({ heading, headingText, imgLink }: HandPorps) {
    return (
        <div className="hand">
            <h4>{heading} <br />{headingText}</h4>
            <img src={imgLink} alt="Royal Flush" />
        </div>
    )
}
