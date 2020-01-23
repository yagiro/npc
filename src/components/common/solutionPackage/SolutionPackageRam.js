import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, solutionPackageTypes } from '../../../config/constants';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem, { backgroundColors } from './SolutionPackageItem';
import { classes as textItemClasses } from './SolutionPackageItemText';

const content = {
	[solutionPackageTypes.base]: {
		header: '48GB',
		chips: false,
	},
	[solutionPackageTypes.plus]: {
		header: '96GB',
		chips: true,
	},
	[solutionPackageTypes.turbo]: {
		header: '96GB',
		chips: true,
	},
};

const SolutionPackageRam = ({ type }) => {

	return (
		<SolutionPackageItem backgroundColor={ backgroundColors.grey }>
			<div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/ram-memory.png') } />
				<SolutionPackageItemText
					header={ content[type].header }
					text="Ram"
					chips={ content[type].chips }
				/>
				<div/>
			</div>
		</SolutionPackageItem>
	);
};

SolutionPackageRam.propTypes = {
	type: PropTypes.string.isRequired,
};

export default SolutionPackageRam;