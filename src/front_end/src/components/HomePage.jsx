import React, {useEffect, useState} from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PostForm from "./PostForm"
import Post from "./Post"
const containerStyle = {
    width: '400px',
    height: '400px'
};
const [Posts, setPosts] = useState([]);

const center = {
    lat: -3.745,
    lng: -30.523
};
const requestOptions = {
           method: 'GET',
           headers: {
               "Content-Type": "application/json"
           },
       };
useEffect(() => {
        fetch("/get-posts", requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))
                .then(data => setPosts(data.posts))
}, []);

const HomePage = () => {
    let posts = posts.map(post => {
        <Post title={post.title} />
    })
    return (

        <div id="home">

            <h1>Home
                <center><LoadScript
                    googleMapsApiKey="AIzaSyB0ETFhO3BJFNA2LGz_ROSQQ-P9LWmnPLg"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={1}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <></>
                    </GoogleMap>
                </LoadScript></center>

            </h1>
            <p>If you love to travel,
                Why not share your experience to the world?
            </p>

            <PostForm />
        </div>
    );
};
export default HomePage;