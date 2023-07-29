import React from "react";
import '../styles/home.css'
import Header from "../components/Header";
import Description from "../components/Description";
import Footer from "../components/Footer";

function Home() {
    return (
        <section className="container-home">
            <div className="home" >
                <Header/>
                <Description/>
            </div>
            <Footer />
        </section>
    )
}

export default Home;