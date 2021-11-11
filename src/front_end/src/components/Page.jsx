import React from "react";
import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
import HomePage from "./HomePage";
import AccountPage from "./AccountPage";
import About from "./About"
import Contact from "./Contact";
import Friendslist from "./Friendslist";
import StarRatings from "./StarRatings";
import Change from "./Change"

const Page = (props) => {
    let pageContent;
    if (props.name === "register") {
        pageContent = <RegistrationForm onclick={props.onclick} changeLoginStatus={props.changeLoginStatus}/>
    }
    else if (props.name === "login"){
        pageContent = <LoginForm onclick={props.onclick} setAccount={props.setAccount} changeLoginStatus={props.changeLoginStatus}/>;
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
    else if (props.name === "friendslist"){
        pageContent = <Friendslist />
        }
    else if (props.name === "starRatings"){
        pageContent = <StarRatings />
    }
    else if (props.name === "change"){
        pageContent = <Change onclick={props.onclick}/>
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