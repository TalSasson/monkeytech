import _get from 'lodash/get'
import { store } from '../store'
import { setCityName, setCityDetails } from '../actions'

async function fetchSelectedOptionDetails(e, value) {
    const { label, cityKey } = value
    store.dispatch(setCityName(label))
    // const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=awM6pDci3i4lGcDFhVGHqPMLgeAYIehb`)
    // const currentWeatherDetails = await response.json()
    const currWeather = JSON.parse(`{"currentWeatherDetails":[{"LocalObservationDateTime":"2019-12-28T02:00:00+03:00","EpochTime":1577487600,"WeatherText":"Some clouds","WeatherIcon":36,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":false,"Temperature":{"Metric":{"Value":12.5,"Unit":"C","UnitType":17},"Imperial":{"Value":54,"Unit":"F","UnitType":18}},"MobileLink":"http://m.accuweather.com/en/ye/asdas/354547/current-weather/354547?lang=en-us","Link":"http://www.accuweather.com/en/ye/asdas/354547/current-weather/354547?lang=en-us"}]}`)
    const { currentWeatherDetails } = currWeather || {}
    const { WeatherText, Temperature } = currentWeatherDetails[0] || []
    const currWeatherInfo = {
      currWeatherInfo: {
        temp: _get(Temperature, ['Metric', 'Value'], ''),
        description: WeatherText,
      }
    }
    store.dispatch(setCityDetails(currWeatherInfo))
}

export {
  fetchSelectedOptionDetails,
}