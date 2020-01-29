import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItem, { backgroundColors } from './SolutionPackageItem';
import SolutionPackageItemText from './SolutionPackageItemText';
import SolutionPackageAccordeon from './SolutionPackageAccordeon';
import { createClassName } from '../../../lib/classNameHelper';
import SolutionPackageCardArrow from './SolutionPackageCardArrow';
import SolutionPackageCardDetails from './SolutionPackageCardDetails';
import { solutionPackageData } from './SolutionPackageData';

const classPrefix = 'solution-package-cards';
export const classes = {
	slot: createClassName(classPrefix, 'slot'),
	arrow: createClassName(classPrefix, 'arrow'),
	filledSlot: createClassName(classPrefix, 'fill-slot'),
	emptySlot: createClassName(classPrefix, 'empty-slot'),
};

const Clickable = styled.div`
	cursor: pointer;
`;

const SolutionPackageCards = ({ type }) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const getSlots = () => {
		const slots = solutionPackageData[type].card.details.slots;
		const additionalElems = solutionPackageData[type].card.details.slotsTotal - slots.length;
		if (additionalElems > 0) {
			for (let i = 0; i < additionalElems; i++) {
				slots.push(null);
			}
		}
		return slots;
	};

	return (
		<SolutionPackageItem backgroundColor="grey" >
			<Clickable onClick={ () => setIsOpen(!isOpen) }>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/ethernet.png') } />
				<SolutionPackageItemText
					header={ solutionPackageData[type].card.header }
					text="I/O Cards"
					chips={ solutionPackageData[type].card.chips }
				/>
				<SolutionPackageCardArrow isOpen={ isOpen } />
			</Clickable>
			<SolutionPackageAccordeon isOpen={ isOpen } backgroundColor={ backgroundColors.grey }>
				<SolutionPackageCardDetails details={ getSlots() } />
			</SolutionPackageAccordeon>
		</SolutionPackageItem>
	);
};

SolutionPackageCards.propTypes = {
	type: PropTypes.string.isRequired,
};

export default SolutionPackageCards;
