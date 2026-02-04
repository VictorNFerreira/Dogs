import React from "react";
import {Link} from "react-router-dom";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import {UserContext} from "../../UserContext";

function LoginForm()
{
    const usuario = useForm();
    const senha = useForm();

    const {usuarioLogin} = React.useContext(UserContext);

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(usuario.validar() && senha.validar())
            usuarioLogin({username: usuario.valor, password: senha.valor});

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
