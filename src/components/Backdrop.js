// 통상적으로 모달 뒤의 회색 배경을 Backdrop 이라고 한다.
// Backdrop은 화면 뒤에서 일어나는 이벤트를 차단해야한다.
// 근데 tab키가 작동하는 것은 여전함. 대체 이것은 어떻게 처리를 해야하나...
import React from 'react'

const Backdrop = ({ onCancel }) => {
  return <div className="backdrop" onClick={onCancel} />
}

export default Backdrop
