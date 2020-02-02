import React from 'react';

import SolutionPackageItem from './SolutionPackageItem';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';

const includeImageUrl = buildAssetAbsolutePath('/images/solution-package/include.png');
const arrowImageUrl = buildAssetAbsolutePath('/images/solution-package/right-arrow.png');

const SolutionPackageIncluded = () => {

	return (
		<SolutionPackageItem>
			<div>
				<Image path={ includeImageUrl } />
				<div>Software Included</div>
				<Image path={ arrowImageUrl } />
			</div>
		</SolutionPackageItem>
	);
};

export default SolutionPackageIncluded;
