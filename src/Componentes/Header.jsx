import React from "react";
import {NavLink} from "react-router-dom";

import estilos from "../css/Header.module.css";

function Header()
{
    return <header class="container">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="login">Login / Criar</NavLink>
        </nav>
    </header>

}

export default Header;
