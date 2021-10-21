import React from "react";

const AccountPage = (props) => {
    var name = props.accountName;
    return (
     <div id="account">
        <h2>My Account</h2>
            <h1>Hello, my name is <span id="name"></span></h1>
            <script>
                let name = props.accountName;
                console.log(name);
            </script>
     </div>
    );
};
export default AccountPage;