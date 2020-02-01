import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from '../../../config/constants';

const Container = styled.div`  
	font: ${ fonts.paragraph };
	
	& > div:first-child {
		display: flex;
		align-items: center;
		padding: 0 16px;
		height: 48px;
		background-color: ${ ({ backgroundColor }) => backgroundColor };
		justify-content: space-between;
		
		& > *:not(:first-child):not(:last-child) {
			flex: 1;
			margin: 0 13px;
		}
		
		& > *:first-child {
			width: 24px;
		}
		
		& > *:last-child {
			width: 10px;
			cursor: pointer;
		}
	}
`;

const SolutionPackageItem = ({ backgroundColor, children }) => {
	return (
		<Container backgroundColor={ backgroundColor }>
			{ children }
		</Container>
	);
};

SolutionPackageItem.defaultProps = {
	backgroundColor: colors.background,
};

SolutionPackageItem.propTypes = {
	backgroundColor: PropTypes.string
};

export default SolutionPackageItem;
