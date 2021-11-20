import React from 'react';
import { Feature } from '../../components';
import './whatsquid.css';
const Whatsquid = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="about">
            <div className="gpt3__whatgpt3-features">
                <Feature title="What is Squid Game ?" text="Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes."/>
            </div> 
            <div className="gpt3__whatgpt3-heading">
                <h2 className="gradient__text">the squid game is the new generation</h2>
                <p>Explore The Squid Game</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Acteurs " text="Lee Jung-jae , Park Hae-soo , O Yeong-su, Jung Ho-yeon,Heo Sung-tae" />
                <Feature title="Starring" text="Lee Jung-jae, Park Hae-soo, Wi Ha-jun"  />
                <Feature title="Creators" text="Hwang Dong-hyuk" />
            </div>
        </div>
    )
}

export default Whatsquid
