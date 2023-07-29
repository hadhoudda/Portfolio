import React from 'react'
import '../styles/skill.css'

export default function Skill({skill, porcent}) {
  return (
    <div className='skill'>
        <p>{skill} </p>
        <p className="porcent">{porcent}%</p>
    </div>
  )
}
