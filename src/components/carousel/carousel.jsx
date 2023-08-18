import React, { useState } from "react";
import './carousel.css';
import Arrow_back from '../../assets/images/arrow_back.png';
import Arrow_forward from '../../assets/images/arrow_forward.png';

function Carousel({ pictures }) {
    const [current, setCurrent] = useState(0)
    const length = pictures.length
    const goToPrevious = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const goToNext = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if (!Array.isArray(pictures) || length <= 0) {
        return null
    }

    return (
        <div>
            <div className="carousel">
                {pictures &&
                    pictures.map((picture, index) => {
                        return (
                            <div
                                className={index === current ? 'picture active' : 'picture'}
                                key={picture.id}
                            >
                                <img
                                    className="carousel_img"
                                    key={index}
                                    src={picture}
                                    alt="carou_image"
                                />
                                <div className={index === current ? 'compteur' : 'compteur2'}>
                                    {current + 1}/{length}
                                </div>
                            </div>
                        )
                    })}
                <div className={pictures.length === 1 ? 'hide' : ''}>
                    <img
                        className="back"
                        src={Arrow_forward}
                        alt="vector_right"
                        onClick={goToNext}
                    />
                    <img
                        className="forward"
                        src={Arrow_back}
                        alt="vector_left"
                        onClick={goToPrevious}
                    />
                </div>
            </div>
        </div>
    )
}

export default Carousel;

