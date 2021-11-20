import React from 'react';
import { Feature } from '../../components';
import './featuers.css';

const featuresData = [
    {
        title: 'Enjoy Watching',
        text: 'Seong Gi-hun, a divorced father and indebted gambler who lives with his elderly mother, is invited to play a series of childrens games for a chance at a large cash prize.'
    },
    {
        title: 'Development',
        text: 'Around 2008, Hwang Dong-hyuk had tried unsuccessfully to get investment for a different movie script that he had written, ',
    },
    {
        title: 'Writing',
        text: 'Hwang described the work as "a story about losers".[41] The names of the characters - Seong Gi-hun, Cho Sang-woo, ',
    },
    {
        title: 'Casting',
        text: 'ang said he chose to cast Lee Jung-jae as Gi-hun as to "destroy his charismatic image portrayed in his previous roles".',
    }
    

]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h2 className="gradient__text" >The Future Of The Tv Shows Is Now , Join Us And Enjoy it </h2>
                <p>Request Early Access To Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {
                    featuresData.map((item, index) => (
                        <Feature title={item.title} text={item.text} key={item.title + index}/>
                    ))}

            </div>
            
        </div>
    )
}

export default Features
