import React from 'react';
import './feature.css';
const feature = ({title, text}) => {
    return (
        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title">
            <div />
            <h2>{title}</h2>    
            </div>
            <div className="gpt3__features-container__feature-text">
            <p> {text} </p>
            </div>
        </div>
    )
}

export default feature
