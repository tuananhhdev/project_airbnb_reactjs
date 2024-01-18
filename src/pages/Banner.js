import React, { memo } from "react";
import BannerBackground from "../assets/img/banner_house.jpg";
import styled from "styled-components";
const Banner = memo(() => {
  // const HomeBanner = styled.div`
  //   height: 529px;
  //   background: url(${BannerBackground})})
  //     center/cover;
  // `;
  return (
    <div
      style={{
        background: `url(${BannerBackground})`,
      }}></div>
    // <HomeBanner></HomeBanner>
  );
});

export default Banner;
