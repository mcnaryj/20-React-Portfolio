import React from 'react';
import Marvellisms from '../../images/Marvellisms.png'
import gentleTilly from '../../images/gentle-tilly.png'
import noteTaker from '../../images/Note-Taker.png'
import employeeTracker from '../../images/Employee-tracker.png'
import eCommerce from '../../images/E-Commerce.png'

// import css
function Project() {
    return (
        <section className='projects'>
            <div className="card">Marvellisms</div>
            <img src={Marvellisms} className="first-image" alt="Marvellisms, the Marvel Database" />
            <a href="https://carlincb.github.io/Marvelisms/" target="_blank" rel="noreferrer">
                <section className="marvellisms">
                    <header>Marvellisms - The
                        Marvel Database
                    </header>
                </section>
            </a>
            <section className="other-projects">
                <a href="https://www.youtube.com/watch?v=Xc_GST9Am94&feature=youtu.be." target="_blank" rel="noreferrer">
                    <img src={eCommerce} className="other-images" alt="e-Commerce database" />
                    <section className="e-commerce">
                        <header>E-Commerce Back-End</header>

                    </section>
                </a>
                <a href="https://peaceful-reef-89877.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={noteTaker} className="other-images" alt="Note Taker" />
                    <section className="note-taker">
                        <header>Note Taker App</header>
                    </section>
                </a>
                <a href="https://github.com/Valllerian/Gentle-Tilly/" target="_blank" rel="noreferrer">
                    <img src={gentleTilly} className="other-images" alt="gentle tilly" />
                    <section className="gentle-tilly">
                        <header>Gentle Tilly!</header>
                    </section>
                </a>
                <a href="https://www.youtube.com/watch?v=66R85GNfabY" target="_blank" rel="noreferrer">
                    <img src={employeeTracker} className="other-images" alt="employee tracker" />
                    <section className="employee-tracker">
                        <header>Employee Database Tracker</header>
                    </section>
                </a>
            </section>
        </section >
    );
};

export default Project;