import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
const Private = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return <Component {...props} />
    }}
  />
)
Private.propTypes = {
  component: PropTypes.func
}
export default Private
