import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, solutionPackageTypes } from '../../../config/constants';
import SolutionPackageItem, { backgroundColors } from './SolutionPackageItem';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import { classes as textItemClasses } from './SolutionPackageItemText';

const content = {
	[solutionPackageTypes.base]: {
		header: <>1 <span className={ textItemClasses.additional }>/2</span> HDD</>,
		chips: false,
	},
	[solutionPackageTypes.plus]: {
		header: <>2 <span className={ textItemClasses.additional }>/2</span> SSD</>,
		chips: true,
	},
	[solutionPackageTypes.turbo]: {
		header: <>2 <span className={ textItemClasses.additional }>/2</span> SSD</>,
		chips: true,
	},
};

const SolutionPackageStorage = ({ type }) => {

	return (
		<SolutionPackageItem>
			<div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/server.png') } />
				<SolutionPackageItemText
					header={ <>{ content[type].header }</> }
					text="Storage"
					chips={ content[type].chips }
				/>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/right-arrow.png') } />
			</div>
		</SolutionPackageItem>
	);
};

SolutionPackageStorage.propTypes = {
	type: PropTypes.string.isRequired,
};

export default SolutionPackageStorage;