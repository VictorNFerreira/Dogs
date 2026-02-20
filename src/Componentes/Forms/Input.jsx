import React from "react";
import PropTypes from "prop-types";

import estilos from "../../css/forms/Input.module.css";

function Input(props)
{
    return <div class={estilos.formContainer}>
        <label class={estilos.label} for={props.name}>{props.label}</label>
        <input id={props.name} class={estilos.input} type={props.type} name={props.name} valor={props.valor} onChange={props.onChange} onBlur={props.onBlur}></input>
        {props.erro ? <p class={estilos.erro}>{props.erro}</p> : ""}
    </div>

}

Input.propTypes =
{
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

}

export default Input;
