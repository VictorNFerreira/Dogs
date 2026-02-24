import PropTypes from "prop-types";
import React from "react";

function Head(props)
{
    React.useEffect(() =>
    {
        document.title = props.title;
        document.querySelector("meta[name='description']").setAttribute("content", props.description);

    }, [props]);

    return <></>

}

Head.proptypes =
{
    title: PropTypes.string,
    description: PropTypes.string,

}

Head.defaultProps =
{
    title: "Dogs",

}

export default Head;
