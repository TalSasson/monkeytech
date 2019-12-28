import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'

const styles = theme => ({
  currWeatherWrapper: {
    display: 'flex',
    userSelect: 'none',
  },
  icon: {
    border: '1px solid',
    width: 60,
    height: 60,
    margin: '0 25px',
  },
  cityName: {
    fontSize: 18,
  },
})

function CurrentWeather(props) {
  const { classes, chosenCityDetails } = props
  const { name, degree } = chosenCityDetails

  return (
    <div className={classes.currWeatherWrapper}>
      <div className={classes.icon}></div>
      <div className={classes.details}>
        <div className={classes.cityName}>{name}</div>
        <div className={classes.degree}>{degree}&#176;</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  chosenCityDetails: state.chosenCityDetails
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(CurrentWeather)
