import React from 'react';

const About = () => {
    return (
        <div>
            <div className="left-side">
                <div className="myName">Jack McNary</div>
                <div className="jobTitle">Technical Account Manager</div>
                <div className="aboutMe">
                    I am a Technical Account Manager at Straker Translations, a leading language-service provider (LSP). I'm currently taking a coding bootcamp through the University of Denver, with the aim of using these skills to further my professional career, though that's not necessarily through coding, per se!
                    I thoroughly enjoy my current position at Straker, where I feel I am highly valued for my ability to solve problems, think critically and act decisively, especially in situations where not all the key pieces of information are available. I act as a liaison between our production/development teams and the client, and my main goal in learning coding is to be able to speak "developer" in addition to the other languages, Spanish and Portuguese, that I have learned through previous studies.
                </div>
            </div>
            <div className='right-side'>
                {/* <img>Image of me</img> */}
            </div>
        </div >

    );
}


export default About