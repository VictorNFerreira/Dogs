import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";

import LoginForm from "./LoginForm";
import LoginCadastro from "./LoginCadastro";
import LoginPerdeuSenha from "./LoginPerdeuSenha";
import LoginRedefinirSenha from "./LoginRedefinirSenha";
import {UserContext} from "../../UserContext";

function Login()
{
    const {login} = React.useContext(UserContext);
    const navigate = useNavigate();

    if(login)
        navigate("/conta");

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
