import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SolutionPackageHead from './SolutionPackageHead';
import SolutionPackageIncluded from './SolutionPackageIncluded';
import SolutionPackageCards from './SolutionPackageCards';
import SolutionPackageStorage from './SolutionPackageStorage';
import SolutionPackageRam from './SolutionPackageRam';
import SolutionPackageLom from './SolutionPackageLom';
import SolutionPackagePower from './SolutionPackagePower';
import SolutionPackagePrice from './SolutionPackagePrice';
import SolutionPackageSelect from './SolutionPackageSelect';
import { colors } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';

const classPrefix = 'solution-package';
export const classes = {
	corner: createClassName(classPrefix, 'selected-corner'),
};

const Container = styled.div`
	margin: 5px;
	width: 266px;
	min-height: 688px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, .29);
	border-radius: 12px 12px 0 0;
	overflow: hidden;
	background-color: ${ colors.background };
	display: flex;
	flex-direction: column;
	position: relative;
	
	& > .${ classes.corner } {
		position: absolute;
		right: 0;
		top: 0;
		width: 56px;
		height: 50px;
		background-color: #EC5888;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
  		//-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
		//z-index: 100;
	}
`;

const SolutionPackage = (props) => {
	const { type, gbpsAmount, subtitle, price, sku, selected } = props;
	return (
		<Container>
			<SolutionPackageHead
				type={ type }
				subtitle={ subtitle }
				gbpsAmount={ gbpsAmount }
			/>
			<div className={ classes.corner } >
				<Image path={ buildAssetAbsolutePath('/images/solution-package/checked.png') } />
			</div>
			<SolutionPackageIncluded type={ type }/>
			<SolutionPackageCards type={ type }/>
			<SolutionPackageStorage type={ type }/>
			<SolutionPackageRam type={ type }/>
			<SolutionPackageLom/>
			<SolutionPackagePower/>
			<SolutionPackagePrice
				price={ price }
				sku={ sku }
			/>
			<SolutionPackageSelect selected={ selected }/>
		</Container>
	);
};

SolutionPackage.propTypes = {
	type: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	gbpsAmount: PropTypes.number,
	price: PropTypes.number,
	sku: PropTypes.string,
	selected: PropTypes.bool
};

export default SolutionPackage;
