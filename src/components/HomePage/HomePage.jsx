import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Instructions from '../Instructions/Instructions'
import Loader from '../Loader/Loader'
import { fetchRidesDetails, requestAccessCode } from '../../lib/api'
import { ERROR_MSG } from '../../consts'
import { setPinCode, setSelectedRideId, setBookedTicketDetails } from '../../actions'
import Inputs from '../Inputs/Inputs'
import CardsGrid from '../RideCards/CardsGrid'

const styles = {
  homePageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    position: 'relative',
    width: '100%',
    maxWidth: 656,
    boxSizing: 'border-box',
    padding: 16,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 100,
    flexShrink: 0,
    color: 'white',
    fontSize: 30,
    margin: 50,
  },
  '@media all and (max-width: 600px)': {
    title: {
      margin: 7,
      fontSize: 23,
    },
  },
  tm: {
    fontSize: 12,
    whiteSpace: 'pre-wrap',
  },
}

function HomePage(props) {
  const { classes, dispatch, access_code } = props
  const [rides, setRides] = useState([])
  const [isError, setIsError] = useState(false)

  function getRidesDetails() {
    (async () => {
      try {
        setIsError(false)
        const ridesDetails = await fetchRidesDetails()
        setRides(ridesDetails)
      }
      catch (e) {
        setIsError(true)
      }
    })()
  }

  useEffect(getRidesDetails, [])

  async function getAccessCode() {
    try {
      setIsError(false)
      // const ticketDetails = await requestAccessCode()
      // dispatch(setBookedTicketDetails(ticketDetails))
    }
    catch (e) {
      setIsError(true)
    }
  }

  function renderBody() {
    if (isError) {
      return <div>{ERROR_MSG}</div>
    }

    if (!access_code) {
      return [
        <Instructions key="Instructions" />,
        <Inputs key="Inputs" getAccessCode={getAccessCode} />,
        <CardsGrid key="CardsGrid" rides={rides} />,
      ] 
    }

    // return done card
  }

  return (
    <div className={classes.homePageContainer}>
      <div className={classes.title}>
The Jungle
        <span className={classes.tm}>&#153; </span>
FastRide Service
      </div>
      {renderBody()}
    </div>
  )
}

const mapStateToProps = ({ bookedTicketDetails: { access_code } = {}}) => ({ access_code })

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(HomePage)
