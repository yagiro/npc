import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../../config/constants';

const Container = styled.div`  
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;`;

const PriceText = styled.span`  
	font-size: ${ fonts.headerNormal };
	text-align: center;`;

const SubPriceText = styled.span`  
	text-align: center;
	color: ${colors.textLightGray};
	font-size: ${ fonts.paragraphNormal };
	margin-top: 15px;`;

const UpPriceText = styled.span`  
	text-align: center;
	color: ${colors.textLightGray};
	font-size: ${ fonts.paragraphNormal };
`;

const CloudGuardPriceSection = ({ price, additionalText }) => {

	return (
		<Container>
			<UpPriceText>Starting at</UpPriceText>
			<PriceText>${ price }</PriceText>
			<SubPriceText>{ additionalText }</SubPriceText>
		</Container>
	);
};

export default CloudGuardPriceSection;

