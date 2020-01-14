import React, { useCallback } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../config/constants';
import PropTypes from 'prop-types';

const btnColor = {
	fill: { bg: colors.checkPointPink, label: colors.background, border: 'none' },
	empty: { bg: colors.background , label: colors.buttonGrey, border: `1px solid ${ colors.lightgray }` }
};

const Container = styled.div`  
	display: flex;
	align-items: center;
	justify-content: space-around;
	
	background: ${ (props) => btnColor[props.color].bg };
	border: ${ (props) => btnColor[props.color].border };
	box-sizing: border-box;
	
	border-radius: 3px;
	color:  ${ (props) => btnColor[props.color].label };
	margin-left: 10px;
	cursor: pointer;
	transition: background-color .2s;
	padding: 0 5px;
	
	width: ${ (props) => props.width ? props.width : 'auto' };
	font: ${ fonts.paragraph };
	height:  ${ (props) => props.height ? props.height : 'auto' };
	
	&:hover {
		background-color: ${ (props) => props.color !== 'empty' ?  colors.checkPointPinkHover : 'none' };
	}
`;

const Button = (props) => {
	const { color, onClick, width, height } = props;
	const handleClick = useCallback(() => {
		onClick();
		console.log('button click');
	}, []);


	return (
		<Container color={ color } width={ width } height = { height } onClick={ handleClick }>
			{ props.children }
		</Container>
	);
};

Button.defaultProps = {
	color: 'empty'
};

Button.propTypes = {
	color: PropTypes.oneOf(['fill', 'empty']),
	width: PropTypes.string,
	height: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
