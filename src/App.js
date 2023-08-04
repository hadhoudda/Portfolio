import {  Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import './styles/app.css';
import Home from './pages/Home';
import Profil from './components/Profil';
import Competance from './pages/Competance';
import Portfolio from "./pages/Portfolio";
import Details from "./pages/Details";
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/Portfolio" element={<Home />} />
            <Route path="/Portfolio/profil" element={<Profil />} />
            <Route path="/Portfolio/competance" element={<Competance />} />
            <Route path="/Portfolio/portfolio" element={<Portfolio />} />
            <Route path="/Portfolio/details/:id" element={<Details />} />
            <Route path="/Portfolio/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
    );
}

export default App;