import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';

const classPrefix = 'solution-group-footer';
export const classes = {
	container: createClassName(classPrefix, 'container'),
	list:  createClassName(classPrefix, 'list'),
	label:  createClassName(classPrefix, 'label'),
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: ${ ({ cubeHeight }) => Math.round(cubeHeight * 0.16) }px;
	box-shadow: 0px -1px 3px rgba(0, 0, 0, .1);
	position: absolute;
	left: 0;
	bottom: 0;
	border-radius: 0 0 8px 8px;
	padding-left: 30px;
	transition: height .3s, background-color .2s;
	overflow: hidden;
	
	& > .${ classes.label } {
		font: ${ fonts.mediumText };
		color: ${ colors.solutionGroupTitle };
		text-transform: capitalize;
	}
	
	& .${ classes.list } {
		list-style-type: disc;
		font: ${ fonts.paragraph };
		line-height: 30px;
		color: ${ colors.background };
		text-transform: capitalize;
		position: absolute;
		bottom: 0;
		display: none;
		list-style-position: inside;
		height: 130px;
	}
	
`;

const SolutionGroupCubeFooter = (props) => {
	const { title, features, cubeHeight } = props;
	return (
		<Container
			className={ classes.container }
			cubeHeight={ cubeHeight }
		>
			<div className={ classes.label }>{ title }</div>
			<ul className={ classes.list }>
				{ features.map((feature, i) => <li key={ i }>{feature}</li>) }
			</ul>
		</Container>
	);
};

SolutionGroupCubeFooter.propTypes = {
	title: PropTypes.string,
	features: PropTypes.arrayOf(PropTypes.string),
	cubeHeight: PropTypes.number.isRequired,
};

export default SolutionGroupCubeFooter;
