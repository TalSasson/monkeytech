import React from 'react'
import withStyles from 'react-jss'
import ticket from '../assets/ticket.png'
import clock from '../assets/clock.png'
import submitArrow from '../assets/submitArrow.png'
import { THEME } from '../consts'
import IconMessage from './IconMessage'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: '1 0 auto', // safari flex-wrap bug
  },
}

const instructionsContent = [
  {
    src: ticket,
    alt: 'ticket',
    message: 'Enter your park ticket #PIN number, then select the desired ride while noting the stated return time',
  },
  {
    src: submitArrow,
    alt: 'submit arrow',
    message: 'Press "submit" to confirm and retrieve your access code',
  },
  {
    src: clock,
    alt: 'clock',
    message: 'When the time comes, use the special fastRider line to cut out a considerable wait time',
  },
]

function Instructions(props) {
  const { classes } = props

  return (
    <div className={classes.container}>
      {instructionsContent.map(instruction => (
        <IconMessage src={instruction.src} alt={instruction.alt} message={instruction.message} />
      ))}
    </div>
  )
}

export default withStyles(styles)(Instructions)
