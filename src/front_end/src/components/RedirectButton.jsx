import React from "react";
function RedirectButton(props) {
    return (
        <button onClick={props.onclick}>
            {props.text}
        </button>
    )
}

export default RedirectButton