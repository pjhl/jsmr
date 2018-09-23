const mockPage = {
  id: '1234567890',
  pathname: 'one',
  status: 'ENABLED',
  name: 'First mock page',
  meta: {
    title: 'First mock page title',
    description: 'First mock page description'
  },
  body: 'First mock page <strong>body</strong><br>\n<ul>\n<li>111</li>\n</ul>'
}

export const getPage = (pathname) => dispatch => {
  setTimeout(() => {
    dispatch({
      type: 'PAGE_FETCH_SUCCESS',
      payload: mockPage
    })
  }, 1000)
}
