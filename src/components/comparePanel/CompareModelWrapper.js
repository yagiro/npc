import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../config/constants';

const Container = styled.div`  
	background: ${ colors.background } 0% 0% no-repeat padding-box;
	box-shadow: ${ (props) => props.isEmpty ? 'none' : `0px 3px 6px ${ colors.boxShadowGrey }` };
	border: 1px solid ${ colors.borderGrey };
	border-radius: 6px;
	width: 250px;
	height: 80px;
	transition: box-shadow .2s;
`;

const CompareModelWrapper = ({ isEmpty, children }) => {
	return (
		<Container isEmpty={ isEmpty }>
			{ children }
		</Container>
	);
};

CompareModelWrapper.defaultProps = {
	isEmpty: true,
};

CompareModelWrapper.propTypes = {
	isEmpty: PropTypes.bool,
	children: PropTypes.node,
};

export default CompareModelWrapper;
