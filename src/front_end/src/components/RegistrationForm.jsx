import React, {useEffect, useState} from "react";
import RedirectButton from "./RedirectButton"
function RegistrationForm(props) {

    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
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
               email: Email
           })
       };
           if (Submit) {
            fetch("/register", requestOptions)
                .then(response => response.json)
                .then(data => console.log(data))
                .then(() => setSubmit(false))
            }
    }, [Submit, Password, Username, Email]);
    
    
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
    let handleEmail = (e) => {
        setEmail(e.target.value);
    };
    return (
        <>
            <h1>Register</h1>
                <form id="Register" name="Register" onSubmit={handleSubmit}>

                        <label>
                            UserName:
                            <input name="username" type="text" placeholder="Username" required onChange={handleUsername}/>
                        </label>
                        <label>
                            Password:
                            <input name="password" type="password" required onChange={handlePassword}/>
                        </label>
                        <label>
                            Email
                            <input name="email" type="email" required onChange={handleEmail}/>
                        </label>
                        <input type="submit" value="Submit"/>

                </form>
           <RedirectButton text={"Already have an account: Login here"}
           onclick={() => props.onclick("login")}>

           </RedirectButton>
        </>


    );
}
export default RegistrationForm;