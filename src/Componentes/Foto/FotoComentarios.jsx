import React from "react"

import {UserContext} from "../../UserContext";
import FotoComentariosForm from "./FotoComentariosForm";

import estilos from "../../css/foto/fotoComentarios.module.css"

function FotoComentarios(props)
{
    const [comentarios, setComentarios] = React.useState(() => props.comentarios)
    const comentariosSecao = React.useRef(null);
    const {login} = React.useContext(UserContext);

    React.useEffect(() =>
    {
        comentariosSecao.current.scrollTop = comentariosSecao.current.scrollHeight;

    }, [comentarios]);

    return <div class={`${estilos.comentarios} ${props.single ? estilos.fotoSingle : ""}`} ref={comentariosSecao}>
        <ul class={estilos.comentariosLista}>
            {comentarios.map((comentario) => <li key={comentario.comment_ID}>
                <span class={estilos.autor}>{comentario.comment_author}:</span>
                <p>{comentario.comment_content}</p>
            </li>)}
        </ul>

        {login ? <FotoComentariosForm id={props.id} setComentarios={setComentarios} single={props.single}/> : ""}
    </div>

}

export default FotoComentarios;
