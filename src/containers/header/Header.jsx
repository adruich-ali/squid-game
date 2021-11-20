import React from 'react';
import './header.css';
import People from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Get Excited watching Squid Game</h1>
                <p>Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="You Email Address" />
                    <button type="button" >Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={People} alt="people" />
                    <p>1,600 people requested access a visit i last 24 hours</p>
                </div>

            </div>
            <div className="gpt3__header-image">
                    <img src={ai} alt="LSquid" />
                </div>
        </div>
    )
}

export default Header
