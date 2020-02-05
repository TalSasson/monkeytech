import React from 'react'
import injectSheet from 'react-jss'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './lib/theme'
import HomePage from '../src/components/HomePage/HomePage'

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
      <HomePage />
    </div>
  </MuiThemeProvider>
)

export default injectSheet(style)(App)
