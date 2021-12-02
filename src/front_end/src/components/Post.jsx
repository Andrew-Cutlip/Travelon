import React from "react";

const Post = (props) => {
    return (
        <div className="post">
            <h2>{props.title}</h2>
            <p>{props.summary}</p>
            <p>{props.location}</p>
        </div>
    )
};
export default Post;