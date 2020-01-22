import React from 'react';
import styled from 'styled-components';

import { colors } from '../../config/constants';
import PropTypes from 'prop-types';
import { createClassName } from '../../lib/classNameHelper';

const classPrefix = 'card';
export const classes = {
	container: createClassName(classPrefix, 'container'),
};

const Container = styled.div`
	//padding: 30px;
	display: inline-block;
	background-color: ${ colors.background };
	box-shadow: 0px 2px 4px ${ colors.boxShadowGrey };
	
`;

const Card = (props) => {
	const { children, width, height } = props;

	return (
		<Container
			width={ width }
			height={ height }
		>
			{ children }
		</Container>
	);
};

Card.defaultProps = {
	width: 'auto',
	height: 'auto',
};

Card.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	])
};

export default Card;
