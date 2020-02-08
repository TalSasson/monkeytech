import React from 'react'
import withStyles from 'react-jss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import tick from '../assets/tick.png'
import { THEME } from '../consts'
import IconMessage from './IconMessage'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    maxWidth: 280,
    '& > div': {
        width: '100%',
    },
  },
  lineColor: {
    background: ({ bookedTicketDetails: { ride: { zone: { color } } } }) => (color),
    flexBasis: 5,
    flexShrink: 0,
  },
  ticketDetailsWrapper: {
    width: '100%',
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    background: THEME.cardBackground,
    boxSizing: 'border-box',
    color: THEME.text,
    margin: 20,
    outline: 'none',
    cursor: 'pointer',
  },
  rideDetailsWrapper: {
    padding: 6,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    fontSize: 14,
  },
  zoneWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  returnTimeWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px 0',
  },
  accesCodeWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rideName: {
    fontWeight: 'bold',
    color: 'white',
  },
  emphasisText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
}

const iconMessageContent = {
    src: tick,
    alt: 'tick',
    message: 'Thank you for using The Jungle FastRider ticket system - your access code is now ready!'
}


function BookedRide(props) {
  const { classes, bookedTicketDetails } = props
  const { ride: { zone: { name: zoneName }, name }, return_time, access_code } = bookedTicketDetails
  return (
    <div className={classes.container}>
      <IconMessage src={iconMessageContent.src} alt={iconMessageContent.alt} message={iconMessageContent.message} />
      <div className={classes.ticketDetailsWrapper}>
        <div className={classes.lineColor} />
        <div className={classes.rideDetailsWrapper}>
          <div className={classes.zoneWrapper}>
            <div className={classes.rideName}>{name}</div>
            <div className={classes.zone}>{zoneName}</div>
          </div>
          <div className={classes.returnTimeWrapper}>
            <div className={classes.returnAt}>Return At</div>
            <div className={classes.emphasisText}>
              {`${new Date(return_time).getHours()}:${new Date(return_time).getMinutes()}`}
            </div>
          </div>
          <div className={classes.accesCodeWrapper}>
            <div>Use Access Code</div>
            <div className={classes.emphasisText}>{access_code}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ bookedTicketDetails = {} }) => ({ bookedTicketDetails })

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(BookedRide)
