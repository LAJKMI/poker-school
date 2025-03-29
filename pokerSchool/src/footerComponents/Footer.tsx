import SectionHeading from "../assets/generalComponents/sectionHeadingComp/SectionHeading";
import { emailLink } from "../constants/constatns";
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <h2>Contact & Requests</h2>
            <div className="footerInfo">
                <SectionHeading heading="Hi, I'm David, the creator of this site!" />
                <p className="callToContact">I hope you're enjoying your experience and learning how to play. If you have any suggestions for new poker variants or would like to collaborate, feel free to reach out to me at <a href={emailLink} className="coloredWord" target="_blank" rel="noopener noreferrer">lajkmiwebsites@gmail.com</a>. I'd love to hear from you!</p>

                <p className="attribution">A huge thank you to <span className="coloredWord">Byron Knoll</span> for creating all the svg cards on this website. His work was an incredible help to me and saved me days of effort in making them myself. Check out more of his work at <a href="https://byronknoll.com" className="coloredWord" target="_blank" rel="noopener noreferrer">byronknoll.com</a>, and don't forget to visit his blog at <a href="https://byronknoll.blogspot.com" target="_blank" rel="noopener noreferrer" className="coloredWord">byronknoll.blogspot.com</a> for fun posts and updates.</p>
            </div>
            <p className="copyRight">© 2025 David Stojilovic. All rights reserved</p>
        </footer>
    )
}