import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { fonts, colors } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';
import SolutionSummary from './SolutionSummary';

const classPrefix = 'solution-summary-additionall';
export const classes = {
	left: createClassName(classPrefix, 'left'),
};

const Container = styled.div`
	height: ${ props => props.height }px;
	border: 1px red solid;
	position: relative;
`;

const checkVisible = (elem, doc, height) => {
	const rect = elem.current.getBoundingClientRect();
	// console.dir(elem.current.childNodes[0]);
	// console.dir(elem.current);
	console.log(window.innerHeight, rect.bottom, height);
	const viewHeight = Math.max(doc.documentElement.clientHeight, window.innerHeight);
	const result = rect.bottom - window.innerHeight + height < 0;
	return result;
};

const SolutionSummaryContainer = (props) => {
	const { ...otherProps } = props;
	const elem = useRef(null);

	const [ inBottom, setInBottom ] = useState(false);
	const [ height, setHeight ] = useState(400);
	const [ top, setTop ] = useState(0);
	const handleScroll = (event) => {
		const rect = elem.current.getBoundingClientRect();
		setTop(rect.top);
		// console.log(rect.top)
		const isVisible = checkVisible(elem, event.srcElement, height-50);
		// console.log(elem);
		if (inBottom !== isVisible) {
			setInBottom(isVisible);
			setTop(rect.top);
		}
	};

	useEffect(() => {
		// elem.current.setAttribute('style', `height: ${elem.current.childNodes[0].offsetHeight}px`);
		if (elem && elem.current) {
			setHeight(elem.current.childNodes[0].offsetHeight);
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	},[ elem, inBottom ]);

	return (
		<Container height={ height }>
			<div className={ classes.left }>

			</div>
			<div ref={ elem }>
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
