import React from "react";
import RedirectButton from "./RedirectButton"
function Login(props) {
    return(
        <div>
        <h1>Login</h1>
        <form id="Login-Form" method="post" name="Login">
        <input type="text" name="name" id="logName" placeholder="Username"></input>
        <input type="password" name="password" id="logPassword" placeholder="Password"></input>
        <button type = "submit" placeholder = "Log In Now"></button>
        </form>
            <RedirectButton text={"Create an account"}
           onclick={() => props.onclick("register")}>

           </RedirectButton>
        </div>

    );
}
export default Login;