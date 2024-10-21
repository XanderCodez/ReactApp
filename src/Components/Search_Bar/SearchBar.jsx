import React from 'react'
import './SearchBar.css'

const SearchBar = ({ city, setCity, handleLocation, handleSearch }) => {

    return (

        <div className='search-bar'>

            <span className="material-symbols-outlined"
                type="button"
                onClick={handleLocation}>
                location_on
            </span>

            <input
                type="text"
                value={city}
                placeholder="Search"
                onChange={(event) => setCity(event.target.value)}
            />

            <span className="material-symbols-outlined"
                type="button"
                onClick={handleSearch}>
                search
            </span>

        </div>
    )
}

export default SearchBar
