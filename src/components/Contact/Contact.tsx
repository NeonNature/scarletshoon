import React, { useMemo, Ref } from "react";
import { ContactContainer } from "./ui";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faArtstation, faInstagram } from "@fortawesome/free-brands-svg-icons";
import ContactButton from "./ContactButton";

type ContactProps = {
	activateContact: boolean;
}
const Contact = ({ activateContact }: ContactProps) => {
	const facebookLink = "";
	const instagramLink = "https://www.instagram.com/scarletshoon.art/";
	const artstationLink = "";
	const mailLink = "kyishoonle96@gmail.com";
  return (
    <ContactContainer activateContact={activateContact}>
      <ContactButton icon={faFacebookF} color={"#2A6FFE"} link={facebookLink} />
      <ContactButton icon={faInstagram} color={"#EC025F"} link={instagramLink} />
      <ContactButton icon={faArtstation} color={"#0092DA"} link={artstationLink} />
      <ContactButton icon={faEnvelope} color={"#BB211E"} link={"mailto:"+mailLink} />
    </ContactContainer>
  );
};

export default Contact;
