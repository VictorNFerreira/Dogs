import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login/Login";
import Footer from "./Componentes/Footer";
import {UserStorage} from "./UserContext";

import "./css/App.css";

function App()
{
    return <BrowserRouter>
        <UserStorage>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login/*" element={<Login/>}/>
            </Routes>

            <Footer/>
        </UserStorage>
    </BrowserRouter>

}

export default App;
