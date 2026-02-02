import React from "react";
import {Link} from "react-router-dom";

import Input from "../Forms/Input";
import Button from "../Forms/Button";

function LoginForm()
{
    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    function handleSubmit(event)
    {
        event.preventDefault();
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
                console.log(result)
                return result.json()
            
            }).then((dados) => console.log(dados));

    }

    return <section>
        <h1>Login</h1>

        <form action="" onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="usuario"/>
            <Input label="Senha" type="password" name="senha"/>

            <Button>Entrar</Button>

            {/*<input type="text" value={usuario} onChange={(event) => setUsuario(event.target.value)}></input>
            <input type="password" value={senha} onChange={(event) => setSenha(event.target.value)}></input>*/}
        </form>
        <Link to="/login/cadastro">Criar</Link>
    </section>

}

export default LoginForm;
