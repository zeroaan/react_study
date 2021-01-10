import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "components/Navbar"
import Home from "components/Home"
import Skill from "components/Skill"
import SkillDesc from "components/SkillDesc"

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/skill/:skillId" component={SkillDesc} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Router
