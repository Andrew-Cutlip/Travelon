import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -30.523
};
const HomePage = () => {
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
        </div>
    );
};
export default HomePage;