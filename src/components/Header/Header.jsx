import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setCurrentPage } from '../../actions'

const TITLE = 'Herolo weather task'

const styles = () => ({
  title: {
    flexGrow: 1,
  },
  btnsWrapper: {
    display: 'flex',
  },
})

function Header(props) {
  const { classes, currentPage } = props

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {TITLE}
        </Typography>
        <Button
          color={currentPage === 'home' ? 'secondary' : ''}
          variant="text"
          onClick={() => props.setCurrentPage('home')}
        >
          Home
        </Button>
        <Button
          color={currentPage === 'favorites' ? 'secondary' : ''}
          variant="text"
          onClick={() => props.setCurrentPage('favorites')}
        >
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
})

export default compose(
  connect(mapStateToProps, { setCurrentPage }),
  withStyles(styles),
)(Header)
