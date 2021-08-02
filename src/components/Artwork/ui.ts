import styled from "styled-components";

export const ArtSectionContainer = styled.div`
  padding: 10px;
  margin: 0 auto;
  color: #fff;
`;

type ArtboxContainerProps = {
  activateArt: boolean;
};

export const ArtboxContainer = styled.div<ArtboxContainerProps>`
  margin-top: 10px;
  --borderWidth: 3px;
  position: relative;
  border-radius: var(--borderWidth);
  transition: all 0.5s ease;
  box-shadow: ${(props) =>
          props.activateArt ? "0px 0px 14px #4195fc" : "none"};

  &:after {
    transition: all 0.5s ease;
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: ${(props) =>
      props.activateArt
        ? "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)"
        : "#fff"};
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

export const Artbox = styled.div`
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  height: 150px;

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
    height: 5px;
    border-radius: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  img {
    cursor: pointer;
    transition: all 0.5s ease;
    flex: auto;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ArtModalContainer = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000BF;
`;

export const ArtGalleryContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
`;

export const ArtGalleryName = styled.div`
  color: #fff;
  font-size: 30px;
`;

export const ArtGallery = styled.div`
  width: 80%;
  height: 80%;
`;

export const ArtModalCloseIcon = styled.div`
  color: #fff;
  position: absolute;
  right: 50px;
  top: 50px;
  cursor: pointer;
  font-size: 30px;
  transition: all 0.5s ease;
  
  &:hover {
    font-size: 36px;
  }
`;
