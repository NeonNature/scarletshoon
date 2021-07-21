import styled from "styled-components";

export const ArtSectionContainer = styled.div`
  padding: 10px;
  margin: 0 auto;
  color: #fff;
`;

export const Artbox = styled.div`
  border: 5px solid #fff;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  height: 150px;

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
  background-color: #00000080;
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
`;
