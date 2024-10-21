import clear from '../Images/clear.png'
import cloudy from '../Images/cloudy.png'
import drizzle from '../Images/drizzle.png'
import rain from '../Images/rain.png'
import snow from '../Images/snow.png'
import windy from '../Images/windy.png'
import lightning from '../Images/lightning.png'

export const getWeatherIcon = (id) => {

    if (id >= 200 && id < 300) return lightning
    if (id >= 300 && id < 400) return drizzle
    if (id >= 500 && id < 600) return rain
    if (id >= 600 && id < 700) return snow
    if (id >= 700 && id < 800) return windy
    if (id === 800) return clear
    if (id > 800) return cloudy

}

export const API = {

    KEY: "58aee28527bdf3c3ee2286a85c98202e",

    URL(city) {
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.KEY}`
    },
    LOCATION(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.KEY}`
    }
}

export const fetchWeatherData = async (url, showErrors) => {

    try {
        const RESPONSE = await fetch(url)

        if (!RESPONSE.ok) showErrors("Response not ok!", "City not found")

        return await RESPONSE.json()
    }

    catch (error) { showErrors(error, "Invalid city name!") }

}

