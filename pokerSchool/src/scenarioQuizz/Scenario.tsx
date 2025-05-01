import { Link } from 'react-router-dom'
import navLogo from '../assets/pictures/pokerLogo.png'
import pokerTable from '../assets/pictures/pokerTable.png'
import './scenario.css'

export default function Scenario() {
    return (
        <>
            <header id="quizzHeader">
                <Link to={'/'}><img src={navLogo} alt="logo" /></Link>
                <Link to={'/'}>
                    <button>Go Home</button>
                </Link>
            </header>
            <div className="pokerTableContainer">
                <img src={pokerTable} alt="poker table" id='pokerTable' />
            </div>
            <div className="scenarioContainer">
                <div className="scenarioBox">
                    <p>scenario 1/15</p>
                    <p className='scenario'>You're on the button with King♥ Queen♥. A middle position player opens to $8 in a $1/$2 game. Everyone folds to you.</p>
                </div>
                <div className="choicesBox">
                    <div className="choice">
                        <input type="radio" name="fold" id="fold" />
                        <label htmlFor="fold">
                            Fold
                        </label>
                    </div>
                    <div className="choice">
                        <input type="radio" name="raise" id="raise" />
                        <label htmlFor="raise">
                            Raise
                        </label>
                    </div>
                    <div className="choice">
                        <input type="radio" name="check" id="check" />
                        <label htmlFor="check">
                            Check
                        </label>
                    </div>
                </div>
            </div>
            <div className="btnBox">
                <button className="nextScenario">
                    Next
                </button>
            </div>
        </>
    )
}
