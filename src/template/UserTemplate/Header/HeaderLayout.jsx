import React, { memo, useRef, useState } from "react";
import classNames from "classnames";
import { shallowEqual, useSelector } from "react-redux";
import useScrollPosition from "../../../hook/useScrollPosition";
import styled, { ThemeProvider } from "styled-components";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderRight from "./HeaderRight/HeaderRight";
import bannerBackground from "../../../assets/img/banner_house.jpg";
const HeaderLayout = memo(() => {
  const [isSearch, setIsSearch] = useState(false);

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );

  const { isFixed, topAlpha } = headerConfig;

  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);

  if (!isSearch) prevY.current = scrollY;

  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  const isAlpha = topAlpha && scrollY === 0;
  console.log("isAphla", isAlpha, scrollY);
  const HeaderWrapper = styled.div`
    &.fixed {
      position: fixed;
      z-index: 99;
      top: 0;
      left: 0;
      right: 0;
    }

    .content {
      // position: relative;
      z-index: 19;
      transition: all 250ms ease;
      // border-bottom: 1px solid #eee;
      //

      .top {
        display: flex;
        align-items: center;
        height: 80px;
      }
    }

    .cover {
      position: fixed;
      z-index: 9;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  `;
  const SearchWrapper = styled.div`
    transition: height 250ms ease;
    height: ${(props) => (props.isSearch ? "100px" : "0")};
  `;

  return (
    <>
      <ThemeProvider theme={{ isAlpha }}>
        <HeaderWrapper className={classNames({ fixed: isFixed })}>
          <div
            className="content"
            // style={{
            //   background: `url(${bannerBackground})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   height: "700px",
            //   objectFit: "cover",
            // }}
          >
            <div className="top">
              <HeaderLeft />
              <HeaderCenter
                isSearch={isAlpha || isSearch}
                searchBarClick={(e) => setIsSearch(true)}
              />
              <HeaderRight />
            </div>
            <SearchWrapper isSearch={isAlpha || isSearch} />
          </div>
          {isSearch && (
            <div className="cover" onClick={(e) => setIsSearch(false)}></div>
          )}
        </HeaderWrapper>
        <img
          className="w-full"
          src={bannerBackground}
          alt=""
          style={{
            height: "650px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        />
      </ThemeProvider>
    </>
  );
});

export default HeaderLayout;
