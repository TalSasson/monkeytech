import React from 'react'
import withStyles from 'react-jss'
import ticket from '../../assets/ticket.png'
import clock from '../../assets/clock.png'

const styles = {
  bottomDetailsLine: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 9px',
    fontWeight: 'bold',
    fontSize: 15,
  },
  selectedCard: {
    background: ({ card: { zone: { color } } }) => (color),
  },
  returnTimeWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftTickectsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  img: {
    width: 17,
    marginRight: 5,
  },
  rideDetails: {
    width: 150,
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    background: '#373737',
    boxSizing: 'border-box',
    color: '#656565',
    margin: 4,
    outline: 'none',
    cursor: 'pointer',
  },
  '@media (max-width: 600px)': {
    rideDetails: {
      width: 'calc((100vw - 41px) / 2)',
      height: 'calc((100vw - 41px) / 2)',
    },
  },
  rideName: {
    color: 'white',
    fontSize: 24,
    margin: '20px 0',
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    padding: '5px 5px 10px 5px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  zone: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 15,
  },
  lineColor: {
    background: ({ card: { zone: { color } } }) => (color),
    height: 5,
  },
}

function RideCard(props) {
  const {
    classes, card, onClick, isSelected,
  } = props

  return (
    <div
      role="button"
      tabIndex={0}
      className={`${classes.rideDetails} ${isSelected ? classes.selectedCard : ''}`}
      onClick={onClick}
    >
      <div className={classes.lineColor} />
      <div className={classes.content}>
        <div className={classes.zone}>{card.zone.name}</div>
        <div className={classes.rideName}>{card.name}</div>
        <div className={classes.bottomDetailsLine}>
          <div className={classes.returnTimeWrapper}>
            <img src={clock} alt="return time" className={classes.img} />
            <div>{`${new Date(card.return_time).getHours()}:${new Date(card.return_time).getMinutes()}`}</div>
          </div>
          <div className={classes.leftTickectsWrapper}>
            <img src={ticket} alt="remaining tickects" className={classes.img} />
            <div>{card.remaining_tickets}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(RideCard)
