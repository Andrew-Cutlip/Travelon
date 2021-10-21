import React from "react";
import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
import HomePage from "./HomePage";
import AccountPage from "./AccountPage";
import About from "./About"
import Contact from "./Contact"

const Page = (props) => {
    let pageContent;
    if (props.name === "register") {
        pageContent = <RegistrationForm onclick={props.onclick} />
    }
    else if (props.name === "login"){
        pageContent = <LoginForm onclick={props.onclick} setAccount={props.setAccount}/>;
    }
    else if (props.name === "account"){
        pageContent = <AccountPage accountName={props.accountName}/>
    }
    else if (props.name === "about"){
        pageContent = <About />
    }
    else if (props.name === "contact"){
        pageContent = <Contact />
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