import React, {useState} from "react";
import RedirectButton from "./RedirectButton"
import {GoogleLogin, GoogleLogout} from 'react-google-login';

function RegistrationForm(props) {


    let handleSubmit = (e) => {
        console.log("Submit Clicked")
        e.preventDefault();
    }

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

    return (
        <>
            <h1>Register</h1>
                <form id="Register" name="Register" onSubmit={handleSubmit} action="/register" method="POST">

                        <label>
                            UserName:
                            <input name="username"/>
                        </label>
                        <label>
                            Password:
                            <input name="password" type="password"/>
                        </label>
                        <label>
                            Email
                            <input name="email" type="email"/>
                        </label>
                        <input type="submit" value="Submit"/>

                </form>
           <RedirectButton text={"Already have an account: Login here"}
           onclick={() => props.onclick("login")}>

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
        </>


    );
}
export default RegistrationForm;