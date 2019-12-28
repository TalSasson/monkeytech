import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import AutoComplete from '../AutoComplete/AutoComplete'
import { setCityDetails } from '../../actions'
import { fetchCurrentCityWeather, fetchForecastDetails } from '../../lib/api'
import Forecast from '../Forecast/Forecast'

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
})

function HomePage(props) {
  const { classes, city: { key = '' } } = props
  const [isLoader, isShowLoader] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  function getCityWeather() {
    if (!key) return
    (async () => {
      try {
        isShowLoader(true)
        await fetchCurrentCityWeather(key)
        await fetchForecastDetails(key)
        isShowLoader(false)
        setErrorMsg('')
      }
      catch (e) {
        isShowLoader(false)
        props.setCityDetails({})
        setErrorMsg('Sorry, unable to fetch data')
      }
    })()
  }

  useEffect(getCityWeather, [key])

  function renderBodyWeather() {

    if (isLoader) {
        return <CircularProgress className={classes.progress} />
    }
    if (errorMsg) {
        return (
            <div className={classes.errorWrapper}>
              <div>{errorMsg}</div>
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
        <CurrentWeather key="currentWeather"/>,
        <Forecast key="forecast" />
    ]
  }

  return (
    <div className={classes.homePageContainer}>
      <AutoComplete />
      <div className={`${classes.weatherDetailsContainer} ${isLoader ? classes.loader : ''}`} elevation={3}>
        {renderBodyWeather()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  city: state.city,
})

export default compose(
  connect(mapStateToProps, { setCityDetails }),
  withStyles(styles),
)(HomePage)
