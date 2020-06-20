import React, { useContext } from 'react';
import './SearchBox.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {CountryBox} from '../CountyBox/CountryBox';
import {CovidTrackerContext} from '../../context/CovidTrackerProvider';


export const SearchBox = () => {
    const {countriesList,searchText} = useContext(CovidTrackerContext);

    return (
        <div className='search-box'>
            <SearchBar />
            <div className="countries-data">
               {countriesList.filter((country) => {
                   return country.Country.toLowerCase().includes(searchText.toLowerCase());
               }).map((country) => {
                   
                   return (
                    <CountryBox name={country.Country} flag={country.ISO2} value={country.Slug} key={country.ISO2}/>
                    )
               })}
            </div>
        </div>
    )
}
