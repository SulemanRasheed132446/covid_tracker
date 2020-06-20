import React from 'react';
import './Header.css';
import logo from '../../assets/Logo.png';
import introImage from '../../assets/intro-logo.png'
import {StatsBox} from '../StatsBox/StatsBox'
export const Header = () => {
    return (
        <div className="header">
            <nav>
                <img src={logo} alt="covid logo"/>
            </nav>
            <div className="container" >
                <div className="intro">
                    <h1>COVID-19 LIVE TRACKER</h1>
                    <p>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.</p>
                </div>
                <img src={introImage} alt="covid"/>
            </div>
            <StatsBox />
        </div>
    )
}
