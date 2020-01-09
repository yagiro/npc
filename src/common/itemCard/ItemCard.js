import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PdfIcon from './PdfIcon';
import SelectButton from './SelectButton';
import CloudGuardPriceSection from './priceSections/CloudGuardPriceSection';
import CommonPriceSection from './priceSections/CommonPriceSection';
import ManagementPriceSection from './priceSections/ManagementPriceSection';
import CloudGuardMainSection from './mainSections/CloudGuardMainSection';
import NetworkMainSection from './mainSections/NetworkMainSection';
import SmallBusinessesMainSection from './mainSections/SmallBusinessesMainSection';
import MobileEndpointMainSection from './mainSections/MobileEndpointMainSection';
import ManagementMainSection from './mainSections/ManagementMainSection';
import { cardTypes, colors } from '../../config/constants';

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
  background: ${colors.whitesmoke};
  padding: 30px;
  box-sizing: border-box;
  justify-content: space-between;`;

const ButtonSection = styled.div`  
  display: flex;
`;

const Label = styled.label`  
 color: ${colors.textLightGray};
  font-size: 14px;`;

const mainSections = {
	[cardTypes.cloudGuard]: CloudGuardMainSection,
	[cardTypes.network]: NetworkMainSection,
	[cardTypes.smallBusinesses]: SmallBusinessesMainSection,
	[cardTypes.mobileAndEndpoint]: MobileEndpointMainSection,
	[cardTypes.management]: ManagementMainSection,
};

const priceSections = {
	[cardTypes.cloudGuard]: CloudGuardPriceSection,
	[cardTypes.network]: CommonPriceSection,
	[cardTypes.smallBusinesses]: CommonPriceSection,
	[cardTypes.mobileAndEndpoint]: CommonPriceSection,
	[cardTypes.management]: ManagementPriceSection,
};

const ItemCard = ({ cardType, data, ...otherProps }) => {

	const MainSection = mainSections[cardType];
	const PriceSection = priceSections[cardType];

	return (
		<Container>
			<MainSection { ...data }/>
			<RightSection>
				<Label>
					<input type="checkbox" name="checkbox" value="value"/> Compare
				</Label>
				<PriceSection { ...data } />
				<ButtonSection>
					<PdfIcon/>
					<SelectButton/>
				</ButtonSection>
			</RightSection>
		</Container>
	);
};

ItemCard.propTypes = {
	cardType: PropTypes.oneOf(Object.values(cardTypes)).isRequired
};

export default ItemCard;

