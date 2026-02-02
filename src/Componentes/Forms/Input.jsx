import React from "react";

import estilos from "../../css/forms/Input.module.css";

function Input(props)
{
    return <div class={estilos.formContainer}>
        <label class={estilos.label} for={props.name}>{props.label}</label>
        <input {...props} id={props.name} class={estilos.input} type={props.type} name={props.name}></input>
        <p class={estilos.erro}>Erro</p>
    </div>

}

export default Input;
