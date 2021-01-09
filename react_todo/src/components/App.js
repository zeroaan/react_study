import React from "react"
import { useDispatch, useSelector } from "react-redux"

const App = () => {
  const { text } = useSelector((State) => state.todo)

  return (
    <>
      <div>{text}</div>
    </>
  )
}

export default App
