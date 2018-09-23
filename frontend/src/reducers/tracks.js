const initialState = [
  'Ой у лісі калина',
  'Горіла сосна палала'
]

export default function tracks (state = initialState, action) {
  if (action.type === 'TRACK_ADD') {
    return [
      ...state,
      action.payload
    ]
  } else if (action.type === 'TRACKS_FETCH_SUCCESS') {
    return action.payload
  }
  return state
}
