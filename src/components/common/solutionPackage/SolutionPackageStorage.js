import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fonts } from '../../../config/constants';
import SolutionPackageItem from './SolutionPackageItem';
import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItemText, { classes as textItemClasses } from './SolutionPackageItemText';
import SolutionPackageCardArrow from './SolutionPackageCardArrow';
import SolutionPackageAccordion from './SolutionPackageAccordion';

const detailItemImageUrl = buildAssetAbsolutePath('/images/solution-package/hard-disk-drive.png');
const packageItemImageUrl = buildAssetAbsolutePath('/images/solution-package/server.png');

const Clickable = styled.div`
	cursor: pointer;
`;

const DetailItem = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	margin: 0 0 0 45px;
	
	& > div {
		& strong {
			font-size: ${ fonts.paragraphBig };
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

const renderDetails = (drives, availableSlotsCount, type) => {
	const emptyDriveCount = availableSlotsCount - drives.length;
	const allDrives = drives.concat(Array(emptyDriveCount).fill(null));

	return allDrives.map((drive, i) =>
		<DetailItem key={ i }>
			{
				drive ?
					<>
						<Image
							width="24px"
							path={ detailItemImageUrl }
						/>
						<div><strong>{ drive.size }{ drive.unit }</strong></div>
					</> :
					<div><strong>{ type }{ i + 1 }</strong> Optional</div>
			}
		</DetailItem>
	);
};

const SolutionPackageStorage = ({ drives, availableSlotsCount, type, backgroundColor }) => {
	const [ isOpen, setIsOpen ] = useState(false);

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
			<Clickable onClick={ () => setIsOpen(!isOpen) }>
				<Image path={ packageItemImageUrl } />
				<SolutionPackageItemText
					header={ HeaderComponent }
					text="Storage"
					highlighted={ false }
				/>
				<SolutionPackageCardArrow isOpen={ isOpen } />
			</Clickable>
			<SolutionPackageAccordion
				isOpen={ isOpen }
				backgroundColor={ backgroundColor }
			>
				{ renderDetails(drives, availableSlotsCount, type) }
			</SolutionPackageAccordion>
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
