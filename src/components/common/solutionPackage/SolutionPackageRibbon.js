import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from '../../../config/constants';
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
	background-color:${ colors.blue_3 };
	clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%);
	font-size: ${ fonts.paragraphSmall };
	line-height: 1em;
	color: #16181D;
	padding-top: 2px;
	padding-left: 12px;
`;

const SolutionPackageRibbon = ({ label }) => {
	return (
		<Container show={ !!label }>
			{ label }
		</Container>
	);
};

SolutionPackageRibbon.propTypes = {
	label: PropTypes.string,
};

export default SolutionPackageRibbon;
