import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import Particles from "react-particles-js";
import { PageContainer } from "../../components/shared/ui";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArtSection from "../../components/Artwork/ArtSection";
import ArtModal from "../../components/Artwork/ArtModal";
import Contact from "../../components/Contact/Contact";
import { useHistory, useLocation } from "react-router";

const Artworks = () => {
  const [modalImages, setModalImages] = useState([]);
  const [modalName, setModalName] = useState("");
  const [modalToggle, setModalToggle] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [activateContact, setActivateContact] = useState(false);
  const [activateArt, setActivateArt] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  const contactRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);

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

  const onClickContact = useCallback(() => {
    // @ts-ignore
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setActivateContact(true);
    setTimeout(() => {
      setActivateContact(false);
    }, 3000);
  }, [setActivateContact, contactRef]);

  const onClickArt = useCallback(() => {
    // @ts-ignore
    artRef.current.scrollIntoView({ behavior: "smooth" });
    setActivateArt(true);
    setTimeout(() => {
      setActivateArt(false);
    }, 3000);
  }, [setActivateArt, artRef]);

  const onClickCommission = useCallback(
    () => history.push("/commission"),
    [history]
  );
  const onClickAbout = useCallback(() => history.push("/about"), [history]);

  useEffect(() => {
  	console.log(pathname)
    if (pathname === "/art") {
	    onClickArt();
    }
    if (pathname === "/contact") {
	    onClickContact();
    }
  }, []);

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
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: false,
            },
          },
        }}
      />
      <div>
        <Header
          onClickContact={onClickContact}
          onClickArt={onClickArt}
          onClickCommission={onClickCommission}
          onClickAbout={onClickAbout}
        />
        <PageContainer ref={artRef}>
          <ArtSection
            activateArt={activateArt}
            name={"Environmental Design"}
            images={environmentalImages}
            onViewImage={onViewImage}
          />
          <ArtSection
            activateArt={activateArt}
            name={"Concept Art"}
            images={conceptImages}
            onViewImage={onViewImage}
          />
          <ArtSection
            activateArt={activateArt}
            name={"Stylized"}
            images={styledImages}
            onViewImage={onViewImage}
          />
          <ArtSection
            activateArt={activateArt}
            name={"Portrait"}
            images={portraitImages}
            onViewImage={onViewImage}
          />
          <div ref={contactRef}>
            <Contact activateContact={activateContact} />
          </div>
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
