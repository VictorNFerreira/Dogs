import React from "react"

import {UserContext} from "../../UserContext";
import FotoComentariosForm from "./FotoComentariosForm";

import estilos from "../../css/foto/fotoComentarios.module.css"

function FotoComentarios(props)
{
    const [comentarios, setComentarios] = React.useState(() => props.comentarios)
    const {login} = React.useContext(UserContext);

    return <div>
        <ul class={estilos.comentarios}>
            {comentarios.map((comentario) => <li key={comentario.comment_ID}>
                <span>{comentario.comment_author}:</span>
                <p>{comentario.comment_content}</p>
            </li>)}
        </ul>
        {login ? <FotoComentariosForm id={props.id} setComentarios={setComentarios}/> : ""}
    </div>

}

export default FotoComentarios;
