import React from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {
  return (
    <React.Fragment>
      <h1>My Todos</h1>
      <Todo text="타입스크립트 공부하기" />
      <Todo text="NextJS 공부하기" />
    </React.Fragment>
  )
}

export default App
