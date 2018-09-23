import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

render(
  <Root store={store} />,
  document.getElementById('root')
)
registerServiceWorker()
