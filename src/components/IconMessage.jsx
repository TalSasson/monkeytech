import React from 'react'
import withStyles from 'react-jss'
import { THEME } from '../consts'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 160,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media (max-width: 600px)': {
    container: {
      flexBasis: '100%',
      margin: '16px 0',
    },
  },
  content: {
    marginTop: 17,
    textAlign: 'center',
    color: THEME.text,
  },
  img: {
    width: 35,
    border: `1px solid ${THEME.cardBackground}`,
    background: THEME.cardBackground,
    display: 'inline-flex',
    borderRadius: '50%',
    padding: 5,
  },
}

function IconMessage(props) {
  const { classes, src, alt, message } = props

  return (
    <div className={classes.container}>
      <img src={src} alt={alt} className={classes.img} />
      <div className={classes.content}>
        {message}
      </div>
    </div>
  )
}

export default withStyles(styles)(IconMessage)
