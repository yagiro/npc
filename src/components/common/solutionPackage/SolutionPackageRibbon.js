import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fonts } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';

const classPrefix = 'solution-package';
export const classes = {
	corner: createClassName(classPrefix, 'selected-corner'),
};

const Container = styled.div`
	display: ${ ({ show }) => show ? 'block' : 'none' };
	position: absolute;
	left: 0;
	top: 10px;
	width: 165px;
	height: 15px;
	background-color: #56B8E6;
	clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%);
	font: ${ fonts.paragraphSmall };
	line-height: 1em;
	color: #16181D;
	padding-top: 2px;
	padding-left: 12px;
`;

const SolutionPackageRibbon = ({ children }) => {
	return (
		<Container show={ children }>
			{ children }
		</Container>
	);
};

SolutionPackageRibbon.propTypes = {
	show: PropTypes.node,
};

export default SolutionPackageRibbon;
