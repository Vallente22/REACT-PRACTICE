import starFilled from "../assets/star-filled.png"
import starEmpty from "../assets/star-empty.png"

const Star = (props) => {
  //as seen below onClick gets the custom attribute in order to be able to toggle the star
  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "Removed from favorites" : "Add to favorites"}
      className="favorite-button"
    >
    <img
      src={props.isFilled ? starFilled : starEmpty}
      alt={props.isFilled ? "filled star icon" : "empty star icon"}
      className="favorite"
    />
    </button>
  )
}

export default Star;