import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Card from '../../generic/Card';
import SolutionSummaryHeader from './SolutionSummaryHeader';
import SolutionSummaryPrices from './SolutionSummaryPrices';
import SolutionSummaryCheckbox from './SolutionSummaryCheckbox';
import SolutionSummaryAddCardButton from './SolutionSummaryAddCardButton';
import SolutionSummaryInclude from './SolutionSummaryInclude';

const checkBoxes = [
	{ id: 1, label: 'High Availability (HA) cluster of two appliances' }
];
export const currency = {
	USD: '$',
	JPY: '‎¥',
	EUR: '€',
};

const SolutionSummary = (props) => {
	const { currency, totalPrice, items, onAddToCart, onCheck } = props;
	const handlerAddCart = useCallback(() => onAddToCart, [ onAddToCart ]);
	const handlerCheck = useCallback((id) => onCheck(id), [ onCheck ]);

	return (
		<Card>
			<SolutionSummaryHeader
				price={ totalPrice }
				currency={ currency }
			/>
			<SolutionSummaryPrices
				items={ items }
				currency={ currency }
			/>
			<SolutionSummaryCheckbox
				items={ checkBoxes }
				onCheck={ handlerCheck }
			/>
			<SolutionSummaryAddCardButton
				onClick={ handlerAddCart }
			/>
			<SolutionSummaryInclude

			/>
		</Card>
	);
};

SolutionSummary.defaultProps = {
	currency: currency.USD,
	totalPrice: 0,
	items: [],
	onAddToCart: () => console.log('onAddToCart is not defined'),
	onCheck: () => console.log('onCheck is not defined'),
};

SolutionSummary.propTypes = {
	currency: PropTypes.string,
	totalPrice: PropTypes.number,
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		price: PropTypes.number,
	})),
	onAddToCart: PropTypes.func,
	onCheck: PropTypes.func,
};

export default SolutionSummary;

/*
	currency: string // 'USD' / 'JPY'
	totalPrice: number
	netPrice
	items: Array<label, price>
	TODO: figure out the business/ui flow of 'high availabilty' checkbox and decide about props
	TODO: understand the '+ include' behavior
	onAddToCart
 */
