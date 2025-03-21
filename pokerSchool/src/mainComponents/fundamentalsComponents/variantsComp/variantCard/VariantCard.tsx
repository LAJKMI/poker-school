import './variant.css'
import pineappleLogo from '../../../../assets/pictures/variantPictures/pineappleLogo.png'

export default function VariantCard() {
    return (
        <div className="variantBox">
            <img src={pineappleLogo} alt="" />
            <div className="variant">

                <div className="variantInfoBox">
                    <h4 className="variantHeading">Pineapple</h4>
                    <p className="variantInfo"> is a unique poker variant where players are dealt three hole cards but must discard one after the flop. This twist adds extra <span>strategy</span> and <span>excitement</span>, keeping you on your toes with every hand.</p>
                    <button className="variantLearn">Learn</button>
                </div>
            </div>
        </div>
    )
}
