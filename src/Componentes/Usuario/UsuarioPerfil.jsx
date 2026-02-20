import React from "react";
import {useParams} from "react-router-dom";

import Feed from "../Feed/Feed";

import "../../css/App.css";

function UsuarioPerfil()
{
    const {usuario} = useParams();

    return <main class="container" style={{marginTop: "30px"}}>
        <h1 class="titulo">{usuario}</h1>
        <Feed usuario={usuario}/>
    </main>

}

export default UsuarioPerfil;
