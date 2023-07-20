import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './styles/App.css';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;