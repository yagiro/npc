import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createClassName } from '../../lib/classNameHelper';
import { colors } from '../../config/constants';

const classPrefix = 'number-option';
export const classes = {
	container: createClassName(classPrefix, 'container'),
};

const Container = styled.div`  
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color:  ${ (props) => props.selected ? colors.checkPointPink : colors.background };
	color: ${ (props) => props.selected ? colors.background : 'auto' };
	box-shadow: ${ (props) => props.selected ? 'none' : `0px 2px 4px ${ colors.boxShadowGrey }` };
	width: 30px;
	height: 27px;
	border-radius: 4px;
	transition: background-color .2s, color .2s, opacity .2s;
	
	&:hover {
		background-color:  ${ colors.checkPointPink };
		color: ${ (props) => props.selected ? 'auto' : colors.background };
		opacity: ${ (props) => props.selected ? '1' : '.4' };
	}
`;

const NumberOption = ({ value, selected, onClick }) => (
	<Container
		selected={ selected }
		className={ classes.container }
		onClick={ () => onClick(value) }
	>
		{ value }
	</Container>
);

NumberOption.propTypes = {
	value: PropTypes.number.isRequired,
	selected: PropTypes.bool,
	onClick: PropTypes.func
};

export default NumberOption;

/*
	- hover color ????
 */