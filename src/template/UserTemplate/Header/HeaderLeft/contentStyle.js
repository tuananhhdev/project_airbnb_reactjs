import styled, { css } from "styled-components";
export const LeftWrrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.css.theme.isAlpha ? "#fff" : props.css.theme.color.primaryColor};

  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`;
