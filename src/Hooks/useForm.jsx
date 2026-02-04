import React from "react";

function useForm(tipo)
{
    const [valor, setValor] = React.useState("");
    const [erro, setErro] = React.useState(null);

    const tipos =
    {
        email:
        {
            regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            mensagem: "Preencha um email válido."

        },


    };

    function validar(valor)
    {
        if(tipo == false)
            return true;

        else if(valor.length == 0)
        {
            setErro("Preencha um valor.");
            return false;

        }
            
        else if(tipos[tipo] && !tipos[tipo].regex.test(valor))
        {
            setErro(tipos[tipo].mensagem);
            return false;
        }

        else
        {
            setErro(null);
            return true;

        }   

    }

    function onChange(event)
    {
        setValor(event.target.value);
        if(erro)
            validar(event.target.value);

    }

    return {valor, setValor, onChange, erro, validar: () => validar(valor), onBlur: () => validar(valor)};

}

export default useForm;
