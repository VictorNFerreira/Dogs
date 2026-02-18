import React from "react";

import {Link} from "react-router-dom";
import FotoComentarios from "./FotoComentarios";
import {UserContext} from "../../UserContext";
import FotoDelete from "./FotoDelete";
import Imagem from "../Auxiliar/Imagem";

import "../../css/App.css"
import estilos from "../../css/foto/fotoContent.module.css";

function FotoContent({dados})
{
    const usuario = React.useContext(UserContext);

    return <div class={estilos.foto}>
        <div class={estilos.img}>
            <Imagem src={dados.photo.src} alt={dados.photo.title}/>
        </div>

        <div class={estilos.detalhes}>
            <p>
                {usuario.dados && usuario.dados.username == dados.photo.author ? <FotoDelete id={dados.photo.id}/> : <Link to={`/perfil/${dados.photo.author}`}>@{dados.photo.author}</Link>}
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
