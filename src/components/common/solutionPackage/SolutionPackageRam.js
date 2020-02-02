import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem from './SolutionPackageItem';

const ramImage = buildAssetAbsolutePath('/images/solution-package/ram-memory.png');

const SolutionPackageRam = ({ size, unit, backgroundColor }) => {

	return (
		<SolutionPackageItem backgroundColor={ backgroundColor }>
			<div>
				<Image path={ ramImage } />
				<SolutionPackageItemText
					header={ size + unit }
					text="Ram"
					highlighted={ false }
				/>
				<div/>
			</div>
		</SolutionPackageItem>
	);
};

SolutionPackageRam.propTypes = {
	size: PropTypes.number,
	unit: PropTypes.string,
	backgroundColor: PropTypes.string,
};

export default SolutionPackageRam;
