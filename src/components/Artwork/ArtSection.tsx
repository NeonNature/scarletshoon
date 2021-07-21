import React, { useCallback, useMemo } from "react";
import { ArtSectionContainer, Artbox } from "./ui";

type ArtSectionProps = {
  name: string;
  images: string[];
  onViewImage: (images: string[], name: string, index: number) => void;
};
const ArtSection = ({ name, images, onViewImage }: ArtSectionProps) => {
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
      <Artbox>{artworks}</Artbox>
    </ArtSectionContainer>
  );
};

export default ArtSection;
