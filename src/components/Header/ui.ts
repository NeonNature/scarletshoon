import styled from "styled-components";

export const HeaderContainer = styled.div`
  color: #fff;
  padding: 10px;
  text-align: center;
  position: relative;
  top: 50%;
`;

export const HeaderTitle = styled.div`
  padding: 1rem 2rem;
  background: none;
  border: none;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 3px;
  max-width: 250px;
  margin: 0 auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 2px solid #fff;
    transition: transform 0.2s;
  }

  &::after {
    transform: translate(3px, 3px);
  }

  &::before {
    transform: translate(-3px, -3px);
  }

  &:hover::before,
  &:hover::after {
    transform: translate(0);
  }
`;
