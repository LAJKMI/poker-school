import './notFound.css'

import { Link } from "react-router-dom";
import MobileNavComponent from "../headerComponents/navCompFolder/MobileNavComponent";
import Footer from "../footerComponents/Footer";
import { emailLink } from '../constants/constatns';

export default function NotFoundPage() {
    return (
        <>
            <MobileNavComponent />
            <main id="notfound">
                <h1>
                    Sorry... <br /> this page doesn't exist. If you were looking for a specific poker variant to learn, send me an email at <br />
                    <a id='mailLink' href={emailLink} target="_blank" rel="noopener noreferrer">
                        lajkmiwebsites@gmail.com
                    </a>
                    , and I will add it!
                </h1>
                <div className="notFoundButtons">
                    <Link to={'/'}>
                        <button className="goHome">Go Home</button>
                    </Link>
                    <a href={emailLink} target="_blank" rel="noopener noreferrer">
                        <button className="requestVariant">Request a Variant</button>
                    </a>
                </div>
            </main>
            <Footer />
        </>

    )
}

//https://mail.google.com/mail/?view=cm&fs=1&to=lajkmiwebsites@gmail.com&su=Poker Variant Request&body=Hello,%0A%0AI'd like to request a poker variant to be added to the site.%0A%0AThank you!