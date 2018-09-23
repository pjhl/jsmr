import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import Page from './Page'

const Root = ({ store }) => (
  <div>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
          <Route path='/:pathname([a-z0-9/-]+).html' exact component={Page} />
        </Switch>
      </Router>
    </Provider>
  </div>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
