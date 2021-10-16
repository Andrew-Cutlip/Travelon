import React from "react";
import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
import HomePage from "./HomePage";
import AccountPage from "./AccountPage";
const Page = (props) => {
    let pageContent;
    if (props.name === "register") {
        pageContent = <RegistrationForm onclick={props.onclick} />
    }
    else if (props.name === "login"){
        pageContent = <LoginForm onclick={props.onclick} />;
    }
    else if (props.name === "account"){
        pageContent = <AccountPage />
    }
    else {
        pageContent = <HomePage />
    }
    return (
        <div id="page">
            { pageContent }
        </div>
    )
}

export default Page;