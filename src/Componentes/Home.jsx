import React from "react";

import Feed from "./Feed/Feed";
import Head from "./Auxiliar/Head";

function Home()
{
    return <main class="container" style={{marginTop: "30px"}}>
        <Head title="Dogs | Fotos" description="Home do site Dogs, com o feed de fotos"/>
        <Feed/>
    </main>

}

export default Home;
