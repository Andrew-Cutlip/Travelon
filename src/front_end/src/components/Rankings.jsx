import React, {useEffect, useState} from "react";
import "./Form.css";

let rankings = [];
const Rankings = (props) => {
    const [Friend, setFriend] = useState("")
    const [Submit, setSubmit] = useState(false)

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                location: Friend
            })
        };
        if (Submit) {
            setSubmit(false);
            fetch("/rankings", requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log("Show all venues!");
                    console.log(data);
                    rankings =  JSON.parse((JSON.stringify(data)));
                    setFriend("");

                })
        }
    }, [Submit, Friend,props]);

    let handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };
    let handleFriend = (e) => {
        setFriend(e.target.value);
    }


    return(
        <div>
            <h1>VENUE RANKINGS</h1>
            <center>
            <form id="Rankings-Form" className = "Rankings" name="Rankings" onSubmit={handleSubmit}>
                <label>
                    <input type="friend" name="friend" id="logFriend" placeholder="Enter Location" onChange={handleFriend} value={Friend}/>
                </label>
                <input type="submit" name="submit" value="See Venue Rankings" onSubmit={handleSubmit}/>

            </form>
            </center>
            <div> <h1> </h1>
                {rankings.map(rank => (

                <table border = "1" bordercolor = "green" bgcolor = "yellow">

                    <tr>
                            <td>USERNAME</td>
                            <td>COMMENT</td>
                            <td>VENUE</td>
                            <td>RATING</td>
                            <td>LOCATION</td>
                    </tr>
                    <tr>
                        {rank.map(person => (
                            <td>{person.user_Id[0]}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.comment[0]}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.name}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.rating[0]}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.location}</td>
                        ))}
                    </tr>

                    <tr>
                        {rank.map(person => (
                            <td>{person.user_Id[1]}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.comment[1]}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.name}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.rating[1]}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.location}</td>
                        ))}
                    </tr>

                    <tr>
                        {rank.map(person => (
                            <td>{person.user_Id[2]}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.comment[2]}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.name}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.rating[2]}</td>
                        ))}
                        {rank.map(person => (
                            <td>{person.location}</td>
                        ))}
                    </tr>

                </table>
                ))}

            </div>
        </div>

    );
};
export default Rankings;