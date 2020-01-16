import React from 'react';
import styled from 'styled-components';

const Container = styled.label`
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

const Input = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;

const Checkmark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #eee;
`;

const Checkbox = () => {
	return (
		<Container>One
			<Input type="checkbox"/>
			<Checkmark className="checkmark"> </Checkmark>
		</Container>
	);
};

export default Checkbox;
