import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { imageUrl } from '../../consts'

const styles = (theme) => ({
  cardWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#9b9b9b',
    [theme.breakpoints.down('sm')]: {
      margin: '0 5px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      margin: '0 10px',
      fontSize: 12,
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 30px',
      fontSize: 20,
    },
  },
  dayName: {
    color: 'black',
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      width: 60,
    },
    [theme.breakpoints.up('sm')]: {
      width: 100,
    },
    margin: '12px 0',
  },
})

function WeatherDetailsCard(props) {
  const { classes, dayDetails } = props
  const { temp, dayTemp, date } = dayDetails
  const { min: minTemp, max: maxTemp } = temp

  return (
    <div className={classes.cardWrapper}>
      <div className={classes.dayName}>{new Date(date).toString().split(' ')[0]}</div>
      <img
        src={`${imageUrl}/${dayTemp.icon.toString().padStart(2, '0')}-s.png`}
        alt="daily weather icon"
        className={classes.icon}
      />
      <div>
        {Math.round(minTemp)}
        &#176; /
        {' '}
        {Math.round(maxTemp)}
        &#176;
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  chosenCityDetails: state.chosenCityDetails,
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(WeatherDetailsCard)
