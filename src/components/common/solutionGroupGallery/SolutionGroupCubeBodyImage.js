import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import { zIndexMap } from './solutionGroupCubeHelper';
import Image from '../../generic/Image';

const Container = styled.div`  
	width: 183px;
	height: auto;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 0%);
	z-index: ${ zIndexMap.bodyImage };
	
	& > img {
	  width: 100%;
	  height: auto;
	}
`;

const SolutionGroupCubeBodyImage = ({ mainImagePath }) => {
	return (
		<Container>
			<Image path={ buildAssetAbsolutePath(mainImagePath) } alt="Model" />
		</Container>
	);
};

SolutionGroupCubeBodyImage.propTypes = {
	mainImagePath: PropTypes.string,
};

export default SolutionGroupCubeBodyImage;
