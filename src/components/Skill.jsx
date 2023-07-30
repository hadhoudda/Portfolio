import React from 'react'
import '../styles/skill.css'

export default function Skill({content}) {
    const {skill, porcent} = content;
    return (
    <div className='skill'>
        <p>{skill} </p>
        <p className="porcent">{porcent}%</p>
    </div>
  )
}
