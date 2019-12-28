import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import { compose } from 'redux'
import WeatherDetailsCard from '../WeatherDetailsCard/WeatherDetailsCard'
import Grid from '@material-ui/core/Grid'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import AutoComplete from '../AutoComplete/AutoComplete'
import { fetchSelectedOptionDetails } from '../../lib/api'

const styles = theme => ({
  homePageContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto',
  },
  weatherDetailsContainer: {
    display: 'flex',
    margin: '0 50px 20px 50px',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '60px 20px',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})

function HomePage(props) {
  const { classes, chosenCityDetails } = props
  const { dailyForecasts } = chosenCityDetails

  return (
    <div className={classes.homePageContainer}>
      <AutoComplete onChange={fetchSelectedOptionDetails} />
      <Paper className={classes.weatherDetailsContainer} elevation={3}>
        <CurrentWeather />
        <Grid container>
          <div className={classes.cards}>
            {dailyForecasts.map(item => (
              <WeatherDetailsCard dayDetails={item} />
            ))}
          </div>
        </Grid>
      </Paper>
    </div>
  )
}

const mapStateToProps = (state) => ({
    chosenCityDetails: state.chosenCityDetails
  })
  
  export default compose(
    connect(mapStateToProps),
    withStyles(styles),
  )(HomePage)
