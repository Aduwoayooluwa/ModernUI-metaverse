import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './imports'

function Brand() {
    return (
        <div className='gpt3__brand section__padding'>
            <div>
                <img src={google} alt="google"/>
            </div>
            <div>
                <img src={slack} alt=""/>
            </div>
            <div>
                <img src={atlassian} alt=""/>
            </div>
            <div>
                <img src={shopify} alt=""/>
            </div>
            <div>
                <img src={dropbox} alt=""/>
            </div>
        </div>
    )
}

export default Brand
