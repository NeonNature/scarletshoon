import React, { useCallback, useMemo, useState } from "react";
import Particles from "react-particles-js";
import { PageContainer } from "../../components/shared/ui";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArtSection from "../../components/Artwork/ArtSection";
import ArtModal from "../../components/Artwork/ArtModal";
import Contact from "../../components/Contact/Contact";

const Artworks = () => {
  const [modalImages, setModalImages] = useState([]);
  const [modalName, setModalName] = useState("");
  const [modalToggle, setModalToggle] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const environmentalImages = useMemo(
    () => ["e01.jpeg", "e02.jpeg", "e03.jpeg", "e04.jpeg", "e05.jpeg"],
    []
  );
  const conceptImages = useMemo(
    () => ["p01.jpeg", "p02.jpeg", "p03.jpeg", "p04.jpeg", "p05.jpeg"],
    []
  );
  const styledImages = useMemo(() => ["placeholder.jpeg"], []);
  const portraitImages = useMemo(() => [], []);

  const onViewImage = useCallback(
    (images, name, index) => {
      setModalImages(images);
      setModalIndex(index);
      setModalName(name);
      setModalToggle(true);
    },
    [setModalName, setModalToggle, setModalImages]
  );

  const onCloseModal = useCallback(() => {
    setModalToggle(false);
  }, [setModalToggle]);

  return (
    <>
	    <Particles
		    params={{
			    particles: {
				    number: {
					    value: 200,
					    density: {
						    enable: true,
						    value_area: 1000,
					    }
				    },
			    },
		    }}
	    />
      <div>
        <Header />
        <PageContainer>
          <ArtSection
            name={"Environmental Design"}
            images={environmentalImages}
            onViewImage={onViewImage}
          />
          <ArtSection
            name={"Concept Art"}
            images={conceptImages}
            onViewImage={onViewImage}
          />
          <ArtSection
            name={"Stylized"}
            images={styledImages}
            onViewImage={onViewImage}
          />
          <ArtSection
            name={"Portrait"}
            images={portraitImages}
            onViewImage={onViewImage}
          />
          <Contact />
        </PageContainer>
        <Footer />
      </div>
      {modalToggle && (
        <ArtModal
          name={modalName}
          images={modalImages}
          index={modalIndex}
          onCloseModal={onCloseModal}
        />
      )}
    </>
  );
};

export default Artworks;
