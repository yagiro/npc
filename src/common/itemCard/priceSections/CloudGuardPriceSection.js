import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config/constants';

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
  margin-top: 15px;`;

const UpPriceText = styled.span`  
  text-align: center;
  color: ${colors.textLightGray};
  font-size: 14px;`;
const CloudGuardPriceSection = (props) => {

	return (
		<Container>
			<UpPriceText>Starting at</UpPriceText>
			<PriceText>$1,400</PriceText>
			<SubPriceText>1 PC/YEAR & 1 Mobile/Year</SubPriceText>
		</Container>
	);
};

export default CloudGuardPriceSection;
