const initialState = {
  current: {
    record: null
  }
}

export default function pages (state = initialState, action) {
  switch (action.type) {
    case 'PAGE_FETCH_SUCCESS':
      return {
        ...state,
        current: {
          record: action.payload
        }
      }
    default:
      return state
  }
}
