import React from 'react'
import { CardHeader } from 'reactstrap'

const CardHeaderMedium = ({children}) => {
  return (
    <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
      <span className="dash-card-header-text dash-card-header-text--normal dash-comp-body-text">{children}</span>
    </CardHeader>
  )
}

export default CardHeaderMedium;
