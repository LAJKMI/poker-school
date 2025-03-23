
const suits = ['♥', '♦', '♣', '♠', '♥', '♦', '♣', '♠']

export default function RotatingSuit() {
    return (
        <div className="suits">
            {suits.map((_, index) => {
                const randomNum = Math.floor(Math.random() * suits.length)
                return <div
                    key={index}
                    className="suit"

                >{suits[randomNum]}</div>
            })}
        </div>
    )
}
