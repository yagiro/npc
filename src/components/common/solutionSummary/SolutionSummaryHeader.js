import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { formatCurrency } from '../../../lib/formatters';
import { createClassName } from '../../../lib/classNameHelper';
import { colors, fonts } from '../../../config/constants';

const classPrefix = 'solution-summary-header';
export const classes = {
	label: createClassName(classPrefix, 'label'),
	price: createClassName(classPrefix, 'price'),
};

const Container = styled.div`
	padding: 10px 0;

	> .${ classes.label } {
		font: ${ fonts.paragraphBig };
		color: ${ colors.textLightGray }
		text-transform: uppercase;
		line-height: 18px;
	}
	
	> .${ classes.price } {
		padding-top: 5px;
		font: ${ fonts.headerSecond };
		color: ${ colors.textDark };
		font-weight: bold;
		line-height: 30px;
	}
`;

const SolutionSummaryHeader = (props) => {
	const { currency, price } = props;
	return (
		<Container>
			<div className={ classes.label }>your solution</div>
			<div className={ classes.price }>{ currency }{ formatCurrency(price) }</div>
		</Container>
	);
};

SolutionSummaryHeader.propTypes = {
	currency: PropTypes.string,
	price: PropTypes.number,
};

export default SolutionSummaryHeader;