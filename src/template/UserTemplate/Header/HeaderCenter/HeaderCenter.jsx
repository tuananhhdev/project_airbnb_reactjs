import React, { useState, memo } from "react";
import { CSSTransition } from "react-transition-group";
import SearchTitles from "../../../../assets/data/search_titles.json";
import styled from "styled-components";
import SearchTabs from "./SearchTabs/SearchTabs";
import SearchSection from "./SearchSection/SearchSection";
import "./HeaderCenter.css";
const HeaderCenter = (props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map((item) => item.title);

  function SearchClickHandle() {
    if (searchBarClick) searchBarClick();
  }

  const CenterWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 48px;
    .search-bar {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 500px;
      height: 48px;
      box-sizing: border-box;
      padding: 0 8px;
      // background:#fff
      // border: 1px solid #ddd;
      background-color: #fff;
      border-radius: 24px;
      cursor: pointer;
      transition: 0.5 all ${(props) => props.theme.mixin.boxShadow};

      .text {
        padding: 0 16px;
        color: #000;
        font-weight: 600;
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: #fff;
        background-color: ${(props) => props.theme.color.primaryColor};
      }
    }

    .search-detail {
      position: relative;
      transform-origin: 50% 0;
      will-change: transform, opacity;

      .infos {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        min-width: 860px;
        background-color: transparent;
      }
    }

    .detail-exit {
      transform: scale(1) translateY(0);
      opacity: 1;
    }

    .detail-exit-active {
      transition: all 250ms ease;
      transform: scale(0.35, 0.727273) translateY(-58px);
      opacity: 0;
    }

    .detail-enter {
      transform: scale(0.35, 0.727273) translateY(-58px);
      opacity: 0;
    }

    .detail-enter-active {
      transform: scale(1) translateY(0);
      // opacity: 1;
      transition: all 250ms ease;
    }

    .bar-enter {
      transform: scale(2.85714, 1.375) translateY(58px);
      opacity: 0;
    }

    .bar-enter-active {
      transition: all 250ms ease;
      transform: scale(1) translateY(0);
      opacity: 1;
    }

    .bar-exit {
      opacity: 0;
    }
  `;
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}>
        <div className="search-bar" onClick={SearchClickHandle}>
          <div className="text">Địa điểm bất kỳ</div>
          <div className="text">Tuần bất kỳ</div>
          <div className="text">Thêm khách</div>
          <div className="icon">
            <i class="fa-solid fa-magnifying-glass icon"></i>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}>
        <div className="search-detail text-white">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos text-white">
            <SearchSection searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
};

export default HeaderCenter;
