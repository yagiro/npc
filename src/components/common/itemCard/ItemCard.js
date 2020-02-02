import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PdfIcon from './common/PdfIcon';
import SelectButton from '../../generic/Button';
import CloudGuardPriceSection from './priceSections/CloudGuardPriceSection';
import CommonPriceSection from './priceSections/CommonPriceSection';
import ManagementPriceSection from './priceSections/ManagementPriceSection';
import CloudGuardMainSection from './mainSections/CloudGuardMainSection';
import NetworkMainSection from './mainSections/NetworkMainSection';
import SmallBusinessesMainSection from './mainSections/SmallBusinessesMainSection';
import MobileEndpointMainSection from './mainSections/MobileEndpointMainSection';
import ManagementMainSection from './mainSections/ManagementMainSection';
import { cardTypes, fonts } from '../../../config/constants';
import Checkbox from '../../generic/Checkbox';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	min-height: 263px;
	border-radius: 3px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, .1);
	margin-bottom: 1rem;
	background: #FFFFFF;
	box-sizing: border-box;
	position: relative;
	color: #4C5059;
	font: ${ fonts.paragraph };
`;

const RightSection = styled.div`  
	display: flex;
	flex-direction: column;
	width: 275px;
	background: #F7F8F9;
	padding: 30px;
	box-sizing: border-box;
	justify-content: space-between;
`;

const ButtonSection = styled.div`  
	display: flex;
	justify-content: space-between;
`;

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
				<Checkbox label="Compare"/>
				<PriceSection { ...data } />
				<ButtonSection>
					<PdfIcon/>
					<SelectButton width="calc(100% - 45px)" styleType="fill" onClick={() => {
						console.log('select clicked');
					}}> Select </SelectButton>
				</ButtonSection>
			</RightSection>
		</Container>
	);
};

ItemCard.propTypes = {
	cardType: PropTypes.oneOf(Object.values(cardTypes)).isRequired,
	data: PropTypes.shape({
		title: PropTypes.string,
		price: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		description: PropTypes.string,
		specificationsTitles: PropTypes.object
	})
};

export default ItemCard;


