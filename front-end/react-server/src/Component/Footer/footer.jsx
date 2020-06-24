import React from 'react';
import logo from '../../logo.png';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faTwitter, faInstagram, faLinkedin }  from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <div className="footerSection">
            <div className="footer">
                <img src={logo} width="90" height="150" />
                <div className="icon-box">
                    <a className="icon-link" href="https://ca.linkedin.com"><FontAwesomeIcon className='footer-icon' icon={faLinkedin} /></a>
                    <a className="icon-link" href="https://facebook.com"><FontAwesomeIcon className='footer-icon' icon={faFacebookF} /></a>
                    <a className="icon-link" href="https://twitter.com"> <FontAwesomeIcon className='footer-icon' icon={faTwitter} /></a>
                    <a className="icon-link" href="https://instagram.com"><FontAwesomeIcon className='footer-icon' icon={faInstagram} /></a>

                </div>
                <p className="footer-paragraph"><b>© Copyright 2020. All Rights Reserved</b></p>
            </div>
        </div>
    )
}

export default Footer;