import React from "react";
import {Routes, Route} from "react-router-dom";

import LoginForm from "./LoginForm";
import LoginCadastro from "./LoginCadastro";
import LoginPerdeuSenha from "./LoginPerdeuSenha";
import LoginRedefinirSenha from "./LoginRedefinirSenha";

function Login()
{
    return <main class="container">
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="cadastro" element={<LoginCadastro/>}/>
            <Route path="recuperacao" element={<LoginPerdeuSenha/>}/>
            <Route path="redefinicao" element={<LoginRedefinirSenha/>}/>
        </Routes>
    </main>

}

export default Login;
