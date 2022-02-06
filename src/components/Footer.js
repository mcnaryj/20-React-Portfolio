// import the footer css, linkedin and github
import './footer.css';

export const Footer = () => {
    return (
        <footer className="footer-container">

            <li><a href="https://github.com/mcnaryj" target="_blank" rel="noreferrer">
                Github</a></li>
            <li><a href="https://www.linkedin.com/in/jack-mcnary-853861aa/" target="_blank" rel="noreferrer">
                LinkedIn
            </a></li>
            <li>303-514-6087 / jack.mcnary@gmail.com</li>
        </footer>
    )
    // div with the classname pertaining to the footer
    // icons, I guess, with an anchor tag to the github, resume and linkedin
    // closing tags for these
}
export default Footer;
// export default Footer