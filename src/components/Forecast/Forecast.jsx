import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import uuid from 'uuid'
import WeatherDetails from '../WeatherDetails/WeatherDetails'

const styles = (theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    minHeight: 200,
    maxHeight: 200,
    [theme.breakpoints.down('xs')]: {
      minHeight: 185,
      maxHeight: 185,
    },
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    zIndex: 1,
    justifyContent: 'center',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  bgWave: {
    width: '100%',
    height: 300,
    position: 'absolute',
    bottom: 0,
    transform: 'rotate(180deg)',
    fill: 'white',
    filter: 'drop-shadow(0 1px 10px #00000055)',
  },
  bgWaveBehind: {
    transform: 'rotate(180deg) scaleX(-1)',
    fill: theme.palette.primary.main,
  },
})

function HomePage(props) {
  const { classes, cityDetails } = props

  return (
    <div className={classes.container}>
      <svg
        className={`${classes.bgWave} ${classes.bgWaveBehind}`}
        viewBox="0 0 500 165"
        preserveAspectRatio="xMaxYMax slice"
      >
        <path className="back" d="M0,120 C250,250 300,0 560,180 L500,00 L0,0 Z" />
      </svg>
      <svg className={classes.bgWave} viewBox="0 0 500 165" preserveAspectRatio="xMaxYMax slice">
        <path className="back" d="M0,120 C250,250 300,0 960,180 L500,00 L0,0 Z" />
      </svg>
      <div className={classes.cards}>
        {cityDetails.forecast.map((item, i) => (
          <WeatherDetails dayDetails={item} key={uuid.v4()} currDay={!i} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cityDetails: state.cityDetails,
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(HomePage)
