import React,{createContext, useState,useEffect} from 'react';
import {covidApi} from '../util/api'
export const CovidTrackerContext = createContext();

export const CovidTrackerProvider = (props) => {
    const [countriesList, setCountriesList] = useState([]);
    const [searchText, setSearch] = useState('');
    const [data, setData] = useState({   })
    useEffect(() => {
        const setCountriesListData = async () =>{
            setCountriesList(await covidApi.getAllCountries());
            setData(await covidApi.getCountryData('Global'))
        }
        setCountriesListData();
        return ;
    }, []);


    const getCountryData = async (country) => {
        setData(await covidApi.getCountryData(country) || data);
    }
    return (
        <CovidTrackerContext.Provider value={{
            countriesList,
            searchText,
            setSearch,
            data,
            getCountryData
        }}>
            {props.children}
        </CovidTrackerContext.Provider>
    )
}