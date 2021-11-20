import React from 'react';
import './possibility.css';
import SquidImage from '../../assets/Squid.png'

const Possibility = () => {
    return (
        <div className="gpt3__possibility section_passing" id="squid">
            <div className="gpt3__possibility-image">
                <img src={SquidImage} alt="Squid Game" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h2 className="gradient__text">The Squid Game Is Available Now To Get Join And Win A Gift </h2>
                <p>Well Request the Early Access To Get the squid game products everywhere you exist, we gonna ship it too you with free taxes and huge quality and you have the choice of the product when you win </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility
