import React,{useContext} from 'react'
import './StatsBox.css'
import infectedPng from '../../assets/infected.png';
import recoveredPng from '../../assets/recovered.png';
import statsPng from '../../assets/stats.png';
import deathsPng from '../../assets/deaths.png';
import CountUp from 'react-countup';
import {CovidTrackerContext} from '../../context/CovidTrackerProvider';

export const StatsBox = () => {

    const {data} = useContext(CovidTrackerContext);
    const {recovered,deaths,infected, name, newDeaths , newRecovered, newInfected}  = data;
    return (
        <div className='stats-box'>
            <div className="stats">
                <div className="stats-image">
                <img src={statsPng} alt="country"/>
                </div>
                <div className="stats-info">
                    <p>Stats Overview</p>
                    <h1>{name || 'GLOBAL'}</h1>
                </div>
            </div>
            <div className="stats">
                <div className="stats-image">
                <img src={infectedPng} alt="infected logo"/>
                </div>
                <div className="stats-info">
                    <p>Total Coronavirus Cases</p>
                    <h1>
                        <CountUp 
                        start={0} end={(infected ? infected-newInfected: undefined) | 0} 
                        duration={2.5}/>
                    </h1>
                    <p>+
                    <CountUp 
                        start={0} end={newInfected | 0} 
                        duration={2.5}/>
                    </p>
                </div>
            </div>
            <div className="stats">
                <div className="stats-image">
                <img src={recoveredPng} alt="recovered logo"/>
                </div>
                <div className="stats-info">
                    <p>Total Recovered</p>
                    <h1>
                        <CountUp 
                        start={0} end={(recovered ? recovered-newRecovered: undefined) | 0} 
                        duration={2.5}/>
                    </h1>
                    <p>
                        + <CountUp 
                        start={0} end={newRecovered | 0} 
                        duration={2.5}/>
                    </p>

                </div>
            </div>
            <div className="stats">
                <div className="stats-image">
                <img src={deathsPng} alt="death logo"/>
                </div>
                <div className="stats-info">
                    <p>Total Death</p>
                    <h1>
                        <CountUp 
                        start={0} end={(deaths ? deaths - newDeaths : undefined)| 0} 
                        duration={2.5}
                        />
                    </h1>
                    <p>+
                        <CountUp 
                            start={0} end={newDeaths| 0} 
                            duration={2.5}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}
