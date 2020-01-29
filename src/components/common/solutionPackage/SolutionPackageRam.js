import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem from './SolutionPackageItem';
import { solutionPackageData } from './SolutionPackageData';

const SolutionPackageRam = ({ type }) => {

	return (
		<SolutionPackageItem backgroundColor="grey">
			<div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/ram-memory.png') } />
				<SolutionPackageItemText
					header={ solutionPackageData[type].ram.header }
					text="Ram"
					chips={ solutionPackageData[type].ram.chips }
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
