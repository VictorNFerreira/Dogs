import React from "react";
import {useParams} from "react-router-dom";

import useFetch from "../../Hooks/useFetch";
import {FOTO_GET} from "../../api";
import FotoContent from "./FotoContent";
import Loading from "../Auxiliar/Loading";
import Erro from "../Auxiliar/Erro";

import "../../css/App.css";

function Foto()
{
    const {id} = useParams();
    const {dados, loading, erro, request} = useFetch();

    React.useEffect(() =>
    {
        const {url, options} = FOTO_GET(id);
        request(url, options);

    }, [id, request]);

    return <main class="container" style={{marginTop: "30px"}}>
        {dados ? <FotoContent dados={dados} single={true}/> : ""}
        {loading ? <Loading/> : ""}
        {erro ? <Erro erro={erro}/> : ""}
    </main>

}

export default Foto;
