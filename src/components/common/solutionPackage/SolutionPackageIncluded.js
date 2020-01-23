import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../config/constants';
import SolutionPackageItem from './SolutionPackageItem';
import { ReactSVG } from 'react-svg';
import { buildAssetAbsolutePath, buildImageUrl } from '../../../lib/assetsHelper';
import { createClassName } from '../../../lib/classNameHelper';
import Image from '../../generic/Image';
import { classes as textItemClasses } from './SolutionPackageItemText';

// const classPrefix = 'solution-package';
// export const classes = {
// 	menuImage: createClassName(classPrefix, 'menu-image'),
// };

const Container = styled.div`  
	
`;

const SolutionPackageIncluded = (props) => {

	return (
		<SolutionPackageItem>
			<Container>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/ethernet.png') } />
				<div>Software Included</div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/right-arrow.png') } />
			</Container>
		</SolutionPackageItem>
	);
};

SolutionPackageIncluded.propTypes = {

};

export default SolutionPackageIncluded;