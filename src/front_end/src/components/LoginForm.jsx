import React, {useEffect, useState} from "react";
import RedirectButton from "./RedirectButton"
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import "./Form.css";

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

    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("")
    const [Submit, setSubmit] = useState(false)

    useEffect(() => {
       const requestOptions = {
           method: 'POST',
           headers: new Headers({
               "Content-Type": "application/json",
               "Accept": "application/json"
           }),
           body: JSON.stringify({
               username: Username,
               password: Password
           })
       };
           if (Submit) {
               setSubmit(false);
                fetch("/login", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log("LoggedIn!");
                        console.log(data);
                        let loggedIn = data.loggedIn;
                        if (loggedIn) {
                            console.log("Changed to logged in");
                            props.changeLoginStatus();
                        }
                        console.log(Username);
                        props.setAccount(Username);
                        let success = data.success;
                        console.log(success);
                        setPassword("");
                        setUsername("");
                    })
                    .catch(function(error){
                        console.log("Fetch error " + error )
                    })
                }
    }, [Submit, Password, Username, props]);

    let handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };
    let handleUsername = (e) => {
        setUsername(e.target.value);
    };
    let handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div>
        <h1>Login</h1>
        <form id="Login-Form" className = "Login" name="Login" onSubmit={handleSubmit}>
        <label> Username:
        <input type="text" name="username" id="username" placeholder="Username" onChange={handleUsername} value={Username}/>
        </label>
        <label> Password:
        <input type="password" name="password" id="logPassword" placeholder="Password" onChange={handlePassword} value={Password}/>
        </label>
        <input type="submit" name="submit" value="Submit" onSubmit={handleSubmit}/>

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
            </form>
        </div>

    );
}
export default Login;