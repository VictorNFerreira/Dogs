import React from "react";
import {NavLink, useLocation} from "react-router-dom";

import {UserContext} from "../../UserContext";

import estilos from "../../css/usuario/UsuarioHeaderNav.module.css"
import Feed from "../../assets/feed.svg?react";
import Adicionar from "../../assets/adicionar.svg?react";
import Estatisticas from "../../assets/estatisticas.svg?react";
import Sair from "../../assets/sair.svg?react";

function UsuarioHeaderNav()
{
    const [mobile, setMobile] = React.useState(null);
    const {usuarioLogout} = React.useContext(UserContext);

    return <nav class={estilos.nav}>
        <ul>
            <li><NavLink to="/conta" end><Feed/> {mobile ? "Minhas Fotos" : ""}</NavLink></li>
            <li><NavLink to="/conta/postar"><Adicionar/> {mobile ? "Adicionar Foto" : ""}</NavLink></li>
            <li><NavLink to="/conta/estatisticas"><Estatisticas/> {mobile ? "Estatísticas" : ""}</NavLink></li>
        </ul>

        <button class={estilos.sair} onClick={usuarioLogout}><Sair/> {mobile ? "Sair" : ""}</button>
    </nav>

}

export default UsuarioHeaderNav;
