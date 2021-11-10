import React from "react";
import PostForm from "./PostForm"
const HomePage = () => {
    return (
      <div id="home">
        <h1>Home</h1>
          <p>If you love to travel</p>
        <p>Why not share your experience to the world?</p>
          <PostForm />
      </div>
    );
};
export default HomePage;