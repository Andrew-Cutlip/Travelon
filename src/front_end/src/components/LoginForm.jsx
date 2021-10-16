import React, {useEffect, useState} from "react";
import RedirectButton from "./RedirectButton"
function Login(props) {
    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("")
    const [Submit, setSubmit] = useState(false)

    useEffect(() => {
       const requestOptions = {
           method: 'POST',
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
               username: Username,
               password: Password
           })
       };
           if (Submit) {
            fetch("/register", requestOptions)
                .then(response => response.json)
                .then(data => console.log(data))
                .then(() => setSubmit(false))
            }
    }, [Submit, Password, Username]);

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
        <form id="Login-Form" name="Login">
        <input type="text" name="username" id="username" placeholder="Username" onChange={handleUsername}/>
        <input type="password" name="password" id="logPassword" placeholder="Password" onChange={handlePassword}/>
        <input type="submit" name="submit" value="Submit" onSubmit={handleSubmit}/>
        </form>
            <RedirectButton text={"Create an account"}
           onclick={() => props.onclick("register")}>

           </RedirectButton>
        </div>

    );
}
export default Login;