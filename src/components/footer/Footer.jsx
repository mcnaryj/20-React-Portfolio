// import the footer css, linkedin and github

export const Footer = () => {
    <div className="footer">
        <a href="github.jack" target="_blank">
            <img src={githubImg} alt="Github" className="footImgClass" />
        </a>
        <a href="resume" target="_blank">
            <img src={resume} alt="MyResume" className="footImgClass" />
        </a>
        <a href="{linkedin}" target="_blank">
            <img src={linkedin} alt="LinkedIn" className="footImgClass" />
        </a>
    </div>
    // div with the classname pertaining to the footer
    // icons, I guess, with an anchor tag to the github, resume and linkedin
    // closing tags for these
}
// export default Footer