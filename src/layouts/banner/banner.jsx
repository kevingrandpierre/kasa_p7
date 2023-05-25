import React from 'react';
import './banner.css';
import { useLocation } from 'react-router-dom';
import BannerHome from "../../assets/images/Background.png";
import BannerAbout from "../../assets/images/BackgroundAbout.png";
import styled from 'styled-components';



const BannerWrapper = styled.div`
  width: 95%;
  height: 223px;
  mix-blend-mode: darken;
  border-radius: 25px;
  position: relative;
  margin: auto;
  background-position: center;
  background-size: 100%;
  background-image: ${({ bannerImg }) => `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bannerImg})`};
  }
`;
const BannerText = styled.p`
  position: absolute;
  color: #FFFFFF;
  font-size: 48px;
  font-weight: 500;
  z-index: 1;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
function Banner() {
    const location = useLocation();

    const bannerImg = location.pathname === "/" ? BannerHome : BannerAbout;

    return location.pathname === "/" ? (
        <BannerWrapper bannerImg={bannerImg} className='bannerWrapper'>
            <BannerText>Chez vous, partout et ailleurs</BannerText>
        </BannerWrapper>
    ) : (
        <BannerWrapper bannerImg={bannerImg}>
            <div className="bannerContent">
            </div>
        </BannerWrapper>
    );
}

export default Banner;
