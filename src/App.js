import {  Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import './styles/app.css';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import Profil from './components/Profil';

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/Portfolio" element={<Home />} />
            <Route path="/Portfolio/profil" element={<Profil />} />
            {/* <Route path="/Portfolio/competance" element={<Competance />} />
            <Route path="/Portfolio/portfolio" element={<Portfolio />} />
            <Route path="/Portfolio/contact" element={<Contact />} /> */}
            <Route path="/*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
    );
}

export default App;