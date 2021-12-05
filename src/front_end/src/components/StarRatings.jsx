import React, {useEffect, useState} from "react";
import '../StarRatings.css';
import { FaStar } from "react-icons/fa";
import { TextField} from "@material-ui/core";


const colors = {
    orange: "#FFD700",
    white: "#FFFAFA"

};

function StarRatings() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
    const [Submit, setSubmit] = useState(false);
    const [Comment, setComment] = useState("");
    const [Location, setLocation] = useState("");
    const [Name, setName] = useState("");
    const [Star, setStar] = useState("");

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comment: Comment,
                location: Location,
                starRating: Star,
                Name: Name,
                }
            )
        };
        if (Submit) {
            setSubmit(false);
            fetch("/rating", requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }, [Star, Comment, Location, Submit, Name]);

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const handleSubmit = () => {
        setSubmit(true);
    };

  const handleComment = (e) => {
      setComment(e.target.value);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleStar = (e) => {
        setStar(e.target.value);
    }

  return (
    <div style={styles.container}>
      <div style={styles.venue}>
          <label style={{color: 'white'}}>Venue:
            <TextField required label="Venue" style={styles.venues} value={Name} onChange={handleName} color={"secondary"}/>
          </label>
          <label style={{color: 'white'}}>Location:
            <TextField required label="City" style={styles.venues}  value={Location} onChange={handleLocation} color="secondary"/>
          </label>
          <label style={{color: 'white'}}>Rating:
            <TextField required label="Stars" style={styles.venues}  value={Star} onChange={handleStar} color="secondary"/>
          </label>
      </div>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              //value={Star}
              //onChange={handleStar}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 30,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <TextField
        placeholder="Please share your own experience at this place"
        required label="Comment"
        style={styles.textarea}
         value={Comment} onChange={handleComment}
        color="secondary"
      />
        <input type="submit" onClick={handleSubmit} value="Post"/>
    </div>
  );
}


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
  venue: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  venues: {
    border: "2px solid #a9a9a9",
    borderRadius: 10,
    padding: 5,
    margin: " 20px 0",
    minHeight: 100,
    width: 300,
    textAlign: "center",
  },
  textarea: {
    border: "2px solid #a9a9a9",
    borderRadius: 10,
    padding: 50,
    margin: "20px 0",
    minHeight: 150,
    width: 400,
    textAlign: "center",
  },

};

export default StarRatings;