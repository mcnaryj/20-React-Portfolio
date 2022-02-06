import React, { useRef, useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function Contact() {


    const form = useRef();
    // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            validateEmail(inputValue);
            if (!validateEmail(inputValue)) {
                setErrorMessage('Your email is invalid. Try again, ya dingus!');
            } else {
                setEmail(inputValue);
            }
        }
        else if (inputType === 'username') {
            if (!inputValue.length) {
                setErrorMessage('Give us a name then, why dontcha!');
            } else {
                setUserName(inputValue);
            }
        }
        else if (!inputValue.length) {
            setErrorMessage('You gotta leave something here for me to read!');
        } else {
            setMessage(inputValue);
        }
    };
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9uulvno', 'template_o0zd61p', e.target, form.current, 'user_9H4glZeBTGRx1ksFmdj8T')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setEmail('');
        setUserName('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className="contactContainer">
            <h1>Contact:</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Name</label>
                    <input value={userName} type="text" name="userName" onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Email</label>
                    <input value={email} type="text" name="email" onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Message</label>
                    <input value={message} type="text" name="message" onChange={handleChange} className="form-control" id="formGroupExampleInput" placeholder="Message" />
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text" style={{ color: "red" }}>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;