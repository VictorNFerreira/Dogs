import React from "react";

function useFetch()
{
    const [dados, setDados] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [erro, setErro] = React.useState(null);

    const request = React.useCallback(async (url, options) =>
    {
        let result;
        let dados;

        try
        {
            setErro(null);
            setLoading(true);

            result = await fetch(url, options);
            dados = await result.json();
            if(!result.ok)
                throw new Error(dados.message);

        }
        catch(erro)
        {
            setErro(erro.message);
            dados = null;

        }
        finally
        {
            setDados(dados);
            setLoading(false);

        }

        return {result, dados};

    }, []);

    return {dados, loading, erro, request};

}

export default useFetch;
