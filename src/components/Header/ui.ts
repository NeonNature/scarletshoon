import styled from "styled-components";

export const HeaderContainer = styled.div`
  color: #fff;
  padding: 10px;
  text-align: center;
  position: relative;
  top: 50%;
`;

export const HeaderTitle = styled.div`
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 8px;
  color: red;
  top: -48px;
  position: relative;
`;

export const HeaderSvgRect = styled.rect`
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  fill: transparent;
  stroke: #fff;
  border-bottom: 5px solid #fff;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
`;

export const HeaderSvgWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 320px;
  
  &:hover ${HeaderSvgRect} {
    stroke-width: 2px;
    stroke-dashoffset: 0;
    stroke-dasharray: 760;
  }
`;
