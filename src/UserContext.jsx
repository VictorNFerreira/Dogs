import React from "react";

import {TOKEN_POST, USER_GET} from "./api";

export const UserContext = React.createContext();

export function UserStorage(props)
{
    const [dados, setDados] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [erro, setErro] = React.useState(null);

    async function getUsuario(token)
    {
        const {url, options} = USER_GET(token);
        const result = await fetch(url, options);
        const dados = await result.json();
        setDados(dados);
        setLogin(true);

    }

    async function usuarioLogin(usuario, senha)
    {
        const {url, options} = TOKEN_POST(usuario, senha);
        const result = await fetch(url, options);
        const dados = await result.json();
        window.localStorage.setItem("token", dados.token);
        getUsuario(dados.token);

    }

    return <UserContext.Provider value={{usuarioLogin, dados}}>
        {props.children}
    </UserContext.Provider>

}
