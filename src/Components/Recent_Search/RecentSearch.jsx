import React from "react"
import './RecentSearch.css'

const RecentSearch = ({ recentSearches, handleRecentSearch, clearRecent, isVisible }) => {

    if (!isVisible || recentSearches.length === 0) return null;

    return (
        <div className="recent-search">

            <span className="material-symbols-outlined"
                type="button"
                onClick={clearRecent}>
                cancel
            </span>

            {recentSearches.map((city) => (<a onClick={() => handleRecentSearch(city)}>{city}</a>))}

        </div>
    )
}

export default RecentSearch
