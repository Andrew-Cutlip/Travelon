import './App.css';
import React, {useState} from "react"
import Page from "./components/Page"
import RegistrationForm from "./components/Registration";
import Login from "./components/LoginForm"

function App() {

    const [pageName, setPageName] = useState("");

    const handlePageSwitch = (name) => {
        setPageName(name);
    };
  return (
    <div className="App">
      <Page name={pageName} onclick={handlePageSwitch}></Page>
    </div>
  );
}

export default App;
