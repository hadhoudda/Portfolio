import React from "react";
import { useParams } from "react-router-dom";
import '../styles/details.css';
import data from '../data/data.json'
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import ProjectDescrption from '../components/ProjectDescrption';

const Details = () => {
  let userId = useParams();
  const project = data.find((card) => card.id === userId.id);
  if (!project) {
      return <NotFound />;
  }

  return (
    <div className="container-details">
    <Header />
    <ProjectDescrption  project={project} key={project?.id} />
    <Footer />

    </div>
    
  )
}
export default Details