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
        setLoggedIn(! loggedIn);
    };
    const setAccount = (name) => {
        setAccountName(name);
    }
    // Changes page title
    useEffect(() => {
            document.title = "Travelon " + pageName;
            }, [pageName]);
    const links = [
        {
            onclick: handlePageSwitch,
            text: "Home",
            path: "home",
            key: 0
        },
        {
            onclick: handlePageSwitch,
            text: "Login",
            path: "login",
            key: 1
        },
        {
            onclick: handlePageSwitch,
            text: "Register",
            path: "register",
            key: 2
        },
        {
            onclick: handlePageSwitch,
            text: "Account",
            path: "account",
            key: 2
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
        }
    ];
  return (
      <>
        <div className="App">
            <Header links={links} log={changeLoginStatus}/>
          <Page name={pageName} onclick={handlePageSwitch} setAccount={setAccount} accountName={accountName}/>
        </div>
      </>
  );
}

export default App;
