import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="social-list-container-footer">
        <ul className="social-list-footer">
            <li>
                <div className="li-content">
                <i className="fab fa-github"></i>
                <p>github: Elir25</p>
                </div>
                </li>
            <li>
                <div className="li-content">
                <i className="fab fa-linkedin"></i>
                <p>LinkedIn</p>
                </div>
                </li>
            <li>
            <div className="li-content">
                <i className="fas fa-envelope"></i>
                <p>elirendiles@gmail.com</p>
                </div>
            </li>
            
        </ul>
        </div>
        </div>
    )
}
export default Footer;