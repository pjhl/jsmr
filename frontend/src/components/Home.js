import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home page</h2>
    <div>
      <Link to='/about'>About</Link>
      <Link to='/topics'>Topics</Link>
    </div>
  </div>
)

export default Home
