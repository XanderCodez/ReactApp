//* cd Weather-App-React
//* npm run dev

import React, { useState } from 'react'
import { getWeatherIcon, fetchWeatherData, API } from './Scripts/WeatherAPI'
import SearchBar from './Components/Search_Bar/SearchBar'
import ErrorMessage from './Components/Error_Message/ErrorMessage'
import WelcomeMessage from './Components/Welcome_Message/WelcomeMessage'
import WeatherDisplay from './Components/Weather_Display/WeatherDispaly'

const WeatherApp = () => {

  const [city, setCity] = useState("")
  const [errorInfo, setErrorInfo] = useState("")
  const [weatherIcon, setWeatherIcon] = useState("")
  const [welcomeMsg, setWelcomeMsg] = useState(true)
  const [errorVisible, setError] = useState(false)
  const [weatherData, setWeatherData] = useState(null)

  const showErrors = (type, info) => {
    setError(true)
    setWelcomeMsg(false)
    setWeatherData(null)
    setErrorInfo(info)
    if (type) console.error(type)
  }

  const getWeatherData = async (city) => {

    const DATA = await fetchWeatherData(API.URL(city), showErrors);

    if (DATA) {
      const {
        name, main: { temp, humidity },
        weather: [{ description, id }],
        wind: { speed, deg }
      } = DATA;
      setError(false)
      setWelcomeMsg(false)
      setWeatherData(DATA);
      setWeatherIcon(getWeatherIcon(DATA.weather[0].id))
    }
    else { showErrors("Response not ok") }
  }

  const handleSearch = () => { city ? getWeatherData(city) : showErrors("Empty value", "Please enter a city!") }

  const handleLocation = () => {

    const WeatherByLocation = async (lat, lon) => {
      return fetchWeatherData(API.LOCATION(lat, lon), showErrors)
    }

    const successCallback = async (position) => {

      const { latitude, longitude } = position.coords

      try {

        const LOCATION = await WeatherByLocation(latitude, longitude)

        getWeatherData(LOCATION.name)

      } catch (er) { showErrors(er) }
    }
    const errorCallback = (er) => { showErrors(er, "Location access denied") }
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }

  return (
    <>
      <SearchBar
        city={city}
        setCity={setCity}
        handleLocation={handleLocation}
        handleSearch={handleSearch} />

      <ErrorMessage
        style={{ display: errorVisible ? "block" : "none" }}
        errorInfo={errorInfo} />

      <WelcomeMessage
        style={{ display: welcomeMsg ? "block" : "none" }} />

      <WeatherDisplay
        weatherData={weatherData}
        weatherIcon={weatherIcon} />
    </>
  )
}

export default WeatherApp