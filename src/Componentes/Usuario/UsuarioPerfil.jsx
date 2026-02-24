import React from "react";
import {useParams} from "react-router-dom";

import Feed from "../Feed/Feed";
import Head from "../Auxiliar/Head";

import "../../css/App.css";

function UsuarioPerfil()
{
    const {usuario} = useParams();

    return <main class="container" style={{marginTop: "30px"}}>
        <Head title={`Dogs | ${usuario}`} description={`O perfil de ${usuario} no site Dogs`}/>
        <h1 class="titulo">{usuario}</h1>
        <Feed usuario={usuario}/>
    </main>

}

export default UsuarioPerfil;
