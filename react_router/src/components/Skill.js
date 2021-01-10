import React from "react"
import { Link } from "react-router-dom"

import { SkillData } from "data/SkillData"

import "index.scss"

const Skill = () => {
  return (
    <>
      <div>Skill</div>
      {SkillData.map((v) => (
        <Link className="skill" key={v.id} to={`/skill/${v.id}`}>
          {v.name}
        </Link>
      ))}
    </>
  )
}

export default Skill
