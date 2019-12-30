import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'

const styles = (theme) => ({
  currWeatherWrapper: {
    display: 'flex',
    flexDirection: 'column',
    userSelect: 'none',
    flexGrow: 1,
    color: 'white',
    alignItems: 'end',
    margin: '0 50px',
    fontWeight: 'lighter',
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
  description: {
    fontSize: 30,
  },
  cityName: {
    fontSize: 50,
    [theme.breakpoints.down('sm')]: {
      fontSize: 37,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 50,
    },
  },
  tempIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'lighter',
    marginTop: 20,
  },
  degree: {
    fontSize: 85,
    [theme.breakpoints.down('sm')]: {
      fontSize: 65,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 85,
    },
  },
})

function CurrentWeather(props) {
  const { classes, city: { label: cityName, country }, cityDetails } = props
  const { currWeatherInfo } = cityDetails || {}
  const { temp, description, img } = currWeatherInfo || {}

  return (
    <div className={classes.currWeatherWrapper}>
      <div className={classes.cityName}>{`${cityName}, ${country}`}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.tempIconWrapper}>
        {img
        && (
        <img
          src={img}
          alt="weather icon"
          className={classes.img}
        />
        )}
        <div className={classes.degree}>
          {Math.round(temp)}
          &#176;
        </div>
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
