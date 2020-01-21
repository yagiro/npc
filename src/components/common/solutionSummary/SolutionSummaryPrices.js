import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { createClassName } from '../../../lib/classNameHelper';
import { colors, fonts } from '../../../config/constants';
import { formatCurrency } from '../../../lib/formatters';

const classPrefix = 'solution-summary-prices';
export const classes = {
	label: createClassName(classPrefix, 'label'),
	price: createClassName(classPrefix, 'price'),
	item: createClassName(classPrefix, 'item'),
	header: createClassName(classPrefix, 'header'),
};

const Container = styled.div`
	> div {
		display: flex;
		justify-content: space-between;
		width: 235px;
		
	}
	
	> .${ classes.header } {
		border-bottom: 1px solid ${ colors.textDark };
		margin: 10px 0;
		padding-bottom: 8px;
		align-items: center;
		
		> div:first-child {
			color: ${ colors.textDark };
			font: ${ fonts.paragraph };
			line-height: 1em;
		}
		
		> div:last-child {
			font: ${ fonts.paragraphBig };
			text-decoration: line-through;
			color: ${ colors.textLightGray };
			line-height: 1em;
		}
	}

	> .${ classes.item } {
		padding: 10px 0;
		align-items: center;
		
		.${ classes.label } {
			font: ${ fonts.paragraph };
			color: ${ colors.textLightGray };
			line-height: 1em;
		}
		
		.${ classes.price } {
			font: ${ fonts.paragraphBig };
			color: ${ colors.textDark };
			line-height: 1em;
		}
	}
	
`;

const renderPrices = (items, currency) => {
	return items.map((item, i) => (
		<div
			key={ i }
			className={ classes.item }
		>
			<div className={ classes.label }>
				{ item.label }
			</div>
			<div className={ classes.price }>
				{ currency }{ formatCurrency(item.price) }
			</div>
		</div>
	));
};

const calcNetPrice = (items) => {
	return items.reduce((total, item) => total + item.price, 0);
};

const SolutionSummaryPrices = (props) => {
	const { items, currency } = props;
	return (
		<Container>
			<div className={ classes.header }>
				<div>Net Price:</div>
				<div>{ currency }{ formatCurrency(calcNetPrice(items)) }</div>
			</div>
			{ renderPrices(items, currency) }
		</Container>
	);
};

SolutionSummaryPrices.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		price: PropTypes.number,
	})),
	currency: PropTypes.string,
};

export default SolutionSummaryPrices;