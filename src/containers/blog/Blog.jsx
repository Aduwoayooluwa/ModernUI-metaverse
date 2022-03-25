import React from 'react'
import './blog.css'
import Article from '../../components/articles/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'


function Blog() {
    return (
        <div className="gpt3__blog section__padding" id='blog'>
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    Many things are goin on in the Metaverse <br/> We are telling you about it.
                </h1>
                </div>
                <div className="gpt3__blog-container">
                    <div className="gpt3__blog-container_groupA">
                        <Article imgUrl={blog01} text='Metaverse is the future. Let us all experience it with you now. Get Started.'/> 
                    </div>

                    <div className="gpt3__blog-container_groupB">
                        <Article imgUrl={blog02} text="Metaverse is the future. Let us all experience it with you now. Get Started." />
                        <Article imgUrl={blog03} text="Metaverse is the future. Let us all experience it with you now. Get Started." />
                        <Article imgUrl={blog04} text="Metaverse is the future. Let us all experience it with you now. Get Started." />
                        <Article imgUrl={blog05} text="Metaverse is the future. Let us all experience it with you now. Get Started." />
                    </div>

                </div>
        </div>
        
    )
}

export default Blog
