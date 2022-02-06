import React from 'react';
import Marvellisms from '../../images/Marvellisms.png'
import gentleTilly from '../../images/gentle-tilly.png'
import noteTaker from '../../images/Note-Taker.png'
import employeeTracker from '../../images/Employee-tracker.png'
import eCommerce from '../../images/E-Commerce.png'
import socialNetwork from '../../images/Social_network_api.png'

import './projects.css';


// import css
function Project() {
    return (

        <div className='projects'>
            <div className="card" style={{ width: "10%" }}>
                <img src={socialNetwork} className="first-image" alt="Facebook sucks" />
                <div className="body">
                    <h6 className="title">Social Network API</h6>
                    <div className='card-description'>The newest and coolest social network - Mark Zuckerberg, eat your robot-lizard heart out!</div>
                    <a href="https://watch.screencastify.com/v/xWw3HyvOnYrEolDr9ar9" target="_blank" rel="noreferrer">Check it out!
                    </a>
                </div>
            </div>
            <div className="card" style={{ width: "10%" }}>
                <img src={Marvellisms} className="first-image" alt="Marvellisms, the Marvel Database" />
                <div className="body">
                    <h6 className="title">Marvellisms</h6>
                    <div className='card-description'>Marvellisms - The
                        Marvel Database</div>
                    <a href="https://carlincb.github.io/Marvelisms/" target="_blank" rel="noreferrer">Check it out!
                    </a>
                </div>
            </div>
            <div className="card" style={{ width: "10%" }}>
                <img src={employeeTracker} className="first-image" alt="Employee Database Tracker" />
                <div className="body">
                    <h6 className="title">Employee Tracker Database</h6>
                    <div className='card-description'>Keep track of your employees with this marvelous tracker.</div>
                    <a href="https://www.youtube.com/watch?v=66R85GNfabY" target="_blank" rel="noreferrer">Check it out!
                    </a>
                </div>
            </div>
            <div className="card" style={{ width: "10%" }}>
                <img src={gentleTilly} className="first-image" alt="Gentle Tilly!" />
                <div className="body">
                    <h6 className="title">Gentle Tilly</h6>
                    <div className='card-description'>Check out any upcoming hockey game and also talk trash with your friends.</div>
                    <a href="https://github.com/Valllerian/Gentle-Tilly/" target="_blank" rel="noreferrer">Check it out!
                    </a>
                </div>
            </div>
            <div className="card" style={{ width: "10%" }}>
                <img src={noteTaker} className="first-image" alt="Note-Taker App" />
                <div className="body">
                    <h6 className="title">Note Taker</h6>
                    <div className='card-description'>Take hella notes with this note taker app!</div>
                    <a href="https://peaceful-reef-89877.herokuapp.com/" target="_blank" rel="noreferrer">Check it out!
                    </a>
                </div>
            </div>
            <div className="card" style={{ width: "10%" }}>
                <img src={eCommerce} className="first-image" alt="E Commerce Magick" />
                <div className="body">
                    <h6 className="title">E-Commerce Back End</h6>
                    <div className='card-description'>The magick of eCommerce!</div>
                    <a href="https://www.youtube.com/watch?v=Xc_GST9Am94&feature=youtu.be." target="_blank" rel="noreferrer">Check it out!
                    </a>
                </div>
            </div>

        </div >
    );
};

export default Project;