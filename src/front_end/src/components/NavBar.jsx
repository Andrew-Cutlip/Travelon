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
    return (
        <nav>
            <h1>Travelon</h1>
            <ul className="nav-links">
                {links}
            </ul>
            <LogoutButton changeLoginStatus={props.changeLoginStatus}/>
        </nav>
    );
};
export default NavBar;