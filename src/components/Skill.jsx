import React from 'react'
import '../styles/skill.css'

function Skill({skill, porcent}) {
    return (
        <div className='skill' >
        <div className="info">
            <p className='text-skill'>{skill} </p>
            <p className="porcent">{porcent}%</p>
        </div>
            <div className="bar">
                <span className={`${skill}`}></span>
            </div>
        </div>
    )
}

export default Skill;