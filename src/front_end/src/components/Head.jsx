import React from "react";
const Head = (props) => {
    return (
        <head>

            <title>
                {props.title}
            </title>
               <link rel="stylesheet" href="/static/home.css" />
        </head>
    )
};
export default Head;