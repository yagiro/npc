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
	height: 48px;
	box-shadow: 0px -1px 3px ${ colors.cubeShadow };
	position: absolute;
	left: 0;
	bottom: 0;
    border-radius: 0px 0px 8px 8px;
	padding-left: 30px;
	transition: height .3s, background-color .2s;
	overflow: hidden;
	
	> .${ classes.label } {
	  font: ${ fonts.mediumText };
	  color: ${ colors.solutionGroupTitle };
	  text-transform: capitalize;
	}
	
	.${ classes.list } {
	  list-style-type: disc;
	  font: ${ fonts.paragraph };
	  line-height: 30px;
      color: ${ colors.background };
      text-transform: capitalize;
      position: absolute;
      bottom: 0px;
      display: none;
      list-style-position: inside;
      padding: 0;
      height: 130px;
      margin-top: 0;
	}
	
`;

const SolutionGroupCubeBodyFooter = (props) => {
	const { label, features } = props;
	return (
		<Container className={ classes.container }>
			<div className={ classes.label }>{ label }</div>
			<ul className={ classes.list }>
				{ features.map((feature, i) => <li key={ i }>{feature}</li>) }
			</ul>
		</Container>
	);
};

SolutionGroupCubeBodyFooter.propTypes = {
	label: PropTypes.string,
	features: PropTypes.arrayOf(PropTypes.string),
};

export default SolutionGroupCubeBodyFooter;
