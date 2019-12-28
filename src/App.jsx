import React from 'react'
import injectSheet from 'react-jss'
import { MuiThemeProvider } from '@material-ui/core'
import './App.css'
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
    <div className={classes.appContainer}>
      <Weather />
    </div>
  </MuiThemeProvider>
)

export default injectSheet(style)(App)
