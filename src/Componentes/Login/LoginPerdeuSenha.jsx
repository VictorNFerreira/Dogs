import React from "react";

import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import {RECUPERAR_SENHA} from "../../api";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Erro from "../Auxiliar/Erro";

import "../../css/App.css";

function LoginPerdeuSenha()
{
    const login = useForm();
    const {dados, loading, erro, request} = useFetch();

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(login.validar())
        {
            const {url, options} = RECUPERAR_SENHA({login: login.valor, url: window.location.href.replace("recuperacao", "redefinicao")});
            await request(url, options);
            
        }
        
    }

    return <section class="animaLeft">
        <h1 class="titulo">Perdeu a Senha?</h1>

        {dados ? <p style={{color: "#44cc11"}}>{dados}</p> : <form onSubmit={handleSubmit}>
            <Input label="Email / Usuário" type="text" name="login" {...login}/>

            {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>}
            {erro ? <Erro erro={erro}/> : ""}
        </form>}
    </section>

}

export default LoginPerdeuSenha;
