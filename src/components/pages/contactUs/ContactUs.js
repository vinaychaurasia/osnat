import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactUs.css';

function ContactUs(){
    const myForm = useRef();
    const sendEmail = (event) => {
        event.preventDefault();
        
        emailjs.sendForm('service_5yal9qs', 'template_q8n5a5n', myForm.current, 'q3VYLHUp5WCbj6_Wo')
        .then((result) => {
            alert("email sent successfully: " + result.text);
            event.target.reset();
        }, (error) => {
            console.log("some error occured: " + error.text);
        });
    };

    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form ref={myForm} onSubmit={sendEmail}>
            {/* <form ref={myForm}> */}
                <input type='text' placeholder="Name" name='from_name' />
                <input type='text' placeholder="Email" name='user_email' />
                <input type='text' placeholder="Phone" name='phone' />
                <input type='text' placeholder="City" name="city" />
                <input type='text' placeholder="Do you have GST number" name="gst" />
                <input type='text' placeholder="Do you have drug license number" name='license' />
                <textarea placeholder="Message...   " rows="4" name='message' />
                <button type='submit'>Send Message</button>
            </form>
        </div>
    );
}

export default ContactUs;