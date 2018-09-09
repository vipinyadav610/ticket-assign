import React from 'react'
import './index.scss'

const ContainerHeader = props => {
  return (
    <div className="container-header">
      <div>
        <strong className="header-title">{props.title} </strong>
      </div>
      <div>{props.extra}</div>
    </div>
  )
}

export default ContainerHeader
