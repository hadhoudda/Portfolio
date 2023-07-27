import React from "react";
import '../styles/home.css'
import Header from "./Header";
import Description from "./Description";



function Home() {
    return (
        <div className="home" id="home">
            <Header/>  
            <Description /> 
        </div>
         
    )
}

export default Home;