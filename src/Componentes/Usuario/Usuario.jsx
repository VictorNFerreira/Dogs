import React from "react";
import {Routes, Route} from "react-router-dom";

import UsuarioHeader from "./UsuarioHeader";
import Feed from "../Feed/Feed";
import UsuarioFotoPost from "./UsuarioFotoPost";
import UsuarioStats from "./UsuarioStats";
import NotFound from "../NotFound";
import {UserContext} from "../../UserContext";
import Head from "../Auxiliar/Head";

import "../../css/App.css";

function Usuario()
{
    const {dados} = React.useContext(UserContext);

    return <main class="container">
        <Head title="Dogs | Minha conta" description="A sua conta e suas fotos no site Dogs"/>
        <UsuarioHeader></UsuarioHeader>

        <Routes>
            <Route path="/" element={<Feed usuario={dados.id}/>}/>
            <Route path="postar" element={<UsuarioFotoPost/>}/>
            <Route path="estatisticas" element={<UsuarioStats/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </main>

}

export default Usuario;
