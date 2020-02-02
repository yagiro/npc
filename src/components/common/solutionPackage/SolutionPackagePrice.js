import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fonts } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';
import { formatCurrency } from '../../../lib/formatters';

const classPrefix = 'solution-package-price';
export const classes = {
	chips: createClassName(classPrefix, 'chips'),
	price: createClassName(classPrefix, 'price'),
	sku: createClassName(classPrefix, 'sku'),
};

const Container = styled.div`  
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	& > *:not(:last-child) {
		margin-bottom: 15px;
	}
	
	.${ classes.chips } {
		border-radius: 39px;
		background-color: #DCEEFB;
		height: 20px;
		font: ${ fonts.paragraphSmall };
		letter-spacing: 0.05px;
		color: #0F609B;
		line-height: 1em;
		padding: 4px 12px;
	}
	
	.${ classes.price } {
		font: ${ fonts.headerFourth };
		line-height: 1em;
		font-weight: bold;
		color: #333333;
	}
	
	.${ classes.sku } {
		font: ${ fonts.paragraph };
		letter-spacing: 0;
		color: #A2A2A2;
	}
`;

const SolutionPackagePrice = (props) => {
	const { price, category } = props;
	return (
		<Container>
			<div className={ classes.chips }>{ category }</div>
			<div className={ classes.price }>{ formatCurrency(price) }</div>
			<div className={ classes.sku }>SKU:CPAP-MHS-6803</div>
		</Container>
	);
};

SolutionPackagePrice.propTypes = {
	price: PropTypes.number,
	category: PropTypes.string,
};

export default SolutionPackagePrice;
