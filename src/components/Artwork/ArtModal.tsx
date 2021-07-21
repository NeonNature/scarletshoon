import React, { useMemo } from "react";
import { Portal } from "react-portal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  ArtModalContainer,
  ArtGalleryContainer,
  ArtGalleryName,
  ArtGallery,
  ArtModalCloseIcon,
} from "./ui";

type ArtModalProps = {
  name: string;
  images: string[];
  index: number;
  onCloseModal: () => void;
};
const ArtModal = ({ name, images, index, onCloseModal }: ArtModalProps) => {
  const artworks = useMemo(
    () =>
      images?.map((image) => (
        <div>
          <img src={require("../../assets/images/" + image)} />
          <p className="legend">Image</p>
        </div>
      )),
    [images]
  );

  return (
    <Portal>
      <ArtModalContainer>
        <ArtModalCloseIcon>
          <FontAwesomeIcon icon={faTimes} onClick={onCloseModal} />
        </ArtModalCloseIcon>
        <ArtGalleryContainer>
          <ArtGalleryName>{name}</ArtGalleryName>
          <Carousel
            showArrows={true}
            selectedItem={index}
          >
            {artworks}
          </Carousel>
        </ArtGalleryContainer>
      </ArtModalContainer>
    </Portal>
  );
};

export default ArtModal;
