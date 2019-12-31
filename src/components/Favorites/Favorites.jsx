import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/DeleteOutline'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import { compose } from 'redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { setCity, removeFavoriteCity, setCurrentPage } from '../../actions'
import { ROUTES, ERROR_MSG } from '../../consts'
import { fetchCityWeather } from '../../lib/api'

const styles = (theme) => ({
  favoritesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 32,
    flexGrow: 1,
  },
  city: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '10px 20px',
    outline: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: 10,
    },
    boxSizing: 'border-box',
    alignItems: 'center',
    cursor: 'pointer',
    background: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
    boxShadow: '0 6px 4px rgba(0,0,0,0.5)',
    border: '1px solid white',
    color: 'white',
  },
  cityName: {
    fontSize: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 17,
    },
  },
  detailsWrapper: {
    display: 'flex',
  },
  img: {
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      margin: '10px 0',
    },
  },
  tempDesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 100,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      width: 75,
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
    background: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
    '& > svg': {
      fill: 'white',
      padding: 3,
    },
  },
  errorWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
  },
  tryAgainBtn: {
    border: '2px solid #29aec8',
    cursor: 'pointer',
    padding: '5px 15px',
    marginTop: 10,
    borderRadius: 5,
  },
  noFavoritesContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  noFavoritesCard: {
    color: 'white',
    padding: 32,
    background: 'rgba(0,0,0,0.45)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    border: '1px solid white',
    textAlign: 'center',
    lineHeight: 2,
  },
})

function Favorites(props) {
  const { classes, favoriteCities = [] } = props
  const [isLoader, setIsLoader] = useState(true)
  const [isError, setIsError] = useState(false)
  const [favCitiesInfo, setFavCitiesInfo] = useState({})

  function handleCityClick(city) {
    props.setCity(city)
    // props.setCurrentPage('home')
    props.history.push(ROUTES.home)
  }

  function getCityWeather() {
    (async () => {
      try {
        setIsLoader(true)
        const cities = await Promise.all(favoriteCities.map((city) => fetchCityWeather(city.key)))
        const citiesInfo = cities.reduce((acc, info, i) => ({
          ...acc,
          [favoriteCities[i].key]: info,
        }), {})
        if (favoriteCities.length && !Object.keys(citiesInfo).length) {
          throw new Error()
        }
        setFavCitiesInfo(citiesInfo)
        setIsError(false)
      }
      catch (e) {
        setIsError(true)
      }
      finally {
        setIsLoader(false)
      }
    })()
  }

  useState(getCityWeather, [favoriteCities])

  function renderRemoveIcon(key) {
    return (
      <Paper
        elevation={3}
        className={classes.removeIcon}
        onClick={() => {
          props.removeFavoriteCity(key)
        }}
      >
        <DeleteIcon />
      </Paper>
    )
  }

  function renderNoFavorites() {
    return (
      <div className={classes.noFavoritesContainer}>
          <div className={classes.noFavoritesCard}>
            You don't have favorites yet, try to add one in the home page
          </div>
      </div>
    )
  }

  function renderCities() {
    if (!favoriteCities.length) {
      return renderNoFavorites()
    }
    return favoriteCities.map((city) => (
      <div key={city.key} className={classes.favCityContainer}>
        <div
          className={classes.city}
          role="button"
          tabIndex={0}
          onClick={() => handleCityClick(city)}
        >
          <div className={classes.cityName}>{city.label}</div>
          <div className={classes.detailsWrapper}>
            {favCitiesInfo[city.key].img
            && (
            <img
              src={favCitiesInfo[city.key].img}
              alt="weather icon"
              className={classes.img}
            />
            )}
            <div className={classes.tempDesWrapper}>
              <div className={classes.temp}>
                {Math.round(favCitiesInfo[city.key].temp)}
                  &#176;
              </div>
              <div className={classes.description}>{favCitiesInfo[city.key].description}</div>
            </div>
          </div>
        </div>
        {renderRemoveIcon(city.key)}
      </div>
    ))
  }

  function renderFavBody() {
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
    return renderCities()
  }

  return (
    <div className={classes.favoritesWrapper}>
      {renderFavBody()}
    </div>
  )
}

const mapStateToProps = (state) => ({
  favoriteCities: state.favoriteCities,
  cityDetails: state.cityDetails,
})

export default compose(
  connect(mapStateToProps, { setCity, removeFavoriteCity, setCurrentPage }),
  withStyles(styles),
)(Favorites)
