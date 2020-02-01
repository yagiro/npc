import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem from './SolutionPackageItem';
import { solutionPackageData } from './SolutionPackageData';

const SolutionPackageRam = ({ size, unit, backgroundColor }) => {

	return (
		<SolutionPackageItem backgroundColor={ backgroundColor }>
			<div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/ram-memory.png') } />
				<SolutionPackageItemText
					header={ size + unit }
					text="Ram"
					chips={ size === 96 }
				/>
				<div/>
			</div>
		</SolutionPackageItem>
	);
};

SolutionPackageRam.propTypes = {
	// type: PropTypes.string.isRequired,
	size: PropTypes.number,
	unit: PropTypes.string,
    backgroundColor: PropTypes.string,
};

export default SolutionPackageRam;
