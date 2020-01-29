import React from 'react';

import SolutionPackageItem from './SolutionPackageItem';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import Image from '../../generic/Image';

const SolutionPackageIncluded = () => {

	return (
		<SolutionPackageItem>
			<div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/include.png') } />
				<div>Software Included</div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/right-arrow.png') } />
			</div>
		</SolutionPackageItem>
	);
};

export default SolutionPackageIncluded;
