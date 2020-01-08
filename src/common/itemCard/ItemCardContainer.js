import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PdfIcon from './PdfIcon';
import SelectButton from './SelectButton';
import CloudGuardPriceSection from './priceSections/CloudGuardPriceSection';
import CommonPriceSection from './priceSections/CommonPriceSection';
import ManagementPriceSection from './priceSections/ManagementPriceSection';
import CloudGuardLeftSection from './leftSections/CloudGuardLeftSection';
import NetworkLeftSection from './leftSections/NetworkLeftSection';
import SmallBusinessesLeftSection from './leftSections/SmallBusinessesLeftSection';
import MobileEndpointLeftSection from './leftSections/MobileEndpointLeftSection';
import ManagementLeftSection from './leftSections/ManagementLeftSection';
import { cardTypes } from '../../config/constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 858px;
  height: 263px;
  border-radius: 3px;
  -webkit-box-shadow: 0 2px 6px #0000001A;
  -moz-box-shadow: 0 2px 6px #0000001A;
  box-shadow: 0 2px 6px #0000001A;
  margin-bottom: 1rem;
  background: #FFFFFF;
`;

const RightSection = styled.div`  
  display: flex;
  flex-direction: column;
  width: 275px;
  height: 100%;
  background: #F7F8F9;
  padding: 30px;
  box-sizing: border-box;
  justify-content: space-between;`;

const ButtonSection = styled.div`  
  display: flex;
`;

const Label = styled.label`  
 color: #6B6F81;
  font-size: 14px;`;

const leftSections = {
	[cardTypes.cloudGuard]: CloudGuardLeftSection,
	[cardTypes.network]: NetworkLeftSection,
	[cardTypes.smallBusinesses]: SmallBusinessesLeftSection,
	[cardTypes.mobileAndEndpoint]: MobileEndpointLeftSection,
	[cardTypes.management]: ManagementLeftSection,
};

const priceSections = {
	[cardTypes.cloudGuard]: CloudGuardPriceSection,
	[cardTypes.network]: CommonPriceSection,
	[cardTypes.smallBusinesses]: CommonPriceSection,
	[cardTypes.mobileAndEndpoint]: CommonPriceSection,
	[cardTypes.management]: ManagementPriceSection,
};

const ItemCardContainer = ({ cardType, ...otherProps }) => {

	const LeftSection = leftSections[cardType];
	const PriceSection = priceSections[cardType];

	return (
		<Container>
			<LeftSection { ...otherProps }/>
			<RightSection>
				<Label>
					<input type="checkbox" name="checkbox" value="value"/> Compare
				</Label>
				<PriceSection { ...otherProps } />
				<ButtonSection>
					<PdfIcon/>
					<SelectButton/>
				</ButtonSection>
			</RightSection>
		</Container>
	);
};

ItemCardContainer.propTypes = {
	cardType: PropTypes.oneOf(Object.values(cardTypes)).isRequired
};

export default ItemCardContainer;
