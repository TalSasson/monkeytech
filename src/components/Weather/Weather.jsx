import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { ROUTES } from '../../consts'
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import Favorites from '../Favorites/Favorites'
import bg from '../../assets/bg.jpeg'

const PAGES = {
  home: 'home',
  favorites: 'favorites',
}

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
  const { classes, currentPage } = props

  function renderCurrentPage() {
    switch (currentPage) {
      case PAGES.home:
        return <HomePage />
      case PAGES.favorites:
        return <Favorites />
      default:
        return <HomePage />
    }
  }

  return (
    <div className={classes.weatherContainer}>
      <Header />
      {renderCurrentPage()}
      {/* <Switch>
        <Route exect path={ROUTES.home} component={HomePage} />
        <Route exect path={ROUTES.favorites} component={Favorites} />
        <Route path="/" render={() => <Redirect to="/home" />} />
      </Switch> */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(Weather)

// export default withStyles(styles)(Weather)
