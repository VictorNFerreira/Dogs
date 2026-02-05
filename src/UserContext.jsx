import React from "react";
import {useNavigate} from "react-router-dom";

import {TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET} from "./api";

export const UserContext = React.createContext();

export function UserStorage(props)
{
    const [dados, setDados] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [erro, setErro] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() =>
    {
        async function autoLogin()
        {
            const token = window.localStorage.getItem("token");
            if(token)
            {
                try
                {
                    setErro(null);
                    setLoading(true);

                    const {url, options} = TOKEN_VALIDATE_POST(token);
                    const result = await fetch(url, options);
                    if(!result.ok)
                        throw new Error("Falha no Login.");
                    await getUsuario(token);

                }
                catch(erro)
                {
                    usuarioLogout();

                }
                finally
                {
                    setLoading(false);

                }

            }

        }

        autoLogin();

    }, []);

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
        try
        {
            setErro(null);
            setLoading(true);

            const {url, options} = TOKEN_POST(usuario, senha);
            const result = await fetch(url, options);
            if(!result.ok)
                throw new Error("Falha no Login");
            const dados = await result.json();
            window.localStorage.setItem("token", dados.token);
            await getUsuario(dados.token);
            navigate("/conta");

        }
        catch(erro)
        {
            setErro(erro.message);
            setLogin(false);

        }
        finally
        {
            setLoading(false);

        }

    }

    async function usuarioLogout()
    {
        setDados(null);
        setLogin(false);
        setLoading(false);
        setErro(null);
        window.localStorage.removeItem("token");
        navigate("/login");

    }

    return <UserContext.Provider value={{dados, login, loading, erro, usuarioLogin, usuarioLogout}}>
        {props.children}
    </UserContext.Provider>

}
