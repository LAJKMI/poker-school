import { Link } from 'react-router-dom'
import './mobileHero.css'
import useScrollToSection from '../../../hooks/useScrollSection'

export default function MobileHeroComponent() {
    useScrollToSection()
    return (
        <header>
            <section id="hero">
                <div id="heroTextBox">
                    <h1>Master the rules of poker</h1>
                    <h2>start learning today</h2>
                    <Link to={'#variants'}><button id="pickAVariant">Pick A Variant</button></Link>
                    <Link to={'#handRankings'}><button id="completeBegginer">I am a compleate beginner</button></Link>
                </div>
            </section>
        </header>
    )
}
