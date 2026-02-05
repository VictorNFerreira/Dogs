import React from "react";

function Erro(props)
{
    if(!props.erro)
        return null;
    else
        return <p style={{color: "#ff3311", margin: "10px 0px"}}>{props.erro}</p>

}

export default Erro;
