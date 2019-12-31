import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setCity, setCityDetails } from '../../actions'
import { ERROR_MSG } from '../../consts'
import { fetchAutoCompleteOptions } from '../../lib/api'

const styles = (theme) => ({
  autoComplete: {
    width: 300,
    margin: '30px auto',
    [theme.breakpoints.down('sm')]: {
      width: 220,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 300,
    },
  },
  textfield: {
    color: 'white',
    background: 'rgba(0,0,0,0.35)',
    '& fieldset, &:hover fieldset': {
      borderColor: 'white !important',
    },
  },
  clearIndicator: {
    color: 'white',
  },
  invisble: {
    display: 'none',
  },
})

function AutoComplete(props) {
  const { classes } = props
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [isError, setIsError] = useState(false)
  const loading = open && options.length === 0

  async function handleSeachWordChanged(e, value) {
    if (value.length < 2 && open) {
      return setOpen(false)
    }
    if (!open) {
      setOpen(true)
    }
    try {
      const cities = await fetchAutoCompleteOptions(value)
      setIsError(false)
      setOptions(cities
        .map((city) => ({ label: city.LocalizedName, key: city.Key, country: city.Country.LocalizedName })))
    }
    catch (error) {
      setIsError(true)
    }
  }

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Autocomplete
      className={classes.autoComplete}
      open={open}
      onClose={() => {
        setOpen(false)
      }}
      onChange={(e, value) => {
        if (!value) return
        props.setCity(value || {})
      }}
      onInputChange={handleSeachWordChanged}
      getOptionLabel={(option) => option.label}
      options={options}
      loading={loading}
      classes={{ popupIndicator: classes.invisble, clearIndicator: classes.clearIndicator }}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          placeholder="Search city"
          fullWidth
          variant="outlined"
          helperText={isError ? ERROR_MSG : ' '}
          InputProps={{
            ...params.InputProps,
            classes: { root: classes.textfield },
            endAdornment: (
              <>
                {loading ? <CircularProgress color="primary" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
}

export default compose(
  connect(null, { setCity, setCityDetails }),
  withStyles(styles),
)(AutoComplete)
