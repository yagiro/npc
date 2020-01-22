import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../config/constants';

const Container = styled.div`  
	border: 1px solid saddlebrown;
`;

const SolutionPackageSelect = (props) => {

	return (
		<Container>
			Solution Package
		</Container>
	);
};

SolutionPackageSelect.propTypes = {

};

export default SolutionPackageSelect;