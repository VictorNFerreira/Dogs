import React from "react";
import {VictoryPie, VictoryChart, VictoryBar} from "victory";

import estilos from "../../css/usuario/usuarioStatsGraficos.module.css";

function UsuarioStatsGraficos(props)
{
    const [total, setTotal] = React.useState(0);
    const [grafico, setGrafico] = React.useState([]);

    React.useEffect(() =>
    {
        setTotal(props.dados.map((dado) => +dado.acessos).reduce((a, b) => a + b, 0));
        setGrafico(props.dados.map((dado) => {return {x: dado.title, y: +dado.acessos}}));

    }, [props.dados]);

    return <div class={estilos.grafico}>
        <div class={`${estilos.graficoItem} ${estilos.total}`}>
            <p>Acessos: {total}</p>
        </div>

        <div class={estilos.graficoItem}>
            <VictoryPie data={grafico} innerRadius={20} padding={{top:20, bottom: 20, left: 80, right: 80}} style={{data: {fillOpacity: 0.9, stroke: "#ffffff", strokeWidth: 2}, labels: {fontSize: 14, fill: "#333333"}}}/>
        </div>

        <div class={estilos.graficoItem}>
            <VictoryChart>
                <VictoryBar data={grafico} alignment="start"/>
            </VictoryChart>
        </div>
    </div>

}

export default UsuarioStatsGraficos;
