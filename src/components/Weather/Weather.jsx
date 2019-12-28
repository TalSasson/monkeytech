import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import HomePage from '../HomePage/HomePage'
import Header from '../Header/Header'
import bg from '../../assets/bg.jpeg'

const styles = {
  weatherContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${bg})`,
    backgroundSize: 'cover',
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
  currentPage: state.currentPage,
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(Weather)
