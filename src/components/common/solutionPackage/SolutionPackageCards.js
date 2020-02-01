import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from '../../generic/Image';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import SolutionPackageItem, { backgroundColors } from './SolutionPackageItem';
import SolutionPackageItemText, {classes as textItemClasses} from './SolutionPackageItemText';
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

const SolutionPackageCards = ({ availableSlotsCount, cards, backgroundColor }) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const getSlots = () => {
		const slots = [ ...cards ];
		const emptySlotsCount = availableSlotsCount - cards.length;
		if (emptySlotsCount > 0) {
			for (let i = 0; i < emptySlotsCount; i++) {
				slots.push(null);
			}
		}
		return slots;
	};

	const HeaderComponent =
		<>
			{ cards.length }<span className={ textItemClasses.additional }>/{ availableSlotsCount }</span>
		</>;

	return (
		<SolutionPackageItem backgroundColor={ backgroundColor } >
			<Clickable onClick={ () => setIsOpen(!isOpen) }>
				<Image path={ buildAssetAbsolutePath('/images/solution-package/ethernet.png') } />
				<SolutionPackageItemText
					header={ HeaderComponent }
					text="I/O Cards"
					chips={ cards.length >= availableSlotsCount }
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
    availableSlotsCount: PropTypes.number,
    cards: PropTypes.array,
    backgroundColor: PropTypes.string,
};

export default SolutionPackageCards;
