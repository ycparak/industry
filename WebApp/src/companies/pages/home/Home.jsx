import React from 'react';
import ActivateLinks from './activateLinks/ActivateLinks';
import CandidateOfTheDay from './candidateOfTheDay/CandidateOfTheDay';

const Home = (props) => {
  return (
    <div className="container-fluid">
      <ActivateLinks />
      <CandidateOfTheDay />
    </div>
  )
}

export default Home;