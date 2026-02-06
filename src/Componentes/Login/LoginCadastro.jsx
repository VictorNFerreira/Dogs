import React from "react";

import useForm from "../../Hooks/useForm";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import {USER_POST} from "../../api";
import {UserContext} from "../../UserContext";
import useFetch from "../../Hooks/useFetch";

import "../../css/App.css";
import Erro from "../Erro";

function LoginCadastro()
{
    const usuario = useForm();
    const email = useForm("email");
    const senha = useForm("senha");

    const {usuarioLogin} = React.useContext(UserContext)
    const {loading, erro, request} = useFetch();

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(usuario.validar() && email.validar() && senha.validar())
        {
            const {url, options} = USER_POST({username: usuario.valor, email: email.valor, password: senha.valor});
            const {result} = await request(url, options);
            if(result.ok)
                await usuarioLogin({username: usuario.valor, password: senha.valor});

        }

    }

    return <section class="animaLeft">
        <h1 class="titulo">Cadastre-se</h1>

        <form onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="usuario" {...usuario}/>
            <Input label="Email" type="email" name="email" {...email}/>
            <Input label="Senha" type="password" name="senha" {...senha}/>

            {loading ? <Button disabled>Carregando...</Button> : <Button>Criar</Button>}
            {erro ? <Erro erro={erro}/> : ""}
        </form>
    </section>

}

export default LoginCadastro;
