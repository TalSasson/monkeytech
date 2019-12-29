import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setCity, setCurrentPage, removeFavoriteCity } from '../../actions'

const styles = (theme) => ({
  favoritesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  city: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '0 20px',
    boxSizing: 'border-box',
    alignItems: 'center',
    cursor: 'pointer',
    background: 'white',
    borderRadius: 10,
    boxShadow: '0 6px 4px rgba(0,0,0,0.5)',
  },
  cityName: {
    fontSize: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  detailsWrapper: {
    display: 'flex',
  },
  img: {
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      margin: 10,
    },
  },
  tempDesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  description: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  temp: {
    fontSize: 30,
  },
  favCityContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '20px 0',
  },
  removeIcon: {
    display: 'flex',
    marginTop: 4,
    marginLeft: 15,
    background: 'red',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
    '& > svg': {
      fill: 'white',
      padding: 3,
    },
  },
})

function Favorites(props) {
  const { classes, favoriteCities, cityDetails: { currWeatherInfo } } = props
  const { temp, description, img } = currWeatherInfo || {}

  return (
    <div className={classes.favoritesWrapper}>
      {favoriteCities.map((city) => (
        <div key={city.key} className={classes.favCityContainer}>
          <div
            className={classes.city}
            role="button"
            tabIndex={0}
            onClick={() => {
              props.setCityDetails('country', '')
              props.setCityDetails('currWeatherInfo', {})
              props.setCityDetails('forecast', [])
              props.setCity({ label: city.label, key: city.key })
              props.setCurrentPage('home')
            }}
          >
            <div className={classes.cityName}>{city.label}</div>
            <div className={classes.detailsWrapper}>
              {img
            && (
            <img
              src={img}
              alt="weather icon"
              className={classes.img}
            />
            )}
              <div className={classes.tempDesWrapper}>
                <div className={classes.temp}>
                  {Math.round(temp)}
                  &#176;
                </div>
                <div className={classes.description}>{description}</div>
              </div>
            </div>
          </div>
          <Paper
            elevation={3}
            className={classes.removeIcon}
            onClick={() => {
              props.removeFavoriteCity(city.key)
            }}
          >
            <DeleteIcon />
          </Paper>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  favoriteCities: state.favoriteCities,
  cityDetails: state.cityDetails,
})

export default compose(
  connect(mapStateToProps, { setCity, setCurrentPage, removeFavoriteCity }),
  withStyles(styles),
)(Favorites)
