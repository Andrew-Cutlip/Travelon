import './App.css';
import React, {useEffect, useState} from "react"
import Page from "./components/Page"
import Header from "./components/Header";


function App() {

    const [pageName, setPageName] = useState("");
    const [accountName, setAccountName] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handlePageSwitch = (name) => {
        setPageName(name);
    };
    const changeLoginStatus = () => {
        console.log("changed login status");
        setLoggedIn(! loggedIn);
    };
    const setAccount = (name) => {
        setAccountName(name);
    }
    // Changes page title
    useEffect(() => {
            document.title = "Travelon " + pageName;
            }, [pageName]);
    const login =  {
            onclick: handlePageSwitch,
            text: "Login",
            path: "login",
            key: 1
        };
    const register =         {
            onclick: handlePageSwitch,
            text: "Register",
            path: "register",
            key: 2
        };
    const account = {
            onclick: handlePageSwitch,
            text: "Account",
            path: "account",
            key: 3
        };
    
    const change =         {
        onclick: handlePageSwitch,
        text: "Change",
        path:"change",
        key:8
    };

    const friendslist =         {
        onclick: handlePageSwitch,
        text: "Friendslist",
        path: "friendslist",
        key:7
    };
    const upload= {
        onclick: handlePageSwitch,
        text: "Upload",
        path:"upload",
        key:10
    };
    const starRatings = {
        onclick: handlePageSwitch,
        text: "StarRatings",
        path: "starRatings",
        key:6
    };

    const links = [
        {
            onclick: handlePageSwitch,
            text: "Home",
            path: "home",
            key: 0
        },
        {
            onclick: handlePageSwitch,
            text: "About",
            path:"about",
            key:4
        },
        {
            onclick: handlePageSwitch,
            text: "Contact",
            path: "contact",
            key:5
        },
        {
            onclick: handlePageSwitch,
            text: "Rankings",
            path:"rankings",
            key:9
        },
    ];
    if (! loggedIn) {
        links.push(login);
        links.push(register);
    }
    else {
        links.push(account);
        links.push(friendslist)
        links.push(change)
        links.push(upload)
        links.push(starRatings)
    }
  return (
      <>
        <div className="App">
            <Header links={links} loggedIn={loggedIn} changeLoginStatus={changeLoginStatus}/>
          <Page name={pageName} onclick={handlePageSwitch} setAccount={setAccount}  accountName={accountName} changeLoginStatus={changeLoginStatus}/>
        </div>
      </>
  );
}

export default App;
