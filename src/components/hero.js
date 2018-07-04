import React from 'react';

import './../styles/hero.css';

const Hero = ({hero}) => {
    return (
        <div className="hero">
            <img src={`https://api.opendota.com${hero.img}`} alt=""/>
        </div>
    )
}

export default Hero;