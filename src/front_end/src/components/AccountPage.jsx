import React from "react";

const AccountPage = (props) => {
    var fullobj = props.accountName;
    var full = JSON.stringify(fullobj);
    var name = JSON.stringify(fullobj.name);
    var email = JSON.stringify(fullobj.email);
    

    return (
     <div id="account">
        <h2>My Account</h2>
            <h1>Hello,  <span id="name"></span></h1>
            <h1>{name}</h1>
            <h1>{email}</h1>
     </div>
    );
};
export default AccountPage;