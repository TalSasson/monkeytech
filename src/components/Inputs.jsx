import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withStyles from 'react-jss'
import { setPinCode } from '../actions'
import { BUTTON_HEIGHT } from '../consts'


const styles = {
  inputWrapper: {
    display: 'flex',
    marginTop: 30,
    flexBasis: 46,
    flexShrink: 0,
  },
  pinInput: {
    flexGrow: 1,
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  sendBtn: {
    padding: '0 40px',
    background: '#4c4c4b',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
    cursor: 'pointer',
    userSelect: 'none',
  },
  '@media all and (max-width: 600px)': {
    sendBtn: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: -BUTTON_HEIGHT,
      width: '100vw',
      fontSize: 24,
      height: BUTTON_HEIGHT,
    },
  },
}

function Inputs(props) {
  const {
    classes, dispatch, pinCode, selectedRideId, getAccessCode, buttonRef,
  } = props

  function handleBlur(e) {
    const { target: { value } } = e
    dispatch(setPinCode((value)))
  }

  return (
    <div className={classes.inputWrapper}>
      <input
        type="text"
        className={classes.pinInput}
        placeholder="#PIN"
        onBlur={handleBlur}
        defaultValue={pinCode}
      />
      <button
        className={classes.sendBtn}
        disabled={!pinCode || !selectedRideId}
        onClick={getAccessCode}
        ref={buttonRef}
      >
            Submit
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pinCode: state.pinCode,
  selectedRideId: state.selectedRideId,
})


export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(Inputs)
