import React from 'react'
import injectSheet from 'react-jss'
import { MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import Weather from './components/Weather/Weather'
import theme from './lib/theme'

const style = {
  appContainer: {
    fontFamily: 'sans-serif',
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
  },
}

const App = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div className={classes.appContainer}>
        <Weather />
      </div>
    </Router>
  </MuiThemeProvider>
)

export default injectSheet(style)(App)
