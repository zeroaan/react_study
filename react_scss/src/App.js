import React from "react"

const App = () => {
  return (
    <>
      <div className="box">
        <h1>one</h1>
        <div>
          <h1>two</h1>
        </div>
      </div>
      <h1>three</h1>
      <h1>four</h1>

      <div className="box2">중첩</div>
      <div className="box3">전역</div>

      <h1 className="mixin">mixin & include</h1>
      <h1 className="mixin2">mixin parameters</h1>
    </>
  )
}

export default App
