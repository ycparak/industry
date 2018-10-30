import React from 'react';
import { CardBody } from 'reactstrap'

const CardBodyMedium = ({children}) => {
  return (
    <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
      <div className="padding-horizontal--20 padding-top--20">
        {children}
      </div>
    </CardBody>
  )
}

export default CardBodyMedium
