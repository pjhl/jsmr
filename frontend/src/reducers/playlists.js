const initialState = [
  'My home',
  'Work'
]

export default function playlists (state = initialState, action) {
  if (action.type === 'PLAYLIST_ADD') {
    return [
      ...state,
      action.payload
    ]
  }
  return state
}
