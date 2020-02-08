import React from 'react'
import withStyles from 'react-jss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Loader from '../Loader'
import RideCard from './RideCard'
import { setSelectedRideId } from '../../actions'


const styles = {
  ridesCardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: '10px -4px 30px',
    flex: '1 0 auto',
  },
  '@media all and (max-width: 600px)': {
    ridesCardsWrapper: {
        paddingBottom: 150,
        boxSizing: 'border-box',
    }
  }
}

function CardsGrid(props) {
  const {
    classes, dispatch, rides, selectedRideId,
  } = props

  function handleRideCardClick(rideId) {
    dispatch(setSelectedRideId(rideId))
  }

  return (
    <div className={classes.ridesCardsWrapper}>
      {!rides.length && <Loader />}
      {rides.map((ride) => (
        <RideCard
          card={ride}
          key={ride.id}
          onClick={() => handleRideCardClick(ride.id)}
          isSelected={selectedRideId === ride.id}
        />
      ))}
    </div>
  )
}

const mapStateToProps = ({ selectedRideId }) => ({ selectedRideId })


export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(CardsGrid)
