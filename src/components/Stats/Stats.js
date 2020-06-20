import React from 'react'
import './Stats.css';
import {ChartBox} from '../ChartBox/ChartBox';
import {SearchBox} from '../SearchBox/SearchBox'
export const Stats = () => {
    return (
        <div className="flex-container ">
            <ChartBox />
            <SearchBox />
            
        </div>
    )
}
