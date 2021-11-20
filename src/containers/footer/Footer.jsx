import React from 'react'
import './footer.css';
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h2 className="gradient__text">Do You Wanna Start Enjoying The Tv Show </h2>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access </p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={Logo} alt="Logo" />
                    <p>Landing Page Created By Adruich   </p>
                </div>
                <div className="gpt3__footer-links_div">
                        <h4>Links</h4>
                        <p>Overons</p>
                        <p>Social Media</p>
                        <p>Counters</p>
                        <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                        <h4>Company</h4>
                        <p>Terms 7 Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Counters</p>
                        <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                        <h4>Get in Touch</h4>
                        <p>Casablanca, Morocco</p>
                        <p>+212631958700</p>
                        <p>Contact@Squid.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>©Adruich, All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
