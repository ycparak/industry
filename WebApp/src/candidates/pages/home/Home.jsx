import React from 'react';
import ActivateLinks from './activateLinks/ActivateLinks';
import InterviewRequests from './interviewRequests/InterviewRequests';
import OfferLetter from './offerLetters/OfferLetter';

const Home = (props) => {
  return (
    <div className="container-fluid">
      <ActivateLinks />
      <InterviewRequests />
      <OfferLetter />
    </div>
  )
}

export default Home;