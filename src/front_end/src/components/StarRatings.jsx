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

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <div style={styles.container}>
      <div style={styles.restaurant}>
          <label style={{color: 'white'}}>Restaurant Name:
            <textarea placeholder="Name of the restaurant" style={styles.restaurants} required/>
          </label>
          <label style={{color: 'white'}}>Restaurant Address:
            <textarea placeholder="Address" style={styles.restaurants} required/>
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
        required
      />

      <input type="submit" name="submit" value="Submit"/>
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