import React from 'react';
import styled from 'styled-components';

import Button, { buttonStyleTypes } from '../../generic/Button';
import { colors, fonts } from '../../../config/constants';

const Container = styled.div`
	margin-top: 15px;
	
	> * {
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 8px;
		transition: transform .1s;
		
		&:active {
			transform: translateY(2px);
		}
	}
	
	font: ${ fonts.paragraphBig };
	color: ${ colors.background };
	text-transform: capitalize;
`;

const SolutionSummaryAddCardButton = () => {

	return (
		<Container>
			<Button height="45px" styleType={ buttonStyleTypes.fill }>
				add to card
			</Button>
		</Container>
	);
};

SolutionSummaryAddCardButton.defaultProps = {

};

SolutionSummaryAddCardButton.propTypes = {

};

export default SolutionSummaryAddCardButton;