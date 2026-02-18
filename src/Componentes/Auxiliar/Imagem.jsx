import React from "react";

import estilos from "../../css/imagem.module.css";

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

export default Imagem;
