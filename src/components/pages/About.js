import React from 'react';
import './about.css';
import profilePic from '../../images/big-sky.png'

const About = () => {
    return (
        <div >
            <div style={{ backgroundImage: `url(${require("../../images/background-color.png")})` }}>

                < div className="about-container" >
                    <div className="about-child">
                        <h1 className="name">Jack McNary</h1>
                        <h2 className="title">Technical Account Manager</h2>
                        <div className="paragraph">
                            I am a Technical Account Manager at Straker Translations, a leading language-service provider (LSP). I'm currently taking a coding bootcamp through the University of Denver, with the aim of using these skills to further my professional career, though that's not necessarily through coding, per se!
                            <p>I thoroughly enjoy my current position at Straker, where I feel I am highly valued for my ability to solve problems, think critically and act decisively, especially in situations where not all the key pieces of information are available. I act as a liaison between our production/development teams and the client, and my main goal in learning coding is to be able to speak "developer" in addition to the other languages, Spanish and Portuguese, that I have learned through previous studies.</p>
                        </div>
                    </div>
                    <div className='about-child'>
                        <img src={profilePic} alt='sick af'></img>
                    </div>
                </div >
            </div >
        </div >
    );
}


export default About