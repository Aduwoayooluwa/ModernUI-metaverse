import React from 'react'
import './pos.css'
import possibilityImage from '../../assets/possibility.png';


function Possibility() {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility"/>
            </div>

            <div className="gpt3__possibility-content">
                <h4>Get Started. Feel the drill.</h4>
                <h1 className="gradient__text">
                    The possibilities are <br /> far beyond your fantasies
                </h1>
                <p>The Metaverse is a virtual universe that exists in a virtual world of the internet. Experience the Metaverse. Feel it, See it, Testify it. Become a witness to the testament.</p>
                <h4>Get Started. Feel the drill.</h4>
            </div>
        </div>
    )
}

export default Possibility
