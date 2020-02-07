import React from 'react'
import withStyles from 'react-jss'

const styles = {
    container: {
        flexBasis: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: 16,
    },
    loader: {
        margin: 'auto', 
        display: 'block', 
        'shape-rendering': 'auto',
    }
}


const Loader = ({ classes }) => (
    <div className={classes.container}>
    <svg className={classes.laoder} width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#e15b64" stroke="none" transform="rotate(326.777 50 51)">
  <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
</path>
</svg>
</div>
)

export default withStyles(styles)(Loader)