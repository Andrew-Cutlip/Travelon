import React from "react";
import "./Form.css";
function RedirectButton(props) {
    return (
        <button onClick={props.onclick}>
            {props.text}
        </button>
    )
}

export default RedirectButton