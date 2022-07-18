import React from 'react'
import { ColorConsumer } from './context'

const aStyle = {
  width: '64px',
  height: '64px',
}

const bStyle = {
  width: '32px',
  height: '32px',
}

// `useContext` 훅을 사용하지 않는다면
const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => (
        <React.Fragment>
          <div style={{ ...aStyle, background: value.state.color }} />
          <div style={{ ...bStyle, background: value.state.subcolor }} />
        </React.Fragment>
      )}
    </ColorConsumer>
  )
}

export default ColorBox
