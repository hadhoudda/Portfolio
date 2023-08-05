import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/project-description.css';

export default function ProjectDescrption({project}) {
  return (
    <div className='card-details' >
      <div className="content-details">
        <h4 className='title-description'> {project.title}</h4>
            <p className="text-project"> {project.description} </p>
            <Link to={project.github} target="_blank">
                <button className='btn-project'>
                    Voir le code <i className='bx bx-chevron-right'></i>
                </button> 
            </Link>
            <Link to={"/Portfolio/portfolio"}>
                <button className='btn-project'>
                    Retour <i className='bx bx-chevron-right'></i>
                </button> 
            </Link>
            

      </div>
            
        </div>
  )
}
