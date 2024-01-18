import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const indicator = (props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();

  useEffect(() => {
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance;

    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  const IndicatorStyle = styled.div`
    overflow: hidden;

    .i-content {
      display: flex;
      position: relative;
      transition: transform 200ms ease;

      > * {
        flex-shrink: 0;
      }
    }
  `;
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
};

export default indicator;
