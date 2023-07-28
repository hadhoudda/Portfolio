import React from "react";
import '../styles/home.css'
import Header from "../components/Header";
import Description from "../components/Description";

function Home() {
    return (
        <div className="home" >
            <Header/>
            <Description/>
        </div>
         
    )
}

export default Home;