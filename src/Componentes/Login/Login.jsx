import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";

import LoginForm from "./LoginForm";
import LoginCadastro from "./LoginCadastro";
import LoginPerdeuSenha from "./LoginPerdeuSenha";
import LoginRedefinirSenha from "./LoginRedefinirSenha";
import {UserContext} from "../../UserContext";

import estilos from "../../css/login/login.module.css";

function Login()
{
    const {login} = React.useContext(UserContext);
    const navigate = useNavigate();

    if(login)
        navigate("/conta");

    return <main class={estilos.login}>
        <div class={estilos.forms}>
            <Routes>
                <Route path="/" element={<LoginForm/>}/>
                <Route path="cadastro" element={<LoginCadastro/>}/>
                <Route path="recuperacao" element={<LoginPerdeuSenha/>}/>
                <Route path="redefinicao" element={<LoginRedefinirSenha/>}/>
            </Routes>
        </div>
    </main>

}

export default Login;
