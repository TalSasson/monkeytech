import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import AutoComplete from '../AutoComplete/AutoComplete'
import { setCityDetails, setFavoriteCities } from '../../actions'
import { updateCurrentCityWeather, updateForecast, fetchAutoCompleteOptions } from '../../lib/api'
import Forecast from '../Forecast/Forecast'
import { ERROR_MSG } from '../../consts'

const styles = (theme) => ({
  homePageContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto',
    position: 'relative',
  },
  weatherDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
  loader: {
    alignItems: 'center',
  },
  errorWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  tryAgainBtn: {
    marginTop: 10,
    border: `2px solid ${theme.palette.primary.main}`,
    padding: '5px 15px',
    borderRadius: 5,
    cursor: 'pointer',
  },
  heartImg: {
    position: 'absolute',
    fill: 'white',
    right: 0,
    margin: 50,
    width: 35,
    height: 35,
    cursor: 'pointer',
    '&:hover': {
      fill: 'red',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '42px 20px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      margin: 50,
    },
  },
})

function HomePage(props) {
  const { classes, city: { key = '', label }, favoriteCities } = props
  const [isLoader, isShowLoader] = useState(false)
  const [isError, setIsError] = useState('')

  function getCityWeather() {
    if (!key) return
    (async () => {
      try {
        isShowLoader(true)
        await fetchAutoCompleteOptions(label)
        await updateCurrentCityWeather(key)
        await updateForecast(key)
        isShowLoader(false)
        setIsError(false)
      }
      catch (e) {
        isShowLoader(false)
        props.setCityDetails({})
        setIsError(true)
      }
    })()
  }

  useEffect(getCityWeather, [key])

  function renderBodyWeather() {
    if (isLoader) {
      return <CircularProgress className={classes.progress} />
    }
    if (isError) {
      return (
        <div className={classes.errorWrapper}>
          <div>{ERROR_MSG}</div>
          <div
            onClick={getCityWeather}
            className={classes.tryAgainBtn}
            tabIndex={0}
            role="button"
          >
            Try again
          </div>
        </div>
      )
    }
    return [
      <CurrentWeather key="currentWeather" />,
      <Forecast key="forecast" />,
    ]
  }

  return (
    <div className={classes.homePageContainer}>
      <FavoriteBorderIcon
        className={classes.heartImg}
        onClick={() => {
          if (props.city.key && !favoriteCities.find((city) => city.key === props.city.key)) {
            props.setFavoriteCities(props.city)
          }
        }}
      />
      <AutoComplete />
      <div className={`${classes.weatherDetailsContainer} ${isLoader ? classes.loader : ''}`} elevation={3}>
        {renderBodyWeather()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  city: state.city,
  favoriteCities: state.favoriteCities,
})

export default compose(
  connect(mapStateToProps, { setCityDetails, setFavoriteCities }),
  withStyles(styles),
)(HomePage)
