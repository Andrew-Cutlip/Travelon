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

    <div className={"star"}>
      <div style={styles_s.venue}>
          <label style={{color: 'black'}}>Venue(required)
            <TextField required
                       color={"secondary"}
                       //style={styles_s.venues}
                       value={Name} onChange={handleName}
                       variant="outlined"
                       fullWidth={100}
            />
          </label>
          <label style={{color: 'black'}}>Location(required)
            <TextField required
                       color={"secondary"}
                       //style={styles_s.venues}
                       value={Location}
                       onChange={handleLocation}
                       variant="outlined"
                       fullWidth={100}
            />
          </label>
          <label style={{color: 'black'}}>Number of stars(1 to 5; required)
            <TextField required
                       color={"secondary"}
                       //style={styles_s.venues}
                       value={Star}
                       onChange={handleStar}
                       variant="outlined"
                       fullWidth={100}
            />
          </label>
      </div>
      <div style={styles_s.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={35}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              //value={Star}
              //onChange={handleStar}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 50,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
        <form style={{color: 'black'}}>Comment(required)
      <TextField
        placeholder="Please share your own experience at this place"
        required
        color={"secondary"}
        //style={styles_s.textarea}
        value={Comment} onChange={handleComment}
        //color="secondary"
        variant="outlined"
        fullWidth={100}
      />
        </form>
        <input type="submit" onClick={handleSubmit} value="Post"/>
    </div>
  );
}


const styles_s = {
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