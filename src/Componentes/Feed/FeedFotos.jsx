import React from "react";

import FeedImagem from "./FeedImagem";
import useFetch from "../../Hooks/useFetch";
import {FOTOS_GET} from "../../api";
import Loading from "../Auxiliar/Loading";
import Erro from "../Auxiliar/Erro";

import estilos from "../../css/feed/feedFotos.module.css";

function FeedFotos(props)
{
    const {dados, loading, erro, request} = useFetch();

    React.useEffect(() =>
    {
        async function fetchFotos()
        {
            const {url, options} = FOTOS_GET({pagina: props.pagina, total: 6, usuario: props.usuario});
            const {result, dados} = await request(url, options);
            if(result && result.ok && dados.length < 6)
                props.setFinal(true);

        }

        fetchFotos();

    }, [request, props.pagina, props.usuario, props.setFinal]);

    if(loading)
        return <Loading/>
    if(erro)
        return <Erro erro={erro}/>
    if(dados)
        return <div>
            <ul class={`${estilos.feed} animaLeft`}>
                {dados.map((dado) => <FeedImagem key={dado.id} foto={dado} setModalFoto={props.setModalFoto}/>)}
            </ul>
        </div>
    return null

}

export default FeedFotos;
