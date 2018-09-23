import React from 'react'
import { Link } from 'react-router-dom'
import Header from './theme/Header'
import Button from '@material-ui/core/Button'

const Home = () => (
  <div>
    <Header>Home page</Header>
    <div>
      <Link to='/about'>
        <Button variant='contained' color='primary'>About</Button>
      </Link>
      <Link to='/topics'>
        <Button variant='contained' color='primary'>Topics</Button>
      </Link>
    </div>
  </div>
)

export default Home
