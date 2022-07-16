import React, { useState } from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'

const Todo = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleDelete = (e) => {
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={handleCloseModal} onConfirm={handleCloseModal} />}
      {modalIsOpen && <Backdrop onCancel={handleCloseModal} />}
    </div>
  )
}

export default Todo
