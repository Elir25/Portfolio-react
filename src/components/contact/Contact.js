import React from 'react';
import './contact.css';
import Footer from './Footer';
import Form from './Form';

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-content">
        <h1 className="contact-headline">CONTACT</h1>
            <Form />
            <Footer />
            </div>
            <div className="signature">
            <p>© 2021 Elialba Rendiles</p>

            </div>
        </div>
    )
}

export default Contact;