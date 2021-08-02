import React, {useCallback} from "react";
import { PageContainer } from "../../components/shared/ui";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useHistory} from "react-router";
import {CommissionHeader, CommissionContainer} from "../../components/Commission/ui";

const Commission = () => {
	const history = useHistory();
	const onClickContact = useCallback(() => history.push('/contact'), [history]);

	const onClickArt = useCallback(() => history.push('/art'), [history]);

	const onClickCommission = useCallback(() => history.push('/commission'), [history]);

	const onClickAbout = useCallback(() => history.push('/about'), [history]);
  return (
    <div>
      <Header
	      onClickContact={onClickContact}
	      onClickArt={onClickArt}
	      onClickCommission={onClickCommission}
	      onClickAbout={onClickAbout} />
	    <PageContainer>
			<CommissionContainer>
				<CommissionHeader>Environmental Design</CommissionHeader>
				<CommissionHeader>Concept Art</CommissionHeader>
				<CommissionHeader>Stylized</CommissionHeader>
				<CommissionHeader>Portrait</CommissionHeader>
			</CommissionContainer>
	    </PageContainer>
      <Footer />
    </div>
  );
};

export default Commission;
