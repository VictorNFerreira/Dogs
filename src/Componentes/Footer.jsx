import React from "react";

import estilos from "../css/footer.module.css";
import Dogs from "../assets/dogs-footer.svg?react";

function Footer()
{
    return <footer class={estilos.footer}>
        <Dogs/>
        <p>Dogs. Todos os direitos reservados.</p>
    </footer>

}

export default Footer;
