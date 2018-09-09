import React, { Component } from 'react'
// import copy from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import { Button } from 'antd'

class ErrorBoundary extends Component {
  state = { hasError: false }

  /**
   * @param {*} error
   * @param {*} info
   */
  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info })
  }

  /**
   *
   */
  render() {
    const { hasError, error } = this.state
    if (hasError) {
      return (
        <div>
          <h1 style={{ color: 'red' }}>Error: {error.message}</h1>
          <h4 style={{ color: 'red' }}>Stack: {error.stack}</h4>
          <Button style={{ marginTop: 20 }} type="primary">
            Copy to clipboard
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.object
}

export default ErrorBoundary
