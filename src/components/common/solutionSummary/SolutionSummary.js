import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../../generic/Card';
import SolutionSummaryHeader from './SolutionSummaryHeader';
import SolutionSummaryPrices from './SolutionSummaryPrices';
import SolutionSummaryFlags from './SolutionSummaryFlags';
import SolutionSummaryAddCardButton from './SolutionSummaryAddCardButton';
import SolutionSummaryInclude from './SolutionSummaryInclude';
import { colors } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';

export const currency = {
	USD: '$',
	JPY: '‎¥',
	EUR: '€',
};

const classPrefix = 'solution-summary';
export const classes = {
	body: createClassName(classPrefix, 'body'),
	include: createClassName(classPrefix, 'include'),
};

const Container = styled.div`
	background-color: ${ colors.background };
	
	> .${ classes.body } {
		padding: 30px;
	}

	> .${ classes.include } {
		border-top: 1px ${ colors.textLightGray } solid;
		height: ${ props => props.inBottom ? 0 : 'auto' };
	}
	
	
`;

const MainContainer = styled.div`
	z-index: 100;
	top: ${ props => props.top+'px' };
	position: ${ props => props.position};
	right: ${ props => props.inBottom ? 0 : '20px'};
	transition:${ props => props.transition};
`;

const SolutionSummary = (props) => {
	const { currency, totalPrice, items, onAddToCart, flags, onFlagChange, inBottom, top } = props;
	const handlerAddCart = useCallback(() => onAddToCart, [ onAddToCart ]);
	const handlerFlagChange = useCallback((id, value) => onFlagChange(id, value), [ onFlagChange ]);

	// const elem = useRef(null);

	const [ position, setPosition ] = useState('fixed');
	const [ topPos, setTopPos ] = useState(0);
	const [ transition, setTransition ] = useState('none');
	useEffect(() => {
		if (inBottom) {
			setPosition('absolute');
			setTransition('none');
			setTopPos(-top);
			setTimeout(() => {
				setTransition('all .3s');
				setTopPos(0);
			}, 0);
		} else {
			setTransition('none');
			setPosition('fixed');
			setTopPos(window.innerHeight - 500);
			setTimeout(() => {
				setTransition('all .3s');
				setTopPos(0);
			});
		}
	}, [ inBottom ]);

	return (
		<MainContainer inBottom={ inBottom } top={ topPos } transition={ transition } position={ position }>
			<Card>
				<Container>
					<div className={ classes.body }>
						<SolutionSummaryHeader
							price={ totalPrice }
							currency={ currency }
						/>
						<SolutionSummaryPrices
							items={ items }
							currency={ currency }
						/>
						<SolutionSummaryFlags
							items={ flags }
							onChange={ handlerFlagChange }
						/>
						<SolutionSummaryAddCardButton
							onClick={ handlerAddCart }
						/>
					</div>
					{
						!inBottom &&
						<div className={ classes.include }>
							<SolutionSummaryInclude

							/>
						</div>
					}
				</Container>
			</Card>
		</MainContainer>
	);
};

SolutionSummary.defaultProps = {
	currency: currency.USD,
	totalPrice: 0,
	items: [],
	flags: [],
	onAddToCart: () => console.log('onAddToCart is not defined'),
	onFlagChange: () => console.log('onFlagChange is not defined'),
};

SolutionSummary.propTypes = {
	currency: PropTypes.string,
	totalPrice: PropTypes.number,
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		price: PropTypes.number,
	})),
	onAddToCart: PropTypes.func,
	flags: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.any.isRequired,
		label: PropTypes.string.isRequired,
		value: PropTypes.bool,
	})),
	inBottom: PropTypes.bool,
	onFlagChange: PropTypes.func, /** (flagId, value) => void */
	top: PropTypes.number,
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
