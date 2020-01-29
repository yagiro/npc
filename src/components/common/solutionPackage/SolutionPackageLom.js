import React from 'react';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem from './SolutionPackageItem';

const SolutionPackageRam = () => {

	return (
		<SolutionPackageItem>
			<div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/mainboard.png') } />
				<SolutionPackageItemText
					header="LOM Optional"
					text="Light-out Mgmt (LOM)"
				/>
				<div/>
			</div>
		</SolutionPackageItem>
	);
};

SolutionPackageRam.propTypes = {
	// type: PropTypes.string.isRequired,
};

export default SolutionPackageRam;
