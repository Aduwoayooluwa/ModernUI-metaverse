import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';


function Footer() {
    return (
            <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
            <h1 className="gradient__text">Do you want to be in the Future in the Present</h1>
            </div>
        
            <div className="gpt3__footer-btn">
            <p>Get it now</p>
            </div>
        
            <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <h4>SwiftSleek</h4>
                <p>2424, 0001, Metaverse, Internet <br /> All Rights Reserved</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Links</h4>
                <p>View</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>About</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Get in touch</h4>
                <p>2424, 0001, Metaverse, Internet </p>
                <p>085-132567</p>
                <p>contact@swiftsleek.io</p>
            </div>
            </div>
        
            <div className="gpt3__footer-copyright">
            <p>@2022 SwiftSleek. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
