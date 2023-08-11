import React from "react";
import '../styles/home.css'
import Header from "../components/Header";
import Description from "../components/Description";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="container-home">
                <Header/>
                <Description/>
            <Footer />
        </div>
    )
}

export default Home;