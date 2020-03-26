import React from 'react';

import './styles.css';

import herosImage from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="from"></section>

            <img src={herosImage} alt="Heroes" />
        </div>
    );
}