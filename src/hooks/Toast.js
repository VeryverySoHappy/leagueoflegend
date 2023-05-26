import React from 'react'

function Toast({ msg = '메세지 없음' }) {
  return (
    <div className="toast">{msg}</div>
  )
}

export default Toast