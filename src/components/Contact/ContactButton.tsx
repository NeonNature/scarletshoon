import React, { useCallback } from "react";
import { ContactButtonContainer, GlowWrap, Glow } from "./ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type ContactButtonProps = {
  icon: IconDefinition;
  color: string;
  link: string;
};
const ContactButton = ({ icon, color, link }: ContactButtonProps) => {
	const onNavigate = useCallback(
		// @ts-ignore
    () => window.open(link, "_blank").focus(),
    [link]
  );
  return (
    <ContactButtonContainer color={color} onClick={onNavigate}>
      <FontAwesomeIcon icon={icon} />
      <GlowWrap>
        <Glow />
      </GlowWrap>
    </ContactButtonContainer>
  );
};

export default ContactButton;
