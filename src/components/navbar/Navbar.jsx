import React from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

function Navbar() {

    const Menu =() => {
        <>
            <p><a href='home'>Home</a></p>
            <p><a href='wgpt3'>What is SwiftSleek?</a></p>
            <p><a href='possibility'>Work AI</a></p>
            <p><a href='blog'>Case Studies</a></p>
        </>

    }

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div>
          <div className="gt3__navbar">
                <div className="gt3__navbar-links">
                    <div className="gp3__navbar-links_logo">
                        <h4>SwiftSleek</h4>
                    </div>
                    <div className="gpt3__navbar-links_container">
                    <p><a href='home'>Home</a></p>
                    <p><a href='wgpt3'>What is SwiftSleek?</a></p>
                    <p><a href='possibility'>Work AI</a></p>
                    <p><a href='blog'>Case Studies</a></p>
                    </div>
                </div>
            

        <div className="gpt3__navbar-sign">
            <p>Sign In</p>
            <button type='button'>Sign Up</button>
            </div>  
            <div className="gpt3__navbar-menu">
                {toggleMenu? <RiCloseLine color='fff' size={27} onClick={
                    () =>  setToggleMenu(false)} /> : 
                    <RiMenu3Line color='fff' size={27} onClick={
                        () =>  setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className="gt3__navbar-menu_container-links">
                            <p><a href='home'>Home</a></p>
                            <p><a href='wgpt3'>What is SwiftSleek?</a></p>
                            <p><a href='possibility'>Work AI</a></p>
                            <p><a href='blog'>Case Studies</a></p>
                            </div>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>

                        </div>
                    )}
            </div>
        </div>
        </div>
    )
}

export default Navbar
