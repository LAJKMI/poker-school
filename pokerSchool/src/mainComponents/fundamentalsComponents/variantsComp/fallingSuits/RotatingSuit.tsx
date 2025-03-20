import { motion } from "motion/react"

const suits = ['♥', '♦', '♣', '♠', '♥', '♦', '♣', '♠']

export default function RotatingSuit() {
    return (
        <div className="suits">
            {suits.map((_, index) => {
                const randomNum = Math.floor(Math.random() * suits.length)
                return <motion.div
                    key={index}
                    className="suit"
                    animate={{
                        rotate: index % 2 ? 360 : -360,
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                    }}
                >{suits[randomNum]}</motion.div>
            })}
        </div>
    )
}
