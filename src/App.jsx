import React, { useState, useEffect, useRef } from 'react'
import withStyles from 'react-jss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Instructions from './components/Instructions'
import { fetchRidesDetails, requestAccessCode } from './lib/api'
import { ERROR_MSG, LOCAL_STORAGE_KEY, THEME, BUTTON_HEIGHT } from './consts'
import { setBookedTicketDetails } from './actions'
import Inputs from './components/Inputs'
import CardsGrid from './components/RideCards/CardsGrid'
import BookedRide from './components/BookedRide'

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    overflowY: 'scroll',
  },
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
    margin: 15,
  },
  '@media all and (max-width: 600px)': {
    title: {
      margin: 7,
      fontSize: 20,
    },
  },
  tm: {
    fontSize: 12,
    whiteSpace: 'pre-wrap',
  },
  errorWrapper: {
    display: 'flex',
    flexDirection: 'column',
    color: THEME.text,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    alignSelf: 'center',
  },
  errorIcon: {
    borderRadius: '50%',
    background: THEME.cardBackground,
    width: 47,
    height: 47,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
    fontSize: 18,
  },
  tryAgainBtn: {
    padding: '10px 30px',
    background: '#4c4c4b',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
    cursor: 'pointer',
    userSelect: 'none',
  },
}

function App(props) {
  const {
    classes, dispatch, access_code, pinCode,
  } = props
  const [rides, setRides] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const buttonRef = useRef(null)
  const appContainerRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 600) return
    if (errorMsg || access_code) {
      appContainerRef.current.removeEventListener('scroll', updateButtonVisibilityByScroll)
      return
    }
    appContainerRef.current.addEventListener('scroll', updateButtonVisibilityByScroll)
  },[errorMsg, access_code])

  function updateButtonVisibilityByScroll() {
    if (!buttonRef.current) return
    const { scrollTop } = appContainerRef.current
      let resultBottom = 0
      if (scrollTop < 0) return
      if (scrollTop <= BUTTON_HEIGHT) {
          resultBottom = scrollTop - BUTTON_HEIGHT
      }
      buttonRef.current.style.bottom = `${resultBottom}px`
  }

  function getRidesDetails() {
    (async () => {
      try {
        setErrorMsg('')
        const ridesDetails = await fetchRidesDetails()
        setRides(ridesDetails)
      }
      catch (e) {
        setErrorMsg(ERROR_MSG)
      }
    })()
  }

  useEffect(getRidesDetails, [])

  async function getAccessCode() {
    try {
      setErrorMsg('')
      const ticketDetails = await requestAccessCode()
      if (ticketDetails.message) {
        setErrorMsg(ticketDetails.message)
        return
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, pinCode)
      dispatch(setBookedTicketDetails(ticketDetails))
    }
    catch (e) {
      setErrorMsg(ERROR_MSG)
    }
  }

  function renderBody() {
    if (errorMsg) {
      return (
        <div className={classes.errorWrapper}>
          <div className={classes.errorIcon}>
          <svg  height="32px" version="1.1" viewBox="0 0 32 32" width="32px">
            <title/>
            <desc/>
            <defs/>
            <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
              <g fill="#929292" id="icon-61-warning">
                <path d="M15.4242327,5.14839275 C16.2942987,3.74072976 17.707028,3.74408442 18.5750205,5.14839275 L29.3601099,22.59738 C30.5216388,24.4765951 29.6755462,26 27.4714068,26 L6.5278464,26 C4.32321557,26 3.47386317,24.4826642 4.63914331,22.59738 L15.4242327,5.14839275 L15.4242327,5.14839275 Z M16.353181,5.5229211 C16.7005152,4.96165163 17.2647678,4.9634187 17.6110318,5.52292108 L28.6162937,23.3055078 C29.1954663,24.2413498 28.7622271,24.9999996 27.6746349,24.9999996 L6.29039231,25 C5.19115596,25 4.76644971,24.2463265 5.34866262,23.3055082 L16.353181,5.5229211 L16.353181,5.5229211 Z M17,11 C16.4477153,11 16,11.4530363 16,11.9970301 L16,18.0029699 C16,18.5536144 16.4438648,19 17,19 C17.5522847,19 18,18.5469637 18,18.0029699 L18,11.9970301 C18,11.4463856 17.5561352,11 17,11 L17,11 Z M17,23 C17.5522848,23 18,22.5522848 18,22 C18,21.4477152 17.5522848,21 17,21 C16.4477152,21 16,21.4477152 16,22 C16,22.5522848 16.4477152,23 17,23 L17,23 Z" id="warning"/>
              </g>
            </g>
            </svg>
            </div>
          <span className={classes.errorMsg}>{errorMsg}</span>
          <div
            onClick={() => setErrorMsg('')}
            className={classes.tryAgainBtn}
            tabIndex={0}
            role="button"
          >
            Try again
          </div>
        </div>
      )
    }

    if (!access_code) {
      return [
        <Instructions key="Instructions" />,
        <Inputs key="Inputs" getAccessCode={getAccessCode} buttonRef={buttonRef} />,
        <CardsGrid key="CardsGrid" rides={rides} />,
      ]
    }

    return <BookedRide />
  }

  return (
    <div className={classes.appContainer} ref={appContainerRef}>
      <div className={classes.homePageContainer}>
        <div className={classes.title}>
  The Jungle
          <span className={classes.tm}>&#153; </span>
  FastRide Service
        </div>
        {renderBody()}
      </div>
    </div>
  )
}

const mapStateToProps = ({ bookedTicketDetails: { access_code } = {}, pinCode }) => ({ access_code, pinCode })

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(App)
