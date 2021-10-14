import React from "react";
import RedirectButton from "./RedirectButton"
function RegistrationForm(props) {
    return (
        <>
            <h1>Register</h1>
                <form>
                    <label>
                        <p> UserName </p>
                        <input name="username"/>
                        <p>  Password </p>
                        <input name="password" type="password"/>
                        <p> Email </p>
                        <input name="email" type="email"/>
                    </label>
                </form>
           <RedirectButton text={"Already have an account: Login here"}
           onclick={() => props.onclick("login")}>

           </RedirectButton>
        </>


    );
}
export default RegistrationForm;