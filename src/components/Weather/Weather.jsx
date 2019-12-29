import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from '../Header/Header'
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
    </div>
  )
}

export default withStyles(styles)(Weather)
