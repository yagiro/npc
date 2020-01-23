import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, solutionPackageTypes } from '../../../config/constants';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem, { backgroundColors } from './SolutionPackageItem';
import { classes as textItemClasses } from './SolutionPackageItemText';

const SolutionPackageRam = (props) => {

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