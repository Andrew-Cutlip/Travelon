import React, {useEffect, useState} from "react";
import '../StarRatings.css';
import { FaStar } from "react-icons/fa";

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

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comment: Comment,
                location: Location,
                }
            )
        };
        if (Submit) {
            setSubmit(false);
            fetch("/make-post", requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }, [Comment, Location, Submit]);

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

  return (
    <div style={styles.container}>
      <div style={styles.restaurant}>
          <label style={{color: 'white'}}>Venue:
            <textarea placeholder="Name" style={styles.restaurants}  value={Name} onChange={handleName} required/>
          </label>
          <label style={{color: 'white'}}>Location:
            <textarea placeholder="City" style={styles.restaurants}  value={Location} onChange={handleLocation} required/>
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
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 30,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea
        placeholder="Please share your own experience at this place"
        style={styles.textarea}
         value={Comment} onChange={handleComment}
        required
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
  restaurant: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  restaurants: {
    border: "2px solid #a9a9a9",
    borderRadius: 0,
    padding: 5,
    margin: " 20px 0",
    minHeight: 60,
    width: 200,
    textAlign: "center",
  },
  textarea: {
    border: "2px solid #a9a9a9",
    borderRadius: 0,
    padding: 50,
    margin: "20px 0",
    minHeight: 150,
    width: 400,
    textAlign: "center",
  },

};

export default StarRatings;