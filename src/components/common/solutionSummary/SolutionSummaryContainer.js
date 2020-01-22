import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { createClassName } from '../../../lib/classNameHelper';
import SolutionSummary from './SolutionSummary';
import { classes as sulutionSummaryClasses } from './SolutionSummary';

const classPrefix = 'solution-summary-container';
export const classes = {
	left: createClassName(classPrefix, 'left'),
	right: createClassName(classPrefix, 'right'),
};

const Container = styled.div`
	height: ${ props => props.height }px;
	border: 1px red solid;
	position: relative;
	//display: flex;
	
	.${ classes.left } {
		background-color: blue;
	}
	
	.${ classes.right } {
	
	}
`;

const checkVisible = (elem, doc, height) => {
	const rect = elem.current.getBoundingClientRect();
	return rect.bottom - window.innerHeight + height < 0;
};

const SolutionSummaryContainer = (props) => {
	const { ...otherProps } = props;
	const solutionSummaryWraper = useRef(null);
	const [ inBottom, setInBottom ] = useState(false);
	const [ height, setHeight ] = useState(400);
	const [ top, setTop ] = useState(0);

	const handleScroll = (event) => {
		const rect = solutionSummaryWraper.current.getBoundingClientRect();
		const isVisible = checkVisible(solutionSummaryWraper, event.srcElement, height);
		setTop(rect.top);
		if (inBottom !== isVisible) {
			setInBottom(isVisible);
			setTop(rect.top);
		}
	};

	useEffect(() => {
		if (solutionSummaryWraper) {
			setHeight(solutionSummaryWraper.current.getElementsByClassName(sulutionSummaryClasses.body)[0].offsetHeight);
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	},[ solutionSummaryWraper, inBottom ]);

	return (
		<Container height={ height }>
			<div className={ classes.left }>

			</div>
			<div ref={ solutionSummaryWraper } className={ classes.right }>
				<SolutionSummary inBottom={ inBottom } { ...otherProps } top={ top } />
			</div>
		</Container>
	);
};

SolutionSummaryContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
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
	isBottom: PropTypes.bool,
	onFlagChange: PropTypes.func, /** (flagId, value) => void */
};

export default SolutionSummaryContainer;
