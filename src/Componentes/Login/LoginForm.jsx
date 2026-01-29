import React from "react";
import {Link} from "react-router-dom";

function LoginForm()
{
    const [nome, setNome] = React.useState("");
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
            body: JSON.stringify({nome, senha})
            
        }).then((result) =>
            {
                console.log(result)
                return result.json()
            
            }).then((dados) => console.log(dados));

    }

    return <section>
        <h1>Login</h1>

        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}></input>
            <input type="password" value={senha} onChange={(event) => setSenha(event.target.value)}></input>

            <button>Entrar</button>
        </form>
        <Link to="/login/cadastro">Criar</Link>
    </section>

}

export default LoginForm;
