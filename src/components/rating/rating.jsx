import StarActive from "../../assets/images/star-active.png";
import StarInactive from "../../assets/images/star-inactive.png";
import "./rating.css";

function Rating({ rating }) {
    const starArray = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {starArray.map((star) => rating >= star ? (<img key={star.toString()} className="ratingIcon" src={StarActive} alt=""/>) :
                (<img key={star.toString()} className="ratingIcon" src={StarInactive} alt=""/>))}
        </div>
    );
            }

export default Rating;