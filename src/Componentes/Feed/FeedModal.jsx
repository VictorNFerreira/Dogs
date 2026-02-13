import React from "react";

import useFetch from "../../Hooks/useFetch";
import {FOTO_GET} from "../../api";
import FotoContent from "../Foto/FotoContent";
import Loading from "../Loading";
import Erro from "../Erro";

import estilos from "../../css/feed/feedModal.module.css";

function FeedModal(props)
{
    const {dados, loading, erro, request} = useFetch();

    React.useEffect(() =>
    {
        const {url, options} = FOTO_GET(props.foto.id);
        request(url, options);

    }, [props.foto, request]);

    function handleClickFora(event)
    {
        if(event.target == event.currentTarget)
            props.setModalFoto(null);

    }

    return <div class={estilos.modal} onClick={handleClickFora}>
        {dados ? <FotoContent dados={dados}/> : ""}
        {loading ? <Loading/> : ""}
        {erro ? <Erro erro={erro}/> : ""}
    </div>

}

export default FeedModal;
