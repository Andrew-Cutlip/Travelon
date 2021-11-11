import React from "react";

const Post = (props) => {
    return (
        <div className="post">
            <h2>{props.title}</h2>
            <h2>By: {props.author}</h2>
            <p>{props.date}</p>
            <p>{props.summary}</p>
        </div>
    )
};
export default Post;