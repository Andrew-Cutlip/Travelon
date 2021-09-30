import './App.css';
import React, {useState} from React
import Page from "./components/Page"

function App() {
    const [pageName, setPageName] = useState("");

    const handlePageSwitch = (name) => {
        setPageName(name);
    };
  return (
    <div className="App">
      <Page name={pageName}></Page>
    </div>
  );
}

export default App;
