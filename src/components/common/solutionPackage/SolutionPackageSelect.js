import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from '../../../app/consts/consts';

const Container = styled.div`  
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ selected }) => selected ? colors.pink_1 : colors.solutionCubeBg };
	font-size: ${ fonts.paragraphMiddle };
	line-height: 1em;
	color: ${({ selected }) => selected ? colors.background : colors.checkPointPink };
	cursor: pointer;
`;

const SolutionPackageSelect = ({ selected, onClick }) => {

	return (
		<Container
			selected={ selected }
			onClick={ onClick }
		>
			Selected
		</Container>
	);
};

SolutionPackageSelect.propTypes = {
	selected: PropTypes.bool,
	onClick: PropTypes.func,
};

export default SolutionPackageSelect;
