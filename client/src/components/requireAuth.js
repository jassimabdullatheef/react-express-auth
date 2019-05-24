import React, { Component } from 'react'
import { connect } from 'react-redux'

export const mapStateToProps = state => ({
  auth: state.auth.authenticated
})

export const mapDispatchToProps = {}

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway()
    }

    componentDidUpdate(prevProps, prevState) {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComposedComponent)
}
