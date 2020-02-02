import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem from './SolutionPackageItem';

const powerImageUrl = buildAssetAbsolutePath('/images/solution-package/power-supply.png');

const powerImageUrl = buildAssetAbsolutePath('/images/solution-package/power-supply.png');

const SolutionPackageRam = ({ backgroundColor, type }) => {

	return (
		<SolutionPackageItem backgroundColor={ backgroundColor }>
			<div>
				<Image path={ powerImageUrl } />
				<SolutionPackageItemText
					header={ type }
					text="PowerSupply"
				/>
				<div/>
			</div>
		</SolutionPackageItem>
	);
};

SolutionPackageRam.propTypes = {
	type: PropTypes.string,
	backgroundColor: PropTypes.string,
};

export default SolutionPackageRam;
