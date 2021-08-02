import styled from "styled-components";

type ContactContainerProps = {
  activateContact: boolean;
};

export const ContactContainer = styled.div<ContactContainerProps>`
  text-align: center;

  box-shadow: ${(props) =>
    props.activateContact ? "0px 0px 14px #4195fc" : "none"};
  width: fit-content;
  margin: 15px auto;

  --borderWidth: 3px;
  background: #151515;
  position: relative;
  border-radius: var(--borderWidth);
  transition: all 0.5s ease;

  &:after {
    transition: all 0.5s ease;
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: ${(props) =>
      props.activateContact
        ? "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)"
        : "none"};
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const GlowWrap = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 50%;
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

type ContactButtonContainerProps = {
  color: string;
};

export const ContactButtonContainer = styled.div<ContactButtonContainerProps>`
  cursor: pointer;
  display: inline-block;
  margin: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  color: #fff;
  background-color: ${(props) => props.color};
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
