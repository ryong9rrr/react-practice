import React, { Component } from 'react'
import ColorContext from './context'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const boxStyle = {
  width: '24px',
  height: '24px',
  cursor: 'pointer',
}

class SelectColors extends Component {
  static contextType = ColorContext

  handleSetColor(color) {
    this.context.actions.setColor(color)
  }

  handleSetSubcolor(subcolor) {
    this.context.actions.setSubcolor(subcolor)
  }

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{ ...boxStyle, background: color }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault()
                this.handleSetSubcolor(color)
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    )
  }
}

export default SelectColors
