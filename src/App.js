import React from 'react'
import { Brand, CTA, Navbar } from './components'
import { Blog, Header, Footer, Features, Possibility, Swiftsleek } from './containers'
import './App.css'


function App() {
    return (
        <div className='App'>
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            
            
            <Swiftsleek />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Brand />
            <Footer />
        </div>
    )
}

export default App
