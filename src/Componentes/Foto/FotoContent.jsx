import React from "react";

import {Link} from "react-router-dom";
import FotoComentarios from "./FotoComentarios";

import "../../css/App.css"
import estilos from "../../css/foto/fotoContent.module.css";

function FotoContent({dados})
{
    return <div class={estilos.foto}>
        <div class={estilos.img}>
            <img src={dados.photo.src} alt={dados.photo.title}/>
        </div>

        <div class={estilos.detalhes}>
            <p>
                <Link to={`/perfil/${dados.photo.author}`}>@{dados.photo.author}</Link>
                <span class={estilos.views}>{dados.photo.acessos}</span>
            </p>

            <h1><Link class="titulo" to={`/foto/${dados.photo.id}`}>{dados.photo.title}</Link></h1>

            <ul class={estilos.atributos}>
                <li>{dados.photo.peso} kg</li>
                <li>{dados.photo.idade} {dados.photo.idade == 1 ? "ano" : "anos"}</li>
            </ul>
        </div>

        <FotoComentarios id={dados.photo.id} comentarios={dados.comments}/>
    </div>

}

export default FotoContent;
