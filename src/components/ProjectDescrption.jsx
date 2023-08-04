import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/project.css';

export default function ProjectDescrption({project}) {
  return (
    <div className='card-project' >
            <h4 className='title-description'> {project.title}</h4>
            <p className="text-project"> {project.description} </p>
            <Link to={project.github} target="_blank">
                <button className='btn-project'>
                    Voir le code <i className='bx bx-chevron-right'></i>
                </button> 
            </Link>

        </div>
  )
}
