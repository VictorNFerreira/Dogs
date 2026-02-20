import React from "react";
import PropTypes from "prop-types";

function Erro(props)
{
    if(!props.erro)
        return null;
    else
        return <p style={{color: "#ff3311", margin: "10px 0px"}}>{props.erro}</p>

}

Erro.propTypes =
{
    erro: PropTypes.string.isRequired,

}

export default Erro;
