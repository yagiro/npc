import React from 'react';
import styled from 'styled-components';
import PdfIcon from './PdfIcon';
import SelectButton from './SelectButton';
import {
	CARD_ITEM_TYPE_CLOUD_GUARD,
	CARD_ITEM_TYPE_MANAGEMENT,
	CARD_ITEM_TYPE_MOBILE_AND_ENDPOINT,
	CARD_ITEM_TYPE_SMALL_BUSINESSES,
	CARD_ITEM_TYPE_NETWORK,
	CARD_ITEM_TYPES
} from '../../config/constants';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 858px;
  height: 263px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 2px 6px #0000001A;
  -moz-box-shadow: 0px 2px 6px #0000001A;
  box-shadow: 0px 2px 6px #0000001A;
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
  justify-content: space-between;
`;
const ButtonSection = styled.div`  
  display: flex;
`;

const ItemCardContainer = ({ cardType }) => {
	
	const mainSectionRender = (cardType) => {
		switch (cardType) {
			case CARD_ITEM_TYPE_CLOUD_GUARD:
				return <h4>Main section CLOUD_GUARD</h4>;
			case CARD_ITEM_TYPE_MANAGEMENT:
				return <h4>Main section MANAGEMENT</h4>;
			case CARD_ITEM_TYPE_MOBILE_AND_ENDPOINT:
				return <h4>Main section MOBILE_AND_ENDPOINT</h4>;
			case CARD_ITEM_TYPE_SMALL_BUSINESSES:
				return <h4>Main section SMALL_BUSINESSES</h4>;
			case CARD_ITEM_TYPE_NETWORK:
				return <h4>Main section CARD_ITEM_TYPE_NETWORK</h4>;
			default:
				return <h4>Main section Default</h4>;
		}
	};

	const priceSectionRender = (cardType) => {
		switch (cardType) {
			case CARD_ITEM_TYPE_CLOUD_GUARD:
				return <h4>Price section CLOUD_GUARD</h4>;
			case CARD_ITEM_TYPE_MANAGEMENT:
				return <h4>Price section MANAGEMENT</h4>;
			case CARD_ITEM_TYPE_MOBILE_AND_ENDPOINT:
				return <h4>Price section MOBILE_AND_ENDPOINT</h4>;
			case CARD_ITEM_TYPE_SMALL_BUSINESSES:
				return <h4>Price section SMALL_BUSINESSES</h4>;
			case CARD_ITEM_TYPE_NETWORK:
				return <h4>Price section CARD_ITEM_TYPE_NETWORK</h4>;
			default:
				return <h4>Price section Default</h4>;
		}
	};
	
	return (
		<Container>
			{mainSectionRender(cardType)}
			<RightSection>
				<label className="compare-label">
					<input type="checkbox" name="checkbox" value="value"/> Compare
				</label>
				{priceSectionRender(cardType)}
				<ButtonSection>
					<PdfIcon/>
					<SelectButton/>
				</ButtonSection>
			</RightSection>
		</Container>
	);
};

ItemCardContainer.propTypes = {
	cardType: PropTypes.oneOf(CARD_ITEM_TYPES).isRequired
};

export default ItemCardContainer;
