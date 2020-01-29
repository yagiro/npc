import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from '../../../config/constants';

export const backgroundColors = {
	grey: '#F7F8F9',
	white: colors.background,
};

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
		<Container backgroundColor={ backgroundColors[backgroundColor] }>
			{ children }
		</Container>
	);
};

SolutionPackageItem.defaultProps = {
	backgroundColor: 'white',
};

SolutionPackageItem.propTypes = {
	backgroundColor: PropTypes.oneOf(['grey', 'white'])
};

export default SolutionPackageItem;
