import React from "react";

import estilos from "../../css/forms/Input.module.css";

function Input(props)
{
    return <div class={estilos.formContainer}>
        <label class={estilos.label} for={props.name}>{props.label}</label>
        <input {...props} id={props.name} class={estilos.input} type={props.type} name={props.name} valor={props.valor} onChange={props.onChange} onBlur={props.onBlur}></input>
        {props.erro ? <p class={estilos.erro}>{props.erro}</p> : ""}
    </div>

}

export default Input;
