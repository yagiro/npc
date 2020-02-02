import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fonts } from '../../../config/constants';
import SolutionPackageItem from './SolutionPackageItem';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText, { classes as textItemClasses } from './SolutionPackageItemText';
import SolutionPackageCardArrow from './SolutionPackageCardArrow';
import SolutionPackageAccordeon from './SolutionPackageAccordeon';

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

const renderDetails = (drives, availableSlotsCount) => {
	const allDrives = [ ...drives ];
	const emptyDriveCount = availableSlotsCount - drives.length;
	if (emptyDriveCount > 0) {
		for (let i = 0; i < emptyDriveCount; i++) {
			allDrives.push(null);
		}
	}

	return allDrives.map((drive, i) =>
		<DetailItem key={ i }>
			{
				drive ?
					<>
						<Image
							width="24px"
							path={ buildAssetAbsolutePath('/images/solution-package/hard-disk-drive.png') }
						/>
						<div><strong>{ drive.size }{ drive.unit }</strong></div>
					</> :
					<div><strong>HDD1</strong> Optional</div>
			}
		</DetailItem>
	);
};
	
const SolutionPackageStorage = ({ drives, availableSlotsCount, type, backgroundColor }) => {
	const [ isOpen, setIsOpen ] = useState(false);


	const HeaderComponent =
		<>
			{ drives.length }
			<span className={ textItemClasses.additional }>/{ availableSlotsCount } </span>
			{ type }
		</>;

	return (
		<SolutionPackageItem backgroundColor={ backgroundColor } >
			<Clicable onClick={ () => setIsOpen(!isOpen) }>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/server.png') } />
				<SolutionPackageItemText
					header={ HeaderComponent }
					text="Storage"
					chips={ drives.length >= availableSlotsCount }
				/>
				<SolutionPackageCardArrow isOpen={ isOpen } />
			</Clicable>
			<SolutionPackageAccordeon
				isOpen={ isOpen }
				backgroundColor={ backgroundColor }
			>
				{ renderDetails(drives, availableSlotsCount) }
			</SolutionPackageAccordeon>
		</SolutionPackageItem>
	);
};

SolutionPackageStorage.propTypes = {
	type: PropTypes.string,
	availableSlotsCount: PropTypes.number,
	drives: PropTypes.arrayOf(PropTypes.shape({
		size: PropTypes.number,
		unit: PropTypes.string,
	})),
	backgroundColor: PropTypes.string,
};

export default SolutionPackageStorage;
