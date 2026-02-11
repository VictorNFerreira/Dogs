import React from "react";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import {FOTO_POST} from "../../api";
import Erro from "../Erro";
import {useNavigate} from "react-router-dom";

import estilos from "../../css/usuario/usuarioFotoPost.module.css";

function UsuarioFotoPost()
{
    const nome = useForm();
    const peso = useForm("numero");
    const idade = useForm("numero");
    const [img, setImg] = React.useState({});
    const {dados, loading, erro, request} = useFetch();
    const navigate = useNavigate();

    React.useEffect(() =>
    {
        if(dados)
            navigate("/conta");

    }, [dados, navigate]);

    function handleSubmit(event)
    {
        event.preventDefault();

        const formData = new FormData();
        formData.append("img", img.raw);
        formData.append("nome", nome.valor);
        formData.append("peso", peso.valor);
        formData.append("idade", idade.valor);

        if(nome.validar() && peso.validar() && idade.validar())
        {
            const token = window.localStorage.getItem("token");
            const {url, options} = FOTO_POST(formData, token);
            request(url, options);
            
        }
        
    }

    function handleImg(event)
    {
        setImg({raw: event.target.files[0], preview: URL.createObjectURL(event.target.files[0])});

    }

    return <section class={`${estilos.fotoPost} animaLeft`}>
        <form onSubmit={handleSubmit}>
            <Input label="Nome" type="text" name="nome" {...nome}/>
            <Input label="Peso" type="text" name="peso" {...peso}/>
            <Input label="Idade" type="text" name="idade" {...idade}/>
            <input id="img" class={estilos.imgFile} type="file" name="img" onChange={handleImg}/>

            {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
            {erro ? <Erro erro={erro}/> : ""}
        </form>

        <div>
            {img.preview ? <div class={estilos.preview} style={{backgroundImage: `url(${img.preview})`}}></div> : ""}
        </div>
    </section>

}

export default UsuarioFotoPost;
