import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPage } from '../actions/pages'

class Page extends Component {
  componentDidMount () {
    this.updateData()
  }

  updateData () {
    const pathname = this.props.match.params.pathname
    this.props.onGetPage(pathname)
  }

  render () {
    const record = this.props.record
    if (record === null) {
      return <div>Loading...</div>
    }
    return <div>
      <h2>{record.name}</h2>
      <div dangerouslySetInnerHTML={{__html: record.body}} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    record: state.pages.current.record || null
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({
    onGetPage: (pathname) => {
      dispatch(getPage(pathname))
    }
  })
)(Page)
