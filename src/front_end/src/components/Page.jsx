import React from "react";
import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
import HomePage from "./HomePage";
import AccountPage from "./AccountPage";
const Page = (props) => {
    let pageContent = <LoginForm></LoginForm>;
    if (props.name === "register") {
        pageContent = <RegistrationForm onclick={props.onclick}></RegistrationForm>
    }
    else if (props.name === "login"){
        pageContent = <LoginForm></LoginForm>
    }
    else if (props.name === "account"){
        pageContent = <AccountPage></AccountPage>
    }
    else {
        pageContent = <HomePage></HomePage>
    }
    return (
        <div id="page">
            { pageContent }
        </div>
    )
}

export default Page;