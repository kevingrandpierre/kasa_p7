import React from 'react';
import StarActive from '../../assets/images/star-active.png';
import StarInactive from '../../assets/images/star-inactive.png';
import './rating.css';

function Rating({ rating }) {
    const starArray = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {starArray.map(star => (
                <img
                    key={`star-${star}`}
                    className="ratingIcon"
                    src={rating >= star ? StarActive : StarInactive}
                    alt={rating >= star ? 'Active star' : 'Inactive star'}
                />
            ))}
        </div>
    );
}

export default Rating;
