import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login/Login";
import Footer from "./Componentes/Footer";

import "./css/App.css";

function App()
{
    return <BrowserRouter>
        <Header/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login/*" element={<Login/>}/>
        </Routes>

        <Footer/>
    </BrowserRouter>

}

export default App;
