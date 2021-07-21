import styled from "styled-components";

export const ContactContainer = styled.div`
  text-align: center;
`;

export const GlowWrap = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const Glow = styled.i`
  display: block;
  position: absolute;
  width: 40%;
  height: 200%;
  background: rgba(255, 255, 255, 0.2);
  top: 0;
  filter: blur(5px);
  transform: rotate(45deg) translate(-450%, 0);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const ContactButtonContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  color: #fff;
  background-color: #3573dc;
  position: relative;
  box-shadow: 5px 7.5px 12.5px 0 rgba(0, 0, 0, 0.2);

  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    box-shadow: none;
    margin-top: 10px;

    ${Glow} {
      transform: rotate(45deg) translate(450%, 0);
      transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
  }
`;
