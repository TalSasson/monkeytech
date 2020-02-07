import React from 'react'
import injectSheet from 'react-jss'
import HomePage from './components/HomePage/HomePage'

const style = {
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
}

const App = ({ classes }) => (
  <div className={classes.appContainer}>
    <HomePage />
  </div>
)

export default injectSheet(style)(App)
