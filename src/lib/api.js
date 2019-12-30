import _get from 'lodash/get'
import store from '../store'
import { setCityDetails } from '../actions'
import { weatherUrl, imageUrl } from '../consts'

async function fetchCityWeather(key) {
  const response = await fetch(`${weatherUrl}/currentconditions/v1/${key}?apikey=awM6pDci3i4lGcDFhVGHqPMLgeAYIehb`)
  const currentWeatherDetails = await response.json()
  //   const currWeather = JSON.parse('{"currentWeatherDetails":[{"LocalObservationDateTime":"2019-12-28T02:00:00+03:00","EpochTime":1577487600,"WeatherText":"Some clouds","WeatherIcon":36,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":false,"Temperature":{"Metric":{"Value":12.5,"Unit":"C","UnitType":17},"Imperial":{"Value":54,"Unit":"F","UnitType":18}},"MobileLink":"http://m.accuweather.com/en/ye/asdas/354547/current-weather/354547?lang=en-us","Link":"http://www.accuweather.com/en/ye/asdas/354547/current-weather/354547?lang=en-us"}]}')
  //   const { currentWeatherDetails } = currWeather || {}
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
  const response = await fetch(`${weatherUrl}/locations/v1/cities/autocomplete?apikey=awM6pDci3i4lGcDFhVGHqPMLgeAYIehb&q=${value}`)
  const cities = await response.json()
  return cities
}

async function fetchForecastDetails(key) {
  const response = await fetch(`${weatherUrl}/forecasts/v1/daily/5day/${key}?apikey=awM6pDci3i4lGcDFhVGHqPMLgeAYIehb&metric=true`)
  const forecast = await response.json()
//   const forecast = JSON.parse(`{
//     "Headline": {
//       "EffectiveDate": "2019-12-28T07:00:00+02:00",
//       "EffectiveEpochDate": 1577509200,
//       "Severity": 4,
//       "Text": "Expect showers Saturday",
//       "Category": "rain",
//       "EndDate": "2019-12-28T19:00:00+02:00",
//       "EndEpochDate": 1577552400,
//       "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
//       "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
//     },
//     "DailyForecasts": [
//       {
//         "Date": "2019-12-28T07:00:00+02:00",
//         "EpochDate": 1577509200,
//         "Temperature": {
//           "Minimum": {
//             "Value": 9.9,
//             "Unit": "C",
//             "UnitType": 17
//           },
//           "Maximum": {
//             "Value": 15.6,
//             "Unit": "C",
//             "UnitType": 17
//           }
//         },
//         "Day": {
//           "Icon": 13,
//           "IconPhrase": "Mostly cloudy w/ showers",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Light"
//         },
//         "Night": {
//           "Icon": 34,
//           "IconPhrase": "Mostly clear",
//           "HasPrecipitation": false
//         },
//         "Sources": [
//           "AccuWeather"
//         ],
//         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
//       },
//       {
//         "Date": "2019-12-29T07:00:00+02:00",
//         "EpochDate": 1577595600,
//         "Temperature": {
//           "Minimum": {
//             "Value": 10.8,
//             "Unit": "C",
//             "UnitType": 17
//           },
//           "Maximum": {
//             "Value": 18.7,
//             "Unit": "C",
//             "UnitType": 17
//           }
//         },
//         "Day": {
//           "Icon": 2,
//           "IconPhrase": "Mostly sunny",
//           "HasPrecipitation": false
//         },
//         "Night": {
//           "Icon": 34,
//           "IconPhrase": "Mostly clear",
//           "HasPrecipitation": false
//         },
//         "Sources": [
//           "AccuWeather"
//         ],
//         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
//       },
//       {
//         "Date": "2019-12-30T07:00:00+02:00",
//         "EpochDate": 1577682000,
//         "Temperature": {
//           "Minimum": {
//             "Value": 10.3,
//             "Unit": "C",
//             "UnitType": 17
//           },
//           "Maximum": {
//             "Value": 19.1,
//             "Unit": "C",
//             "UnitType": 17
//           }
//         },
//         "Day": {
//           "Icon": 3,
//           "IconPhrase": "Partly sunny",
//           "HasPrecipitation": false
//         },
//         "Night": {
//           "Icon": 34,
//           "IconPhrase": "Mostly clear",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Light"
//         },
//         "Sources": [
//           "AccuWeather"
//         ],
//         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
//       },
//       {
//         "Date": "2019-12-31T07:00:00+02:00",
//         "EpochDate": 1577768400,
//         "Temperature": {
//           "Minimum": {
//             "Value": 9.8,
//             "Unit": "C",
//             "UnitType": 17
//           },
//           "Maximum": {
//             "Value": 16.3,
//             "Unit": "C",
//             "UnitType": 17
//           }
//         },
//         "Day": {
//           "Icon": 3,
//           "IconPhrase": "Partly sunny",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Moderate"
//         },
//         "Night": {
//           "Icon": 38,
//           "IconPhrase": "Mostly cloudy",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Light"
//         },
//         "Sources": [
//           "AccuWeather"
//         ],
//         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
//       },
//       {
//         "Date": "2020-01-01T07:00:00+02:00",
//         "EpochDate": 1577854800,
//         "Temperature": {
//           "Minimum": {
//             "Value": 11.3,
//             "Unit": "C",
//             "UnitType": 17
//           },
//           "Maximum": {
//             "Value": 17.6,
//             "Unit": "C",
//             "UnitType": 17
//           }
//         },
//         "Day": {
//           "Icon": 6,
//           "IconPhrase": "Mostly cloudy",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Light"
//         },
//         "Night": {
//           "Icon": 39,
//           "IconPhrase": "Partly cloudy w/ showers",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Moderate"
//         },
//         "Sources": [
//           "AccuWeather"
//         ],
//         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
//       }
//     ]
//   }`)
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
    nightTemp: {
      icon: _get(day.Night, ['Icon'], ''),
      text: _get(day.Night, ['IconPhrase'], ''),
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
