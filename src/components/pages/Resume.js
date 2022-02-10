import React from 'react';
import myResume from '../../images/JM_Resume.pdf';
import straker from '../../images/straker.png'
import resumeThumbnail from '../../images/resume_thumbnail.png'
import './resume.css';

const Resume = () => {
    return (
        <div className="resume-child">
            <div className='resume-child'>Click on the icon to download my resume:<a href={myResume} download rel="noreferrer"><img src={resumeThumbnail} alt="it's a thumbnail" className='thumbnail'></img> </a></div>
            <div className='resume-child'><img src={straker} alt='my master' className='straker'></img></div>

            <h2>Proficiencies</h2>
            <div>I feel comfortable operating within the MERN stack, specifically with Node.js, Express and somewhat with React.
            </div>
            <div> I like working between the front end and the back end, and I think that there is always going to be a need for someone who speaks developer!
            </div>


        </div >
    )
}

export default Resume;