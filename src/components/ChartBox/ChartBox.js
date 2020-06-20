import React, { useContext} from 'react'
import './ChartBox.css'
import {Bar} from 'react-chartjs-2'
import {CovidTrackerContext} from '../../context/CovidTrackerProvider';
export const ChartBox = () => {
    
    const {data} = useContext(CovidTrackerContext);
    const {recovered,deaths,infected, name}  = data;
    const Chart = recovered ?<Bar 
            data={{
                labels:['Infected', 'Recovered', "Deaths"],
                datasets: [{
                    label:'People',
                    backgroundColor: [
                        'rgba(255, 62, 41, 0.8)',
                        'rgba(0, 219, 117, 0.74)',
                        
                        
                        'rgba(61, 63, 82, 0.68)',
                    ],
                    data:[infected,recovered,deaths,0]       
                }],
            }}
            options={{
                legend:{display: false},
                title: {display:true, text:`Current state in ${name}`}
            }}
            /> : null;
    return (
        <div className="chart-box">
            <h1>COVID 19 GRAPHS</h1>
             {Chart}
        </div>
    )
}
