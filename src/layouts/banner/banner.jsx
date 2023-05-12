import React from 'react';
import './banner.css';

function Banner({ content, background }) {
    const bannerStyle = {
        backgroundImage: `url(${background})`,
    };

    return (
        <div className='banner' style={bannerStyle}>
            <div className='banner_title'>{ content }</div>
        </div>
    );
}

export default Banner;
