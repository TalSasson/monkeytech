import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  weatherContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
}

class Weather extends Component {
  renderCurrentPage = () => {
    switch (this.props.currentPage) {
      case 'home':
        return <HomePage />
      case 'favorites':
        return <div />
      default:
        return <div />
    }
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.weatherContainer}>
        <Header />
        {this.renderCurrentPage()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    currentPage: state.currentPage
  })
  
  export default compose(
    connect(mapStateToProps),
    withStyles(styles),
  )(Weather)
