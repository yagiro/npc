import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import { colors } from '../../../config/constants';

const checkImageUrl = buildAssetAbsolutePath('/images/solution-package/checked.png');

const Container = styled.div`
	display: ${ ({ selected }) => selected ? 'block' : 'none' };
	position: absolute;
	right: 0;
	top: 0;
	width: 56px;
	height: 50px;
	background-color: ${ colors.pink_100 };
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
	
	& > div {
		margin-right: 10px;
		margin-left: auto;
		margin-top: 10px;
		height: 10px;
		width: 12px;
	}
`;

const SolutionPackageCorner = ({ selected }) => {
	return (
		<Container selected={ selected } >
			<div>
				<Image path={ checkImageUrl } />
			</div>
		</Container>
	);
};

SolutionPackageCorner.propTypes = {
	selected: PropTypes.bool,
};

export default SolutionPackageCorner;
