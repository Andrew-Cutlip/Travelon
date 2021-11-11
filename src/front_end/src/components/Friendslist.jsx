import React, {useEffect, useState} from "react";
import "./Form.css";

const Friendslist = (props) => {

    const [Friend, setFriend] = useState("")
    const [Username, setUsername] = useState("")
    const [Submit, setSubmit] = useState(false)

    useEffect(() => {
       const requestOptions = {
           method: 'POST',
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
               username: Username,
               friend: Friend
           })
       };
           if (Submit) {
               setSubmit(false);
                fetch("/friends", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log("Added friend!");
                        console.log(data);
                        let success = data.success;
                        console.log(success);
                        setUsername("");
                        setFriend("");
                    })
                }
    }, [Submit, Friend, Username, props]);

    let handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };
    let handleUsername = (e) => {
        setUsername(e.target.value);
    };
    let handleFriend = (e) => {
        setFriend(e.target.value);
    }

    return(
        <div>
        <h1>Friend</h1>
        <form id="AddFriend-Form" className = "AddFriend" name="AddFriend" onSubmit={handleSubmit}>
        <label> Your Username:
        <input type="text" name="username" id="username" placeholder="Username" onChange={handleUsername} value={Username}/>
        </label>
        <label> Friend to Add:
        <input type="friend" name="friend" id="logFriend" placeholder="Friend" onChange={handleFriend} value={Friend}/>
        </label>
        <input type="submit" name="submit" value="Submit" onSubmit={handleSubmit}/>

            </form>
        </div>

    );
};
export default Friendslist;