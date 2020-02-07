import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withStyles from 'react-jss'
import { setPinCode } from '../../actions'


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
  },
  '@media all and (max-width: 600px)': {
    sendBtn: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      fontSize: 24,
      height: 80,
    },
  },
}

function Inputs(props) {
  const {
    classes, dispatch, pinCode, selectedRideId, getAccessCode,
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
