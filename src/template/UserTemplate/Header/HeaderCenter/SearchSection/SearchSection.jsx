import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchSection = memo((props) => {
  const { searchInfos } = props;
  const SectionWrapper = styled.div`
    display: flex;
    width: 850px;
    height: 66px;
    border-radius: 32px;
    border: 1px solid #ddd;
    background-color: #fff;

    .item {
      flex: 1;
      display: flex;
      align-items: center;
      border-radius: 32px;

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 30px;

        .title {
          font-size: 12px;
          font-weight: 800;
          color: #222;
        }

        .desc {
          font-size: 14px;
          color: #666;
        }
      }

      .divider {
        height: 32px;
        width: 1px;
        background-color: #ddd;
      }

      &:hover {
        background-color: #eee;
      }
    }
  `;
  return (
    <SectionWrapper>
      {searchInfos.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="">
                
              </div>
            </div>
            {index !== searchInfos.length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        );
      })}
    </SectionWrapper>
  );
});

SearchSection.propTypes = {
  searchInfos: PropTypes.array,
};
export default SearchSection;
