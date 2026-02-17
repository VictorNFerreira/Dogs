import React from "react";

import {FOTO_DELETE} from "../../api";
import useFetch from "../../Hooks/useFetch";

import estilos from "../../css/foto/fotoDelete.module.css";

function FotoDelete(props)
{
    const {request, loading} = useFetch();

    async function handleClick()
    {
        const confirm = window.confirm("Tem certeza que deseja deletar esta foto?");
        if(confirm)
        {
            const token = window.localStorage.getItem("token");
            const {url, options} = FOTO_DELETE(props.id, token);
            const {result} = await request(url, options);
            if(result.ok)
                window.location.reload();
            
        }

    }

    return <>
        {loading ? <button class={estilos.deletar} disabled>Deletando...</button> : <button class={estilos.deletar} onClick={handleClick}>Deletar</button>}
    </>

}

export default FotoDelete;
