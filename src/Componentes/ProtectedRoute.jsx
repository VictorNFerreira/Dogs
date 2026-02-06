import React from "react";
import {useNavigate} from "react-router-dom";

import {UserContext} from "../UserContext";

function ProtectedRoute(props)
{
    const {login} = React.useContext(UserContext);
    const navigate = useNavigate();

    if(login == true)
        return props.children
    else if(login == false)
        return navigate("/login")
    else
        return <></>

}

export default ProtectedRoute;
