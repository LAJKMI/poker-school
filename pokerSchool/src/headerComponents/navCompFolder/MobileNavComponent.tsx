import './nvaComponent.css'
import navLogo from '../../assets/pictures/pokerLogo.png'
import { AnimatePresence, motion } from "motion/react"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollToSection from '../../hooks/useScrollSection'


export default function MobileNavComponent() {
    const [isOpen, setIsOpen] = useState(false)
    useScrollToSection()
    return (
        <>
            <nav id='normalNav'>
                <Link to={'/'}><img src={navLogo} alt="logo" ></img></Link>

                <svg onClick={() => setIsOpen(true)} id='burgerSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#E19E41" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="#E19E41" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="#E19E41" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
            </nav>
            <AnimatePresence>
                {isOpen && <motion.nav
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    id='burgerMenu'>
                    <svg onClick={() => setIsOpen(false)} id='xSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="200" y1="56" x2="56" y2="200" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="200" y1="200" x2="56" y2="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                    <div id="mobileNav">
                        <Link to={'/'}><img src={navLogo} alt="logo"></img></Link>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/#variants"}>Variants</Link></li>
                            <li><Link to={"/dictionary"}>Dictionary</Link></li>
                            <li>
                                <button id="practiceBtn">Practice</button>
                            </li>
                        </ul>
                    </div>
                </motion.nav>}
            </AnimatePresence>
        </>
    )
}
