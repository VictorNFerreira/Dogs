import React from "react";
import {Link} from "react-router-dom";

import estilos from "../css/Header.module.css";
import Dogs from "../assets/dogs.svg?react";

function Header()
{
    return <header class={estilos.header}>
        <nav class={`container ${estilos.menu}`}> 
            <ul>
                <li><Link class={estilos.logo} to="/"><Dogs/></Link></li>
                <li><Link class={estilos.login} to="login">Login / Criar</Link></li>
            </ul>
        </nav>
    </header>

}

export default Header;
