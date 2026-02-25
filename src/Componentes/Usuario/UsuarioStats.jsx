import React from "react";

import Head from "../Auxiliar/Head";
import useFetch from "../../Hooks/useFetch";
import {GET_STATS} from "../../api";
import Loading from "../Auxiliar/Loading";
import Erro from "../Auxiliar/Erro";
import UsuarioStatsGraficos from "./UsuarioStatsGraficos";

import "../../css/App.css";

function UsuarioStats()
{
    const {dados, loading, erro, request} = useFetch();

    React.useEffect(() =>
    {
        async function getDados()
        {
            const token = window.localStorage.getItem("token");
            const {url, options} = GET_STATS(token);
            await request(url, options);

        }

        getDados();

    }, [request]);
    
    if(loading)
        return <Loading/>
    if(erro)
        return <Erro erro={erro}/>
    if(dados)
        return <section class="animaLeft">
            <Head title="Dogs | Estatísticas" description="Estatísticas do seu perfil, para ver como você está se saindo no site Dogs"/>
            <UsuarioStatsGraficos dados={dados}/>
        </section>
    return null

}

export default UsuarioStats;
