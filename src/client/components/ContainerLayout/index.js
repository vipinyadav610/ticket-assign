import React from 'react'
import { Card } from 'antd'
import './index.scss'

const ContainerLayout = ({ children }) => {
  return (
    <Card className="main-container">
      {React.Children.map(children, child => React.cloneElement(child))}
    </Card>
  )
}

export default ContainerLayout
