import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addTodo } from "store/actions/todo"

const App = () => {
  const dispatch = useDispatch()
  const { list } = useSelector((state) => state.todo)

  const [text, setText] = useState("")
  const inputEl = useRef()

  const onChange = (e) => {
    const { value } = e.target
    setText(value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(text))
    setText("")
    if (inputEl.current) {
      inputEl.current.focus()
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input ref={inputEl} type="text" value={text} onChange={onChange} autoFocus />
        <button type="submit">ADD</button>
      </form>
      {list.map((v, i) => (
        <div key={i}>{v}</div>
      ))}
    </>
  )
}

export default App
