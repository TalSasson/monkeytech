import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setCurrentPage } from '../../actions'

import HomePage from '../HomePage/HomePage'
import Favorites from '../Favorites/Favorites'

const TITLE = 'Herolo weather task'

const styles = (theme) => ({
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 20,
    },
  },
  btnsWrapper: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
  },
})

function Header(props) {
  const { classes, currentPage } = props

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {TITLE}
          </Typography>
          <Link to="/home" className={classes.link}>
            <Button
              color={currentPage === 'home' ? 'secondary' : ''}
              variant="text"
              onClick={() => props.setCurrentPage('home')}
            >
              Home
            </Button>
          </Link>
          <Link to="/favorites" className={classes.link}>
            <Button
              color={currentPage === 'favorites' ? 'secondary' : ''}
              variant="text"
              onClick={() => props.setCurrentPage('favorites')}
            >
            Favorites
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
})

export default compose(
  connect(mapStateToProps, { setCurrentPage }),
  withStyles(styles),
)(Header)
