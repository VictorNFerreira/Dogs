import React from "react";

import UsuarioHeaderNav from "./UsuarioHeaderNav";

import "../../css/App.css";
import estilos from "../../css/usuario/usuarioHeader.module.css"
import { useLocation } from "react-router-dom";

function UsuarioHeader()
{
    const [titulo, setTitulo] = React.useState("")
    const location = useLocation();

    React.useEffect(() =>
    {
        if(location.pathname == "/conta/postar")
            setTitulo("Poste uma Foto");
        else if(location.pathname == "/conta/estatisticas")
            setTitulo("Estatísticas");
        else
            setTitulo("Minha Conta");

    }, [location]);

    return <section class={estilos.header}>
        <h1 class="titulo">{titulo}</h1>
        <UsuarioHeaderNav/>
    </section>

}

export default UsuarioHeader;
