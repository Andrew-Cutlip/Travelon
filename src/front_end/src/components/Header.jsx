import React from "react";
import NavBar from "./NavBar";
const Header = (props) => {
    return (
    <header className="header">
        <NavBar links={props.links} changeLoginStatus={props.changeLoginStatus} />
    </header>
    );
};
export default Header;