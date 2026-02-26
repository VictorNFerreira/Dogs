import React from "react";
import {useNavigate} from "react-router-dom";

import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import {REDEFINIR_SENHA} from "../../api";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Erro from "../Auxiliar/Erro";
import Head from "../Auxiliar/Head";

import "../../css/App.css";

function LoginRedefinirSenha()
{
    const [login, setLogin] = React.useState("");
    const [key, setKey] = React.useState("");
    const senha = useForm("senha");
    const {loading, erro, request} = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => 
    {
        const params = new URLSearchParams(window.location.search);
        const login = params.get("login");
        const key = params.get("key");

        if(login)
            setLogin(login);
        if(key)
            setKey(key);

    }, []);

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(senha.validar())
        {
            const {url, options} = REDEFINIR_SENHA({login: login, key: key, password: senha.valor});
            const {result} = await request(url, options);
            if(result.ok)
                navigate("/login");

        }

    }

    return <section class="animaLeft">
        <Head title="Dogs | Redefina sua senha" description="Redefina sua senha e entre novamente em sua conta no site Dogs"/>
        <h1 class="titulo">Redefinir Senha</h1>

        <form onSubmit={handleSubmit}>
            <Input label="Nova Senha" type="password" name="senha" {...senha}/>

            {loading ? <Button disabled>Redefinindo...</Button> : <Button>Redefinir</Button>}
            {erro ? <Erro erro={erro}/> : ""}
        </form>
    </section>

}

export default LoginRedefinirSenha;
