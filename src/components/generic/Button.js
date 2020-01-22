import React, { useCallback } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../config/constants';
import PropTypes from 'prop-types';

const buttonStyles = {
	fill: {
		bgColor: colors.checkPointPink,
		labelColor: colors.background,
		border: 'none',
		hoverBgColor: colors.checkPointPinkHover,
	},
	empty: {
		bgColor: colors.background,
		labelColor: colors.buttonGrey,
		border: `1px solid ${ colors.lightgray }`,
		hoverBgColor: 'none',
	},
	bordered: {
		bgColor: colors.boxShadowGrey,
		labelColor: colors.buttonGrey,
		border: `1px solid ${ colors.checkPointPinkHover }`,
		hoverBgColor: 'none',
	}
};

const Container = styled.div`  
	display: flex;
	align-items: center;
	justify-content: space-around;
	
	background: ${ (props) => buttonStyles[props.styleType].bgColor };
	border: ${ (props) => buttonStyles[props.styleType].border };
	box-sizing: border-box;
	
	border-radius: 3px;
	color:  ${ (props) => buttonStyles[props.styleType].labelColor };
	cursor: pointer;
	transition: background-color .2s;
	padding: 0 5px;
	
	width: ${ (props) => props.width ? props.width : 'auto' };
	font: ${ fonts.paragraph };
	height:  ${ (props) => props.height ? props.height : 'auto' };
	
	&:hover {
		background-color: ${ (props) => buttonStyles[props.styleType].hoverBgColor };
	}
`;

const Button = (props) => {
	const { children, styleType, onClick, width, height } = props;
	const handleClick = useCallback(() => {
		if (onClick) onClick();
	}, [ onClick ]);


	return (
		<Container
			styleType={ styleType }
			width={ width }
			height = { height }
			onClick={ handleClick }
		>
			{ children }
		</Container>
	);
};

Button.defaultProps = {
	styleType: 'empty',
};

Button.propTypes = {
	styleType: PropTypes.oneOf(['fill', 'empty', 'bordered']),
	width: PropTypes.string,
	height: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export const buttonStyleTypes = {
	fill: 'fill',
	empty: 'empty',
	bordered: 'bordered'
};
export default Button;
