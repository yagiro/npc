import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../config/constants';

const btnColor = {
	fill: { bg: colors.checkPointPink, label: colors.background, border: 'none' },
	empty: { bg: colors.background , label: colors.buttonGrey, border: `1px solid ${ colors.lightgray }` }
};


const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 103px;
	height: 30px;
	background: ${ (props) => btnColor[props.color].bg };
	border-radius: 3px;
	border: ${ (props) => btnColor[props.color].border };
	box-sizing: border-box;
	cursor: pointer;
	
	text-align: left;
	font: Regular 14px/21px DIN Pro;
	letter-spacing: 0;
	color:  ${ (props) => btnColor[props.color].label };
`;

const CompareButton = (props) => {
	const { color, onClick } = props;
	return (
		<Container color={ color } onClick={ () => onClick()}>{ props.children }</Container>
	);
};

CompareButton.defaultProps = {
	color: 'empty'
};

CompareButton.propTypes = {
	color: PropTypes.oneOf(['fill', 'empty']),
	onClick: PropTypes.func,
};

export default CompareButton;
