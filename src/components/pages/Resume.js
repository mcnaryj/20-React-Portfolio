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
            <div>I'm not going to make some bold claim and say I am really proficient in any of the topics that we've discussed in this class, however I do feel comfortable operating within the MERN stack, specifically with Node.js, Express and somewhat with React.
            </div>
            <div>Aside from that, I feel comfortable using HTML, CSS (if push came to shove, I would make this website look real nice, but it is simply not within my bandwidth right now given the other things I am currently pursuing in life), JavaScript, and I think I could learn most languages without too much difficulty.
            </div>


        </div >
    )
}

export default Resume;