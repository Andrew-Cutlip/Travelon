import React from "react";

const AccountPage = (props) => {
    return (
     <div id="account">
        <h2>My Account:</h2>
         <p>Welcome {props.accountName}!</p>
     </div>
    );
};
export default AccountPage;