import React, { Profiler } from "react";
import HeaderLayout from "../../template/UserTemplate/Header/HeaderLayout";
import styled from "styled-components";
import ProductTabs from "./ProductRoom/ProductTabs/ProductTabs";
import ProductRoom from "./ProductRoom/ProductRoom";

const HomePage = () => {
  const HomeWrapper = styled.div`
    /* margin-top: 80px; */
    > .content {
      width: 1032px;
      margin: 0 auto;
    }
  `;

  return (
    <HomeWrapper>
      <HeaderLayout />
      {/* <ProductTabs /> */}
      <ProductRoom />
    </HomeWrapper>
  );
};

export default HomePage;
