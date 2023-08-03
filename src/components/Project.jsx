import React from 'react';
import '../styles/project.css'
import { Link } from 'react-router-dom';


export default function Project({project}) {
    return( 
        <>
        <div className='card-project' >
                <img className='img-project' src={ project.picture }  alt={"l'image de " + project.title}/>
                <h4 className='title-card'> {project.title}</h4>
                <Link to={project.github} target="_blank"><button className='btn-project'>Voir le code <i className='bx bx-chevron-right'></i></button> </Link>
                <Link to={project.site} target="_blank"><button className='btn-project'>Voir le site <i className='bx bx-chevron-right'></i></button> </Link>
        </div>
        <div className="description-project">
            <h4 className='title-description'> {project.title}</h4>
            <p className="text-project"> {project.description} </p>

        </div>
        </>
        
        )
    
}
