// import the footer css, linkedin and github
import './footer.css';
import gitHubIcon from '../images/GitHub-Logo.png'
import linkedInIcon from '../images/linkedIn-iCon.png'
import youtubeIcon from '../images/youdoob.png'


export const Footer = () => {
    return (
        <footer className="footer-container">

            <li><a href="https://github.com/mcnaryj" target="_blank" rel="noreferrer">
                <img src={gitHubIcon} alt="Github thumbnail" className='first-third-icon' />
            </a></li>
            <li><a href="https://www.linkedin.com/in/jack-mcnary-853861aa/" target="_blank" rel="noreferrer">
                <img src={linkedInIcon} alt="Github thumbnail" className='icon' />
            </a></li>
            <li><a href="https://www.youtube.com/channel/UCN4JUUhjl84gPg2Iqx-Oacg" target="_blank" rel="norefferer noreferrer">
                <img src={youtubeIcon} alt="youdoobigon" className='first-third-icon' />
            </a></li>
        </footer>
    )
    // div with the classname pertaining to the footer
    // icons, I guess, with an anchor tag to the github, resume and linkedin
    // closing tags for these
}
export default Footer;
// export default Footer