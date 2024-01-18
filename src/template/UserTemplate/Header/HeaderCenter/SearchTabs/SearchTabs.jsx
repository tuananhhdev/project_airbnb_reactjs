import React, { useState, memo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function itemClickHandle(index) {
    setCurrentIndex(index);
    if (tabClick) tabClick(index);
  }
  const TabsWrapper = styled.div`
    display: flex;
    color: ${(props) => (props.theme.isAlpha ? "#fff" : "#222")};
    .text {
      width: 100px;
    }
    .item {
      position: relative;
      width: 64px;
      height: 20px;
      margin: 10px 16px;
      font-size: 18px;
      cursor: pointer;
      margin-left:20px
    }
  `;
  return (
    <TabsWrapper>
      {titles.map((item, index) => {
        return (
          <div
            className={classNames("item", { active: currentIndex === index })}
            key={item}
            onClick={(e) => itemClickHandle(index)}>
            <span className="text flex text-white">{item}</span>
            <span className="bottom hover:text-black duration-500 "></span>
          </div>
        );
      })}
    </TabsWrapper>
  );
});

SearchTabs.propTypes = {
  titles: PropTypes.array,
};
export default SearchTabs;
