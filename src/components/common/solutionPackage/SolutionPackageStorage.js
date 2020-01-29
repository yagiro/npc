import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fonts } from '../../../config/constants';
import SolutionPackageItem, { backgroundColors } from './SolutionPackageItem';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageCardArrow from './SolutionPackageCardArrow';
import SolutionPackageAccordeon from './SolutionPackageAccordeon';
import { solutionPackageData } from './SolutionPackageData';

const Clicable = styled.div`
	cursor: pointer;
`;

const DetailItem = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	margin: 0 0 0 45px;
	
	& > div {
		& strong {
			font: ${ fonts.paragraphBig };
			font-weight: bold;
		}
		font: ${ fonts.paragraph };
		line-height: 1em;
		color: #333333;
	}
	
	& > div:not(:first-child) {
		margin-left: 13px;
	}
`;

const SolutionPackageStorage = ({ type }) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const renderDetails = () => {
		return solutionPackageData[type].storage.details.map((item, i) => {
			return (
				<DetailItem key={ i }>
					{ item.icon && <Image width="24px" path={ buildAssetAbsolutePath(item.icon) } /> }
					<div>{ item.context }</div>
				</DetailItem>
			);
		});
	};

	return (
		<SolutionPackageItem>
			<Clicable onClick={ () => setIsOpen(!isOpen) }>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/server.png') } />
				<SolutionPackageItemText
					header={ <>{ solutionPackageData[type].storage.header }</> }
					text="Storage"
					chips={ solutionPackageData[type].storage.chips }
				/>
				<SolutionPackageCardArrow isOpen={ isOpen } />
			</Clicable>
			<SolutionPackageAccordeon
				isOpen={ isOpen }
				backgroundColor={ backgroundColors.white }
			>
				{ renderDetails() }
			</SolutionPackageAccordeon>
		</SolutionPackageItem>
	);
};

SolutionPackageStorage.propTypes = {
	type: PropTypes.string.isRequired,
};

export default SolutionPackageStorage;
