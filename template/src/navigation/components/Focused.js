import React from 'react'
import Lifecycle from './Lifecycle'

function Focused({ children, onFocus }) {
  return (
    <Lifecycle onFocus={onFocus}>
      { children }
    </Lifecycle>
  )
}

export default Focused