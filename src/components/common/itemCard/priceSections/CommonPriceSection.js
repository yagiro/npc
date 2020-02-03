import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, fonts } from '../../../../config/constants';
import { formatCurrency } from '../../../../lib/formatters';

const Container = styled.div`  
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;`;

const PriceText = styled.span`  
	font-size: 30px;
	text-align: center;`;

const SubPriceText = styled.span`  
	text-align: center;
	color: ${colors.textLightGray};
	font-size: ${ fonts.paragraphNormal };
	margin-top: 30px;
`;

const CommonPriceSection = ({ price, additionalText }) => {

	return (
		<Container>
			<PriceText>{ formatCurrency(price) }</PriceText>
			<SubPriceText>{ additionalText }</SubPriceText>
		</Container>
	);
};

CommonPriceSection.defaultProps = {
	price: 70,
	additionalText: '1 PC/YEAR & 1 Mobile/Year',
};

CommonPriceSection.propTypes = {
	price: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	additionalText: PropTypes.string,
};

export default CommonPriceSection;

