import React from 'react'

// COMPONENTS
import Hero from './hero/Hero';

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="container">
          <Hero/>
      </div>
    </React.Fragment>
  )
}

export default Home