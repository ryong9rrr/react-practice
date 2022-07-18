import React from 'react'
import { ColorConsumer } from './context'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const boxStyle = {
  width: '24px',
  height: '24px',
  cursor: 'pointer',
}

// `useContext` 훅을 사용하지 않는다면
const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{ ...boxStyle, background: color }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault()
                  actions.setSubcolor(color)
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  )
}

export default SelectColors
