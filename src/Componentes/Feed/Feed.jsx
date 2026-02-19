import React from "react";

import FeedModal from "./FeedModal";
import FeedFotos from "./FeedFotos";

function Feed(props)
{
    const [modalFoto, setModalFoto] = React.useState(null);
    const [paginas, setPaginas] = React.useState([1]);
    const [final, setFinal] = React.useState(false);

    React.useEffect(() =>
    {
        function scrollInfinito()
        {
            if(!final)
            {
                let wait = false;
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;

                if(scroll >= 0.8 * height && !wait)
                {
                    setPaginas((paginas) => [...paginas, paginas.length + 1]);
                    wait = true;
                    setTimeout(() => wait = false, 500);

                }

            }

        }

        window.addEventListener("wheel", scrollInfinito);
        window.addEventListener("scroll", scrollInfinito);

        return () =>
        {
            window.removeEventListener("wheel", scrollInfinito);
            window.removeEventListener("scroll", scrollInfinito);

        }

    }, [final]);

    return <section>
        {modalFoto ? <FeedModal foto={modalFoto} setModalFoto={setModalFoto}/> : ""}
        {paginas.map((pagina) => <FeedFotos key={pagina} pagina={pagina} usuario={props.usuario} setModalFoto={setModalFoto} setFinal={setFinal}/>)}
    </section>

}

export default Feed;
