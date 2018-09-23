const mockTracks = [
  'First track',
  'Second track'
]

export const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log('Got tracks')
    dispatch({
      type: 'TRACKS_FETCH_SUCCESS',
      payload: mockTracks
    })
  }, 2000)
}
