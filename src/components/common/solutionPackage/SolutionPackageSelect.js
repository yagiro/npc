import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts } from '../../../config/constants';

const Container = styled.div`  
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ selected }) => selected ? '#DE3970' : '#F6F6F6' };
	font: ${ fonts.paragraphMiddle };
	line-height: 1em;
	color: ${({ selected }) => selected ? colors.background : colors.checkPointPink };
	cursor: pointer;
`;

const SolutionPackageSelect = ({ selected }) => {

	return (
		<Container selected={ selected }>
			Selected
		</Container>
	);
};

SolutionPackageSelect.propTypes = {
	selected: PropTypes.bool
};

export default SolutionPackageSelect;