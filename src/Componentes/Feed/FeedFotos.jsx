import React from "react";

import FeedImagem from "./FeedImagem";
import useFetch from "../../Hooks/useFetch";
import {FOTO_GET} from "../../api";
import Loading from "../Loading";
import Erro from "../Erro";

import estilos from "../../css/feed/feedFotos.module.css";

function FeedFotos()
{
    const {dados, loading, erro, request} = useFetch();

    React.useEffect(() =>
    {
        async function fetchFotos()
        {
            const {url, options} = FOTO_GET({pagina: 1, total: 6, usuario: 0});
            await request(url, options);

        }

        fetchFotos();

    }, [request]);

    if(loading)
        return <Loading/>
    if(erro)
        return <Erro erro={erro}/>
    if(dados)
        return <div>
            <ul class={`${estilos.feed} animaLeft`}>
                {dados.map((dado) => <FeedImagem key={dado.id} foto={dado}/>)}
            </ul>
        </div>
    return null

}

export default FeedFotos;
