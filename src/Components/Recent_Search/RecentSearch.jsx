import React from "react"
import './RecentSearch.css'

const RecentSearch = ({ recentSearches, handleRecentSearch, clearRecent, style }) => {

    const [isVisible, setIsVisible] = useState(true);

    const handleClear = () => {
        clearRecent();  // Clear localStorage or data
        setIsVisible(false);  // Hide the component after clear
    };

    if (!isVisible) {
        return null;  // If isVisible is false, don't render anything
    }


    return (

        <div className="recent-search" style={style}>

            <span className="material-symbols-outlined"
                type="button"
                onClick={handleClear}>
                cancel
            </span>

            {
                recentSearches.map((city, index) => (
                    <a key={index} onClick={() => handleRecentSearch(city)}>{city}</a>
                ))
            }

        </div >

    )
}

export default RecentSearch