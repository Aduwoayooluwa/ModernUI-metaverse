import React from 'react'
import './feature.css'
import Feature from '../../components/feature/Feature'


const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
        title: 'Become the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
        title: 'Message or am nothing',
        text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
        title: 'Really boy law county',
        text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
];

function Features() {

    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future Verse is the MetaVerse. Enter into the Metaverse and feel the three verses in your Life's Chapter.</h1>
                <p>Feel it, See it, Say it</p>
            </div>

            <div className="gpt3__features-content">
                {featuresData.map((item, index) => {
                    return(
                    <Feature title={item.title} text={item.title} key={index} />
                )})}
            </div>
        </div>
    );
}

export default Features;
