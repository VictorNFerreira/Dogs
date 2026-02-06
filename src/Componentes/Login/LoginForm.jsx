import React from "react";
import {Link} from "react-router-dom";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import {UserContext} from "../../UserContext";
import Erro from "../Erro";

import "../../css/App.css";
import estilos from "../../css/login/loginForm.module.css";

function LoginForm()
{
    const usuario = useForm();
    const senha = useForm();

    const {loading, erro, usuarioLogin} = React.useContext(UserContext);

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(usuario.validar() && senha.validar())
            usuarioLogin({username: usuario.valor, password: senha.valor});

    }

    return <section class="animaLeft">
        <h1 class="titulo">Login</h1>

        <form class={estilos.formulario} onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="usuario" {...usuario}/>
            <Input label="Senha" type="password" name="senha" {...senha}/>

            {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
            {erro ? <Erro erro={erro}/> : ""}
        </form>

        <Link class={estilos.recuperacaoSenha} to="/login/recuperacao">Perdeu a senha?</Link>

        <div class={estilos.cadastro}>
            <h2>Cadastre-se</h2>
            <p>Não possui conta? Cadastre-se no nosso site.</p>
            <Link class={estilos.cadastroBotao} to="/login/cadastro">Criar</Link>
        </div>
    </section>

}

export default LoginForm;
