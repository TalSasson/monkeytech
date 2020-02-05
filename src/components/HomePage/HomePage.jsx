import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'

const styles = (theme) => ({
  homePageContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto',
    position: 'relative',
  },
  tryAgainBtn: {
    marginTop: 10,
    border: `2px solid ${theme.palette.primary.main}`,
    padding: '5px 15px',
    borderRadius: 5,
    cursor: 'pointer',
  },
})

function HomePage(props) {
  const { classes } = props

  return (
    <div className={classes.homePageContainer}>
    </div>
  )
}

const mapStateToProps = (state) => ({
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(HomePage)
