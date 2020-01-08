import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config/constants';
import PropTypes from 'prop-types';

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
  font-size: 14px;
  margin-top: 30px;`;

const CommonPriceSection = ({ price, additionalText, ...otherProps }) => {


	return (
		<Container>
			<PriceText>${ price }</PriceText>
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
