import './WelcomeMessage.css'

const WelcomeMessage = ({ style }) => {

    return (

        <div className='welcome-message' style={style}>

            <h1>Search for a <b>City</b> or use your <b>Location</b> for <b>Weather</b></h1>

            <img src="src/Images/placeholder-black-invert.png" />
        </div>

    )
}

export default WelcomeMessage