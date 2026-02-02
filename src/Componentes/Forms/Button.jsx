import React from "react";

import estilos from "../../css/forms/Button.module.css";

function Button(props)
{
    return <button {...props} class={estilos.botao}>{props.children}</button>

}

export default Button;
