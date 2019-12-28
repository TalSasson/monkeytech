import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'

const styles = () => ({
  currWeatherWrapper: {
    display: 'flex',
    userSelect: 'none',
    flexGrow: 1,
  },
  imgWrapper: {
    border: '1px solid',
    width: 60,
    height: 60,
    margin: '0 25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
  },
  cityName: {
    fontSize: 18,
  },
})

function CurrentWeather(props) {
  const { classes, city: { label: cityName }, cityDetails } = props
  const { currWeatherInfo } = cityDetails || {}
  const { temp, description, img } = currWeatherInfo || {}

  return (
    <div className={classes.currWeatherWrapper}>
      <div className={classes.imgWrapper}>
        {img
        && (
        <img
          src={img}
          alt="weather icon"
          className={classes.img}
        />
        )}
      </div>
      <div className={classes.details}>
        <div className={classes.cityName}>{cityName}</div>
        <div className={classes.degree}>
          {temp}
&#176;
        </div>
        <div>{description}</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  city: state.city,
  cityDetails: state.cityDetails,
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(CurrentWeather)
