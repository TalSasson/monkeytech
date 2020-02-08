const TOKEN = process.env.REACT_APP_TOKEN || '433898df4a3e992b8411004109e4d574a90695e39e'
const FAST_RIDER_URL = 'http://fast-rider.herokuapp.com/api/v1'
const ERROR_MSG = 'Sorry, unable to fetch data'
const LOCAL_STORAGE_KEY = 'fastRider-pinCode'

const THEME = {
  text: '#656565',
  cardBackground: '#373737',
}

const BUTTON_HEIGHT = 80

export {
  TOKEN,
  FAST_RIDER_URL,
  ERROR_MSG,
  THEME,
  LOCAL_STORAGE_KEY,
  BUTTON_HEIGHT,
}
