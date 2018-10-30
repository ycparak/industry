import React, { Component } from 'react'
import { Card, Row } from 'reactstrap';

import ItemCandidate from './ItemCandidate';
import CardHeaderMedium from '../../../../components/ui/CardHeaderMedium';
import CardBodyMedium from '../../../../components/ui/CardBodyMedium';


class CandidateCard extends Component {

  render() {
    const {candidates, children, position, type, remove} = this.props;
    return (
      <Card className="dash-card dash-card--normal">
        <CardHeaderMedium>{ children }</CardHeaderMedium> 
        <CardBodyMedium>
          <Row>
            { candidates && candidates.map((candidate) => <ItemCandidate key={candidate.id} position={position} candidate={candidate} type={type} remove={remove} /> ) }
          </Row>
        </CardBodyMedium>
      </Card>
    )
  }
}

export default CandidateCard
