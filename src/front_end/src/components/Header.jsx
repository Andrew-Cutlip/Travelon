import React from "react";
import NavBar from "./NavBar";
const Header = (props) => {
    return (
    <header className="header">
        <NavBar links={props.links}></NavBar>
    </header>
    );
};
export default Header;