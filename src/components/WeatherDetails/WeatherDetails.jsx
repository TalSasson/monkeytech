import React from 'react'
import { withStyles } from '@material-ui/core/styles'
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
    [theme.breakpoints.up('md')]: {
      margin: '0 30px',
      fontSize: 20,
    },
  },
  dayName: {
    color: 'black',
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      width: 60,
    },
    [theme.breakpoints.up('sm')]: {
      width: 100,
    },
    margin: '12px 0',
  },
  bold: {
    fontWeight: 'bold',
  },
  minTemp: {
    fontWeight: 'bold',
  },
})

function WeatherDetails(props) {
  const { classes, dayDetails, currDay } = props
  const { temp, dayTemp, date } = dayDetails
  const { min: minTemp, max: maxTemp } = temp

  return (
    <div className={classes.cardWrapper}>
      <div className={`${classes.dayName} ${currDay ? classes.bold : ''}`}>
        {new Date(date).toString().split(' ')[0]}
      </div>
      <img
        src={`${imageUrl}/${dayTemp.icon.toString().padStart(2, '0')}-s.png`}
        alt="daily weather icon"
        className={classes.icon}
      />
      <div>
        <span className={classes.minTemp}>
          {Math.round(minTemp)}
        &#176;

        </span>
        {' '}
/
        {' '}
        {Math.round(maxTemp)}
        &#176;
      </div>
    </div>
  )
}

export default withStyles(styles)(WeatherDetails)
