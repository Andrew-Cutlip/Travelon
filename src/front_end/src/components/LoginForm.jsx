import React, {useState} from "react";
import RedirectButton from "./RedirectButton"
import {GoogleLogin, GoogleLogout} from 'react-google-login';

function Login(props) {
    const clientId = "891542752976-2b518b2l45tl0foe8c17pjm1h76pcf79.apps.googleusercontent.com"
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const onLogInSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }

    const onFailureSuccess = (res) => {
        console.log('Login Failed:', res);
    }

    const onSignoutSuccess = (res) => {
        alert("You have been signed out successfully.")
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }

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

            {showLoginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLogInSuccess}
                    onFailure={onFailureSuccess}
                    cookiePolicy={'single_host_origin'}
                /> : null

            }

            {showLogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>

    );
}
export default Login;