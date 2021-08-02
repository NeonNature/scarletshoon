import styled from "styled-components";
import Stroke from '../../assets/images/brushstroke.svg';

export const CommissionContainer = styled.div`
  padding: 10px;
  margin: 0 auto;
  color: #fff;
`;

export const CommissionHeader = styled.div`
  background: url(${Stroke}) no-repeat left;
  background-size: 200px 100%;
  height: 75px;
  vertical-align: middle;
  font-size: 28px;
  color: #fff;
  line-height: 75px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
