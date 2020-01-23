import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../config/constants';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageItem, { backgroundColors } from './SolutionPackageItem';
import { classes as textItemClasses } from './SolutionPackageItemText';

const Container = styled.div`  

`;

const SolutionPackageRam = (props) => {

	return (
		<SolutionPackageItem backgroundColor={ backgroundColors.grey }>
			<Container>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/power-supply.png') } />
				<SolutionPackageItemText
					header="Triple PSUs"
					text="PowerSupply"
				/>
				<div/>
			</Container>
		</SolutionPackageItem>
	);
};

SolutionPackageRam.propTypes = {

};

export default SolutionPackageRam;