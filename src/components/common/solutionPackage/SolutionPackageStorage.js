import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../config/constants';

const Container = styled.div`  
	border: 1px solid yellow;
`;

const SolutionPackageStorage = (props) => {

	return (
		<Container>
			Solution Package
		</Container>
	);
};

SolutionPackageStorage.propTypes = {

};

export default SolutionPackageStorage;