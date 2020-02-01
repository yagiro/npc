import React from 'react';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem from './SolutionPackageItem';
import PropTypes from "prop-types";

const SolutionPackageLom = ({ backgroundColor, included }) => {

	return (
        <SolutionPackageItem backgroundColor={ backgroundColor }>
			<div>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/mainboard.png') } />
				<SolutionPackageItemText
					header={ `LOM ${ included ? 'Optional' : '???' }` }
					text="Light-out Mgmt (LOM)"
				/>
				<div/>
			</div>
		</SolutionPackageItem>
	);
};

SolutionPackageLom.propTypes = {
	// type: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
	included: PropTypes.bool,
};

export default SolutionPackageLom;
