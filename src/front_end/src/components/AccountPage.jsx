import React from "react";
import { useState, useEffect} from "react";
import { FaStar } from "react-icons/fa";
import '../StarRatings.css';

const colors = {
    orange: "#FFD700",
    white: "#FFFAFA"

};

const AccountPage = (props) => {
  const [hoverValue, setHoverValue] = useState(undefined);
  const [currentValue, setCurrentValue] = useState(0);
  const [Rating, setRating] = useState("");
  const [Comment, setComment] = useState("");
  const [Post, setPost] = useState(false)
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  useEffect(() => {
    const requestOptions = {
           method: 'POST',
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
               rating: Rating,
               comment: Comment
           })
       };
    if(Post) {
               setPost(false);
                fetch("/rating", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(Rating);
                        props.setAccount(Rating);
                        let success = data.success;
                        console.log(success);
                        setComment("");
                        setRating("");
                    })
                }
    }, [Post, Comment, Rating, props]);

  return (
    <div style={styles.container}>
      <h2>My Account:</h2>
        <p>Welcome {props.accountName}!</p>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={30}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.white}
              style={{
                marginRight: 20,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="Please Share your own experience at this place"
        style={styles.text}
      />

      <button style={styles.button}>Post</button>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    border: "2px solid #191919",
    borderRadius: 0,
    padding: 50,
    margin: "20px 0",
    minHeight: 160,
    width: 400
  },
  button: {
    border: "2px solid #191919",
    borderRadius: 0,
    width: 100,
    padding: 10,
      cursor: "pointer"
  }
};

export default AccountPage;