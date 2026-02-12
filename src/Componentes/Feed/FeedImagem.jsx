import React from "react";

import estilos from "../../css/feed/feedImagem.module.css";

function FeedImagem({foto})
{
    return <li class={estilos.foto}>
        <img src={foto.src} alt={foto.title}/>
        <span>{foto.acessos}</span>
    </li>

}

export default FeedImagem;
