import React from "react"
import { useParams } from "react-router-dom"

import { SkillData } from "data/SkillData"

const SkillDesc = () => {
  const params = useParams()

  const skill = SkillData.find((s) => s.id === Number(params.skillId))

  return (
    <>
      <div className="skill__desc">
        <h1>{skill.name}</h1>
        <p>{skill.desc}</p>
      </div>
    </>
  )
}

export default SkillDesc
