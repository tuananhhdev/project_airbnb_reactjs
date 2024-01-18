import React, { useEffect, useState, memo } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);
  function infoClickHandle() {
    setShowPanel(true);
  }
  const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    color: ${(props) => props.theme.text.primaryColor};
    font-weight: 600;

    .btns {
      display: flex;
      box-sizing: content-box;
      color: ${(props) =>
        props.theme.isAlpha ? "#fff" : props.theme.text.primaryColor};

      .btn {
        height: 18px;
        line-height: 18px;
        padding: 12px 15px;
        cursor: pointer;
        box-sizing: content-box;
      }
    }

    .profile {
      position: relative;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 77px;
      height: 42px;
      margin-right: 24px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 25px;
      background-color: #fff;
      color: ${(props) => props.theme.text.primaryColor};
      cursor: pointer;

      ${(props) => props.theme.mixin.boxShadow};

      .panel {
        position: absolute;
        top: 54px;
        right: 0;
        width: 240px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
        color: #666;

        .top,
        .bottom {
          padding: 10px 0;

          .item {
            height: 40px;
            line-height: 40px;
            padding: 0 16px;

            &:hover {
              background-color: #f5f5f5;
            }
          }
        }

        .top {
          border-bottom: 1px solid #ddd;
        }
      }
    }
  `;
  return (
    <RightWrapper>
      <div className="btns">
        <a className="btn text-white cursor-pointer text-lg font-normal">
          Trở thành chủ nhà
        </a>
        <span className="btn">
          <i class="fa-solid fa-earth-americas text-white text-xl"></i>
        </span>
        <span className="btn">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false">
            <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
          </svg>
        </span>
      </div>

      <div className="profile" onClick={infoClickHandle}>
        <i class="fa-solid fa-bars text-xl"></i>
        <i class="fa-solid fa-user text-xl"></i>
        {showPanel && (
          <div className="panel">
            <div className="top">
              <NavLink to={"/dangnhap"}>
                <div className="item login">Đăng nhập</div>
              </NavLink>
              <NavLink to={"/dangky"}>
                <div className="item register ">Đăng ký</div>
              </NavLink>
            </div>
            <div className="bottom">
              <div className="item">Cho thuê nhà</div>
              <div className="item">Tổ chức trải nghiệm</div>
              <div className="item">Trợ giúp</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
