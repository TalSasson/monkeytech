const weatherUrl = 'http://dataservice.accuweather.com'
const imageUrl = 'https://developer.accuweather.com/sites/default/files'
const DEFAULT_LOCATION = { label: 'Tel Aviv', key: '215854', country: 'Israel' }
const ERROR_MSG = 'Sorry, unable to fetch data'

const ROUTES = {
  home: '/home',
  favorites: '/favorites',
}

const API_KEY = process.env.REACT_APP_API_KEY || 'ffpsC7tB7gMx6M5wpLeetkQxLXrwLF6V'


export {
  weatherUrl,
  imageUrl,
  DEFAULT_LOCATION,
  ROUTES,
  ERROR_MSG,
  API_KEY,
}
