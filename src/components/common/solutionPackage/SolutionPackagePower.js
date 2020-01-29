import React from 'react';

import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem from './SolutionPackageItem';

const SolutionPackageRam = () => {

	return (
		<SolutionPackageItem backgroundColor="grey">
			<div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/power-supply.png') } />
				<SolutionPackageItemText
					header="Triple PSUs"
					text="PowerSupply"
				/>
				<div/>
			</div>
		</SolutionPackageItem>
	);
};

SolutionPackageRam.propTypes = {

};

export default SolutionPackageRam;
