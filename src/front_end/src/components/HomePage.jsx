import React, {useEffect, useState} from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PostForm from "./PostForm"
import Post from "./Post"
const containerStyle = {
    width: '400px',
    height: '400px'
}
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

const HomePage = () => {
    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/get-posts", requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))
                .then(data => setPosts(data.posts))
    }, []);

    let postsDisplay = Posts.map(post => {return (
        <Post title={post.title} summary={post.summary} location={post.location}/>
    )
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
            {postsDisplay}
            <PostForm />
        </div>
    );
};
export default HomePage;