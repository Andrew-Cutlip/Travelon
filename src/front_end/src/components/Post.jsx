import React from "react";

const Post = (props) => {
    let images = props.images;
    if (images){
        images = images.map((img) => {
            return (<img src={img.src} alt={img.alt} />);
        })
    }
    // Need rating component to add here
    let ratings = props.ratings;
    if (ratings){
        ratings = ratings.map((rating) => {
            return (<div className="rating">{rating.score}</div>);
        })
    }
    let author =  props.author;
    if (author) {
        author = <p>By: {author}</p>
    }
    return (
        <div className="post">
            <h2>{props.title}</h2>
            {author}
            <p>{props.summary}</p>
            <p>{props.location}</p>
            {images}
            {ratings}
        </div>
    )
};
export default Post;