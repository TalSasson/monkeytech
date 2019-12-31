import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { ROUTES } from '../../consts'
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import Favorites from '../Favorites/Favorites'
import bg from '../../assets/bg.jpeg'

const styles = {
  weatherContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${bg})`,
    backgroundSize: 'cover',
  },
}

function Weather(props) {
  const { classes } = props

  return (
    <div className={classes.weatherContainer}>
      <Header />
      <Switch>
        <Route exect path={ROUTES.home} component={HomePage} />
        <Route exect path={ROUTES.favorites} component={Favorites} />
        <Route path="/" render={() => <Redirect to="/home" />} />
      </Switch>
    </div>
  )
}

export default withStyles(styles)(Weather)
