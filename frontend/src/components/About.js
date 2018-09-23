import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTracks } from '../actions/tracks'
import { Link } from 'react-router-dom'

class About extends Component {
  addTrack (e) {
    e.preventDefault()
    console.log('Submitted')
    const val = this.trackInput.value
    if (val) {
      this.props.onAddTrack(val)
      this.trackInput.value = ''
    }
  }

  render () {
    return <div>
      <h2>About</h2>
      <form onSubmit={this.addTrack.bind(this)}>
        <input type='text' placeholder='Track name'
          ref={(el => { this.trackInput = el })} />
        <button type='submit'>Add</button>
      </form>
      <button onClick={this.props.onGetTracks}>Get tracks</button>
      <ul>
        {this.props.tracks.map((track, index) => {
          return <li key={index}>{track}</li>
        })}
      </ul>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/topics'>Topics</Link>
      </div>
    </div>
  }
}

function mapStateToProps (state) {
  console.log('~~state:', state)
  return {
    tracks: state.tracks
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({
        type: 'TRACK_ADD',
        payload: trackName
      })
    },
    onGetTracks: () => {
      dispatch(getTracks())
    }
  })
)(About)
