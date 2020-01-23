import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, solutionPackageTypes } from '../../../config/constants';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItem, { backgroundColors } from './SolutionPackageItem';
import SolutionPackageItemText from './SolutionPackageItemText';
import { classes as textItemClasses } from './SolutionPackageItemText';

const content = {
	[solutionPackageTypes.base]: {
		header: <>1 <span className={ textItemClasses.additional }>/8</span></>,
		chips: false,
	},
	[solutionPackageTypes.plus]: {
		header: <>4 <span className={ textItemClasses.additional }>/8</span></>,
		chips: false,
	},
	[solutionPackageTypes.turbo]: {
		header: <>8 <span className={ textItemClasses.additional }>/8</span></>,
		chips: true,
	},
};

const SolutionPackageCards = ({ type }) => {

	return (
		<SolutionPackageItem backgroundColor={ backgroundColors.grey }>
			<div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/ethernet.png') } />
				<SolutionPackageItemText
					header={ content[type].header }
					text="I/O Cards"
					chips={ content[type].chips }
				/>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/right-arrow.png') } />
			</div>
		</SolutionPackageItem>
	);
};

SolutionPackageCards.propTypes = {
	type: PropTypes.string.isRequired,
};

export default SolutionPackageCards;