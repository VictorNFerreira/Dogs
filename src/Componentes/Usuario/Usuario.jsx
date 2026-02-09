import React from "react";

import UsuarioHeader from "./UsuarioHeader";
import Feed from "../Feed/Feed";
import UsuarioFotoPost from "./UsuarioFotoPost";
import UsuarioStats from "./UsuarioStats";

import "../../css/App.css";
import {Routes, Route} from "react-router-dom";

function Usuario()
{
    return <main class="container">
        <UsuarioHeader></UsuarioHeader>

        <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="postar" element={<UsuarioFotoPost/>}/>
            <Route path="estatisticas" element={<UsuarioStats/>}/>
        </Routes>
    </main>

}

export default Usuario;
