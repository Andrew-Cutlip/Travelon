import React from "react";
import RedirectButton from "./RedirectButton"
function RegistrationForm(props) {


    let handleSubmit = (e) => {
        console.log("Submit Clicked")
        e.preventDefault();
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
        </>


    );
}
export default RegistrationForm;