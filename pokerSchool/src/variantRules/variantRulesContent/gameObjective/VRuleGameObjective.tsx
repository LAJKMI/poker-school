import { GameObjective } from "../../../hooks/useVariantRules"
import './vRuleGameObjective.css'

interface GameObjectiveProps {
    gameObjective: GameObjective
}

export default function VRuleGameObjective({ gameObjective }: GameObjectiveProps) {
    return (
        <section className="gameObjective">
            <h2 className="head">{gameObjective.gameObjTitle}</h2>
            <p className="info">{gameObjective.gameObjInfo}</p>
        </section>
    )
}
