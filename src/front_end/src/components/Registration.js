import React from "react";

function RegistrationForm(props) {
    return (
        <>
            <h1>Register</h1>
            <form id="Register-Form" method="post" name="Login">
                <input type="text" name="name" id="logName" placeholder="Username"></input>
                <input type="email" name="email" id="logEmail" placeholder="Email"></input>
                <input type="password" name="password" id="logPassword" placeholder="Password"></input>
                <input type="password" name="password" id="PasswordCheck" placeholder="Confirm Password"></input>
                <button type="submit" placeholder="Register Now"></button>
            </form>
        </>
        //form needs css

    );
}
export default RegistrationForm;