import SectionHeading from "../assets/generalComponents/sectionHeadingComp/SectionHeading";
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <h2>Contact & Requests</h2>
            <div className="footerInfo">
                <SectionHeading heading="Hi, I'm David, the creator of this site!" />
                <p className="callToContact">I hope you're enjoying your experience and learning how to play. If you have any suggestions for new poker variants or would like to collaborate, feel free to reach out to me at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lajkmiwebsites@gmail.com&su=Poker Variant Request&body=Hello,%0A%0AI'd like to request a poker variant to be added to the site.%0A%0AThank you!" className="coloredWord" target="_blank" rel="noopener noreferrer">lajkmiwebsites@gmail.com</a>. I'd love to hear from you!</p>

                <p className="attribution">A huge thank you to <span className="coloredWord">Byron Knoll</span> for creating all the svg cards on this website. His work was an incredible help to me and saved me days of effort in making them myself. Check out more of his work at <a href="https://byronknoll.com" className="coloredWord" target="_blank" rel="noopener noreferrer">byronknoll.com</a>, and don't forget to visit his blog at <a href="https://byronknoll.blogspot.com" target="_blank" rel="noopener noreferrer" className="coloredWord">byronknoll.blogspot.com</a> for fun posts and updates.</p>
            </div>
            <p className="copyRight">© 2025 Lajkmi. All rights reserved</p>
        </footer>
    )
}