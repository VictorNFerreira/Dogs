import React from "react";

import Imagem from "../Auxiliar/Imagem";

import estilos from "../../css/feed/feedImagem.module.css";

function FeedImagem(props)
{
    function handleClick()
    {
        props.setModalFoto(props.foto);

    }

    return <li class={estilos.foto} onClick={handleClick}>
        <Imagem src={props.foto.src} alt={props.foto.title}/>
        <span>{props.foto.acessos}</span>
    </li>

}

export default FeedImagem;
