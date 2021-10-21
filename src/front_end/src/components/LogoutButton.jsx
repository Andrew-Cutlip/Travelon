import React from "react";
const LogoutButton = (props) => {
    return (
        <button onClick={() => props.changeLoginStatus()}>
            Log Out
        </button>
    )
};
export default LogoutButton;