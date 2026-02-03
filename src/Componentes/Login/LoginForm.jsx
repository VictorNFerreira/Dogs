import React from "react";
import {Link} from "react-router-dom";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import {TOKEN_POST, USER_GET} from "../../api";

function LoginForm()
{
    const usuario = useForm();
    const senha = useForm();

    React.useEffect(() => 
    {
        const token = window.localStorage.getItem("token");
        if(token)
            getUsuario(token);

    }, []);

    async function getUsuario(token)
    {
        const {url, options} = USER_GET(token);

        const result = await fetch(url, options);
        const dados = await result.json();
        console.log(dados);

    }

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(usuario.validar() && senha.validar())
        {
            const {url, options} = TOKEN_POST({username: usuario.value, password: senha.value});

            const result = await fetch(url, options);
            const dados = await result.json();
            window.localStorage.setItem("token", dados.token);
            getUsuario(dados.token);
            console.log(dados);

        }

    }

    return <section>
        <h1>Login</h1>

        <form action="" onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="usuario" {...usuario}/>
            <Input label="Senha" type="password" name="senha" {...senha}/>

            <Button>Entrar</Button>
        </form>
        <Link to="/login/cadastro">Criar</Link>
    </section>

}

export default LoginForm;
