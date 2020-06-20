import React,{useContext} from 'react';
import './SearchBar.css';
import navIcon from '../../assets/navIcon.png';
import {CovidTrackerContext} from '../../context/CovidTrackerProvider'

export const SearchBar = () => {
    const {searchText, setSearch} =  useContext(CovidTrackerContext);
    const  handleSearchText = (event) =>{
        setSearch(event.target.value);
    }
    
    return (
        <div className='search-bar'>
            <input type="text" placeholder="Enter country name" value={searchText} onChange={handleSearchText}></input>
            <div className="search-btn">
                <img src={navIcon}></img>
            </div>
        </div>
    )
}
