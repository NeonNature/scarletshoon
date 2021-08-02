import React, { useCallback, useMemo } from "react";
import { ArtSectionContainer, ArtboxContainer, Artbox } from "./ui";

type ArtSectionProps = {
  name: string;
  images: string[];
  onViewImage: (images: string[], name: string, index: number) => void;
  activateArt: boolean;
};
const ArtSection = ({ name, images, onViewImage, activateArt }: ArtSectionProps) => {
  const onClickArtwork = useCallback(
    (index) => onViewImage(images, name, index),
    [images, name]
  );
  const artworks = useMemo(
    () =>
      images?.map((image, index) => (
        <img
          src={require("../../assets/images/" + image)}
          onClick={() => onClickArtwork(index)}
        />
      )),
    []
  );

  return (
    <ArtSectionContainer>
      {name}
      <ArtboxContainer activateArt={activateArt}>
	      <Artbox>{artworks}</Artbox>
      </ArtboxContainer>
    </ArtSectionContainer>
  );
};

export default ArtSection;
