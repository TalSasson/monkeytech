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

const styles = theme => ({
  headerContainer: {
    height: 60,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `0 ${theme.spacing.unit * 4}`,
    boxShadow: '0 2px 10px -3px rgba(0,0,0,0.52)',
  },
  title: {
    flexGrow: 1,
  },
  btnsWrapper: {
    display: 'flex',
  },
  headerBtn: {
    border: '1px solid white',
    cursor: 'pointer',
    margin: '0 5px',
    padding: theme.spacing.unit,
    width: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    boxShadow: '0 1px 10px 1px rgba(236, 227, 227, 1)',
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
  currentPage: state.currentPage
})

export default compose(
  connect(mapStateToProps, { setCurrentPage }),
  withStyles(styles),
)(Header)
