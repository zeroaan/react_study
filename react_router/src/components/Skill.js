import React from "react"
import { Link } from "react-router-dom"

import { SkillData } from "data/SkillData"

const Skill = () => {
  return (
    <>
      <div className="skill">
        {SkillData.map((v) => (
          <Link key={v.id} to={`/skill/${v.id}`}>
            {v.name}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Skill
