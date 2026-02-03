import React from "react";
import {Link} from "react-router-dom";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

function LoginForm()
{
    const usuario = useForm();
    const senha = useForm();

    function handleSubmit(event)
    {
        event.preventDefault();
        if(usuario.validar() && senha.validar())
        {
            fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({usuario, senha})
                
            }).then((result) =>
            {
                console.log(result);
                return result.json();
                
            }).then((dados) => console.log(dados));

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
