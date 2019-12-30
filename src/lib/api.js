import _get from 'lodash/get'
import store from '../store'
import { setCityDetails } from '../actions'
import { weatherUrl, imageUrl } from '../consts'

async function fetchCityWeather(key) {
  const response = await fetch(`${weatherUrl}/currentconditions/v1/${key}?apikey=UAgHWpoNWpWZ8dZDh0yoyBUldjHfkzvK`)
  const currentWeatherDetails = await response.json()
  const { WeatherText, Temperature, WeatherIcon } = currentWeatherDetails[0] || []
  const wearherImage = `${imageUrl}/${WeatherIcon.toString().padStart(2, '0')}-s.png`

  return {
    temp: _get(Temperature, ['Metric', 'Value'], ''),
    description: WeatherText,
    img: wearherImage,
  }
}

async function updateCurrentCityWeather(key) {
  const currWeatherInfo = await fetchCityWeather(key)
  store.dispatch(setCityDetails('currWeatherInfo', currWeatherInfo))
}

async function fetchAutoCompleteOptions(value) {
  const response = await fetch(`${weatherUrl}/locations/v1/cities/autocomplete?apikey=UAgHWpoNWpWZ8dZDh0yoyBUldjHfkzvK&q=${value}`)
  const cities = await response.json()
  return cities
}

async function fetchForecastDetails(key) {
  const response = await fetch(`${weatherUrl}/forecasts/v1/daily/5day/${key}?apikey=UAgHWpoNWpWZ8dZDh0yoyBUldjHfkzvK&metric=true`)
  const forecast = await response.json()
  const { DailyForecasts } = forecast || {}

  return DailyForecasts.map((day) => ({
    date: day.Date,
    temp: {
      min: _get(day.Temperature, ['Minimum', 'Value'], ''),
      max: _get(day.Temperature, ['Maximum', 'Value'], ''),
    },
    dayTemp: {
      icon: _get(day.Day, ['Icon'], ''),
      text: _get(day.Day, ['IconPhrase'], ''),
    },
  }))
}

async function updateForecast(key) {
  const forecast = await fetchForecastDetails(key)
  store.dispatch(setCityDetails('forecast', forecast))
}

export {
  fetchCityWeather,
  updateCurrentCityWeather,
  fetchForecastDetails,
  fetchAutoCompleteOptions,
  updateForecast,
}
