import React, { useContext } from 'react'
import './CountryBox.css'
import {CovidTrackerContext} from '../../context/CovidTrackerProvider';

export const CountryBox = ({value, name, flag}) => {
    const {getCountryData} = useContext(CovidTrackerContext)

    return (
        <div className="search-bar country-box" value={value} onClick={() =>getCountryData(name)}>
           <div className="country">
            <img className="country-img" src={`https://www.countryflags.io/${flag}/flat/64.png`} alt={`name ${flag}`}/>
            <p>{name}</p>
            </div>
        </div>
    )
}
