import React from 'react'
import withStyles from 'react-jss'
import ticket from '../../assets/ticket.png'
import clock from '../../assets/clock.png'
import submitArrow from '../../assets/submitArrow.png'

const styles = {
  instructionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 160,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media (max-width: 600px)': {
    instructionWrapper: {
      flexBasis: '100%',
      margin: '16px 0',
    },
  },
  content: {
    marginTop: 17,
    textAlign: 'center',
    color: '#656565',
  },
  img: {
    width: 35,
    border: '1px solid #373737',
    background: '#373737',
    display: 'inline-flex',
    borderRadius: '50%',
    padding: 5,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  '@media all and (max-width: 1000px) and (min-width: 700px)': {

  },
}

function Instructions(props) {
  const { classes } = props

  return (
    <div className={classes.container}>
      <div className={classes.instructionWrapper}>
        <img src={ticket} alt="ticket" className={classes.img} />
        <div className={classes.content}>
            Enter your park ticket #PIN number,
          then select the desired ride while noting the stated return time
        </div>
      </div>
      <div className={classes.instructionWrapper}>
        <img src={submitArrow} alt="submit arrow" className={classes.img} />
        <div className={classes.content}>
            Press &apos;submit&apos; to confirm and retrieve your access code
        </div>
      </div>
      <div className={classes.instructionWrapper}>
        <img src={clock} alt="clock" className={classes.img} />
        <div className={classes.content}>
            When the time comes, use the special fastRider line to cut out a considerable wait time
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Instructions)
