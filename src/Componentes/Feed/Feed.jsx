import React from "react";

import FeedModal from "./FeedModal";
import FeedFotos from "./FeedFotos";

function Feed()
{
    const [modalFoto, setModalFoto] = React.useState(null);

    return <section>
        {modalFoto ? <FeedModal foto={modalFoto} setModalFoto={setModalFoto}/> : ""}
        <FeedFotos setModalFoto={setModalFoto}/>
    </section>

}

export default Feed;
