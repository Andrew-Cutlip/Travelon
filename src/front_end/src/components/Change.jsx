import React, {useEffect, useState} from "react";
import "./Form.css";

const Change = (props) => {
    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("")
    const [NewUsername, setNewUsername] = useState("")
    const [Submit, setSubmit] = useState(false)

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: Username,
                password: Password,
                newusername: NewUsername,
            })
        };
        if (Submit) {
            setSubmit(false);
            fetch("/change", requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log("LoggedIn!");
                    console.log(data);
                    let loggedIn = data.loggedIn;
                    if (loggedIn) {
                        props.changeLoginStatus();
                    }
                    console.log(Username);
                    props.setAccount(NewUsername);
                    let success = data.success;
                    console.log(success);
                    setPassword("");
                    setUsername("");
                    setNewUsername("");
                })
        }


    }, [Submit, Password, Username, NewUsername, props]);


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
    let handleNewUsername = (e) => {
        setNewUsername(e.target.value);
    };
    return (
        <div id="account">
            <h2>My Account:</h2>
            <p>Welcome {props.accountName}!</p>


            <h1>Change my username</h1>
            <form id="Login-Form" className = "Login" name="Login" onSubmit={handleSubmit}>

                <label> Username:
                    <input type="text" name="username" id="username" placeholder="Username" onChange={handleUsername} value={Username}/>
                </label>
                <label> New Username:
                    <input type="text" name="newusername" id="newusername" placeholder="New Username" onChange={handleNewUsername} value={NewUsername}/>
                </label>
                <label> Password:
                    <input type="password" name="password" id="logPassword" placeholder="Password" onChange={handlePassword} value={Password}/>
                </label>
                <input type="submit" name="submit" value="Submit" onSubmit={handleSubmit}/>
            </form>


        </div>

    );
};
export default Change;