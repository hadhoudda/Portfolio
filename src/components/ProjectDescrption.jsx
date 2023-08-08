import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/project-description.css';
import Tag from './Tag';
export default function ProjectDescrption({project}) {
  return (
    <div className='card-details' >
      <div className="content-details">
        <h4 className='title-description'> {project.title}</h4>
        <p className="text-project"> {project.description} </p>
        <div className="tag-container">
            {project?.tags?.map((tag, index) => {
                return <Tag value={tag} key={index} />;
            })}
        </div>
            
      </div>
            <Link to={"/Portfolio/portfolio"}>
                <button className='btn-project btn-retour'>
                    Retour <i className='bx bx-chevron-right'></i>
                </button> 
            </Link>
        </div>
  )
}
