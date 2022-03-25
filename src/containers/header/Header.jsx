import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
        <h1 className="gradient__text">Turn your Fantasy into a Reality</h1>
        <p>The Metaverse is a virtual universe that exists in a virtual world of the internet. Experience the Metaverse. Feel it, See it, Testify it. Become a witness to the testament.</p>

        <div className="gpt3__header-content__input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
            <img src={people} />
            <p>Join thousands to use our products</p>
        </div>
        </div>

        <div className="gpt3__header-image">
        <img src={ai} />
        </div>
    </div>
);

export default Header;