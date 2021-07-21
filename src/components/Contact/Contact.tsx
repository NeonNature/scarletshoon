import React, { useMemo } from "react";
import { ContactContainer } from "./ui";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import ContactButton from "./ContactButton";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactButton icon={faFacebookF} color={"blue"} link={"https://www.google.com"} />
      <ContactButton icon={faFacebookF} color={"blue"} link={"https://www.google.com"} />
      <ContactButton icon={faFacebookF} color={"blue"} link={"https://www.google.com"} />
      <ContactButton icon={faFacebookF} color={"blue"} link={"https://www.google.com"} />
      <ContactButton icon={faFacebookF} color={"blue"} link={"https://www.google.com"} />
    </ContactContainer>
  );
};

export default Contact;
