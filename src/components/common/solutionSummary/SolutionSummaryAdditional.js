import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { fonts, colors } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';

const classPrefix = 'solution-summary-additionall';
export const classes = {

};

const Container = styled.div`
	height: ${ props => props.isOpen ? 215 : 0}px;
	transition: height .3s;
`;

const SolutionSummaryAdditional = (props) => {
	const { isOpen } = props;
	return (
		<Container isOpen={ isOpen }>

		</Container>
	);
};

SolutionSummaryAdditional.propTypes = {
	isOpen: PropTypes.bool,
};

export default SolutionSummaryAdditional;
