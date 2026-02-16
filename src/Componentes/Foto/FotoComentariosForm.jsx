import React from "react";

import useFetch from "../../Hooks/useFetch";
import {COMENTARIO_POST} from "../../api";

import Enviar from "../../assets/enviar.svg?react";
import Erro from "../Erro";

function FotoComentariosForm(props)
{
    const [comentario, setComentario] = React.useState("");
    const {request, erro} = useFetch();

    async function hanldeSubmit(event)
    {
        event.preventDefault();

        const token = window.localStorage.getItem("token")
        const {url, options} = COMENTARIO_POST(props.id, {comment: comentario}, token);
        const {result, dados} = await request(url, options);
        if(result.ok)
        {
            props.setComentarios((comentarios) => [...comentarios, dados]);
            setComentario("");

        }
            
    }

    return <form onSubmit={hanldeSubmit}>
        <textarea id="comentario" name="comentario" placeholder="Comente" value={comentario} onChange={(event) => setComentario(event.target.value)}/>
        <button><Enviar/></button>
        {erro ? <Erro erro={erro}/> : ""}
    </form>

}

export default FotoComentariosForm;
