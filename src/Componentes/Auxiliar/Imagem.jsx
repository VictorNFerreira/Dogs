import React from "react";
import PropTypes from "prop-types";

import estilos from "../../css/auxiliar/imagem.module.css";

function Imagem(props)
{
    const [skeleton, setSkeleton] = React.useState(true);

    function handleLoad(event)
    {
        event.target.style.opacity = 1;
        setSkeleton(false);

    }

    return <div class={estilos.container}>
        {skeleton ? <div class={estilos.skeleton}></div> : ""}
        <img class={estilos.img} src={props.src} alt={props.alt} onLoad={handleLoad} {...props}/>
    </div>

}

Imagem.propTypes =
{
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,

}

export default Imagem;
