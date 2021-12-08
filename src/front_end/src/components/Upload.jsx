import React, {useEffect, useState} from "react";
import "./photos.css";
import storage from './Firebase';
let pic2 = "";
let res = [];
let pic = "";
let rankings = ["Screen Shot 2021-11-21 at 8.13.22 PM.png",
    "The-Cliffs-5-dragged.jpeg"];
let picURL = null;
const Upload = (props) => {
    const [Submit, setSubmit] = useState(false);
    const [Submit2, setSubmit2] = useState(false)
    const [Picture, setPicture] = useState('');
    function getImages (image) {
        for (let i = 0; i < image.length; i++) {
            storage.ref().child(`${image[i]}`).getDownloadURL().then((url) => {
                console.log(url);
                res.push(url);
            });
        }
    }
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: "john",
                url: pic.name
            })
        };
        const requestOptions2 = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: "john"
            })
        };
        if (Submit) {
            setSubmit(false);
            fetch("/upload", requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log("Photo upload!");
                    console.log(data);
                    rankings =  JSON.parse((JSON.stringify(data)));
                    setPicture("");

                })
        }
        if (Submit2) {
            setSubmit2(false);
            fetch("/getphotos", requestOptions2)
                .then(response => response.json())
                .then(data => {
                    console.log("Photo upload!");
                    console.log(data);
                    res = [];
                    rankings =  JSON.parse((JSON.stringify(data)));
                    setPicture("");
                    getImages(rankings);

                })
        }
    }, [Submit,Submit2, Picture, props]);

    let handleSubmit = (e) => {
        picURL = null;
        e.preventDefault();
        setSubmit(true);
    };
    let handleSubmit2 = (e) => {
        e.preventDefault();
        setSubmit2(true);
    };
    let handlePicture = (e) => {
        pic = (e.target.files[0]);
        picURL = URL.createObjectURL(e.target.files[0]);
        setPicture(picURL);
        if(pic == null)
            return;
        storage.ref(`/${pic.name}`).put(pic)
            .on("state_changed" , alert("success") , alert);
    };

    return(
        <div>
            <h1>UPLOAD IMAGES</h1>
            <center>
                <form id="Rankings-Form" className = "Rankings" name="Rankings" onSubmit={handleSubmit}>
                    <label>
                    </label>
                    <input id="profilePic" type="file" onChange={handlePicture}/>
                    <img className="playerProfilePic_home_tile"  width={"150px"} src={picURL}/>
                    <input type="submit" name="submit" value="UPLOAD IMAGE" onSubmit={handleSubmit}/>
                </form>


                <form id="Form" className = "Rankings" name="Rankings" onSubmit={handleSubmit2}>
                    <input type="submit" name="submit" value="View Collection" onSubmit={handleSubmit2}/>
                </form>
                <div class="row">
                    {res.map(rank => (
                        <div className="column">
                            <img className="playerProfilePic_home_tile"  width={"150px"} src={rank}/>
                        </div>


                    ))}
                </div>
            </center>
        </div>

    );
};
export default Upload;


