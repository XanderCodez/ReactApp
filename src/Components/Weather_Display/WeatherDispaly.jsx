import React from 'react'
import './WeatherDisplay.css'

const WeatherDisplay = ({ weatherData, weatherIcon }) => {

    if (!weatherData || !weatherData.weather) return null

    const CELSIUS = Math.round(weatherData.main.temp - 273.15)
    const FAHRENHEIT = Math.floor((CELSIUS * 9) / 5 + 32)

    return (

        <div className='weather-display'>

            <div className='box'>
                <h1>{weatherData.name}</h1>
                < img src={weatherIcon} />
                <h2>{weatherData.weather[0].description}</h2>
            </div>

            <div className='weather-details'>

                <div className='box'>

                    <div>
                        <span className="material-symbols-outlined">water</span>
                        <p>Humidity</p>
                    </div>

                    <h2>
                        {weatherData.main.humidity}<b>%</b>
                    </h2>
                </div>

                <div className='box'>
                    <div>
                        <span className="material-symbols-outlined">device_thermostat </span>
                        <p>Temperature</p>
                    </div>

                    <h2>
                        {FAHRENHEIT}<b>°F</b> - {CELSIUS}<b>°C</b>
                    </h2>
                </div>

                <div className='box'>
                    <div>
                        <span className="material-symbols-outlined">air </span>
                        <p>Wind Speed</p>
                    </div>

                    <h2>
                        {Math.floor(weatherData.wind.speed * 3.6)} <b>km/h</b>
                    </h2>
                </div>

            </div>

        </div>

    )
}

export default WeatherDisplay
