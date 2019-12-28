import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Paper from '@material-ui/core/Paper'
import Moment from 'moment'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  cardWrapper: {
    margin: 20,
    display: 'flex',
    padding: 14,
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
  },
  degree: {
    fontSize: 40,
    color: theme.palette.secondary.main,
    marginRight: 20,
    letterSpacing: -2,
  },
  details: {
    flexGrow: 1,
  },
  date: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  text: {
    fontSize: 13,
  },
})

function WeatherDetailsCard(props) {
  const { classes, dayDetails } = props
  const { degree, text, date } = dayDetails
  return (
    <Grid item xs={6} lg={3}>
      <Paper elevation={3} className={classes.cardWrapper}>
        <div className={classes.degree}>{degree}&#176;</div>
        <div className={classes.date}>
          <div>{Moment(date).format('LL')}</div>
          <div className={classes.text}>{text}</div>
        </div> 
      </Paper>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  chosenCityDetails: state.chosenCityDetails
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(WeatherDetailsCard)
