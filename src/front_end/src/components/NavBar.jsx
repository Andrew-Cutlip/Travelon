import React from "react";
import RedirectButton from "./RedirectButton";
import LogoutButton from "./LogoutButton";
const NavBar = (props) => {
    let links = props.links.map((link) => {
        return (
        <li key={link.key}>
            <RedirectButton text={link.text}
                onclick={() => link.onclick(link.path)}>
            </RedirectButton>
        </li>
        )});
    let Logout = props.loggedIn ? <LogoutButton changeLoginStatus={props.changeLoginStatus}/> : ""
    return (
        <nav>
            <h1>Travelon</h1>
            <ul className="nav-links">
                {links}
            </ul>
            {Logout}
        </nav>
    );
};
export default NavBar;