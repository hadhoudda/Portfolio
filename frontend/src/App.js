//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './styles/app.css';
//import Home from "./pages/Home";
//import NotFound from './pages/NotFound';
import Header from './components/Header'

function App() {
    return (
        <>
            <Header/>
        </>
        // <Router>
        //     <Routes>
        //         <Route exact path="/" element={<Home />} />
        //         <Route path="/*" element={<NotFound />} />
        //     </Routes>
        // </Router>
    );
}

export default App;