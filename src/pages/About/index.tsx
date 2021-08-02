import React, { useCallback } from "react";
import { PageContainer } from "../../components/shared/ui";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router";

const About = () => {
  const history = useHistory();
  const onClickContact = useCallback(() => history.push("/contact"), [history]);

  const onClickArt = useCallback(() => history.push("/art"), [history]);

  const onClickCommission = useCallback(
    () => history.push("/commission"),
    [history]
  );

  const onClickAbout = useCallback(() => history.push("/about"), [history]);
  return (
    <div>
      <Header
        onClickContact={onClickContact}
        onClickArt={onClickArt}
        onClickCommission={onClickCommission}
        onClickAbout={onClickAbout}
      />
	    <PageContainer>

	    </PageContainer>
      <Footer />
    </div>
  );
};

export default About;
