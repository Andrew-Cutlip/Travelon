import React from "react";

function Login(props) {
    return(
        <>
        <Tittle>Login</Tittle>
        <form id="Login-Form" method="post" name="Login">
        <input type="text" name="name" id="logName" placeholder="Username"></input>
        <input type="password" name="password" id="logPassword" placeholder="Password"></input>
        <button type = "submit" placeholder = "Log In Now"></button>
        </form>


        </>

    );
}