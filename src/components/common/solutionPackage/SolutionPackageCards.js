import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from '../../generic/Image';
import SolutionPackageItem from './SolutionPackageItem';
import SolutionPackageItemText, { classes as textItemClasses } from './SolutionPackageItemText';
import SolutionPackageCardArrow from './SolutionPackageCardArrow';
import SolutionPackageCardDetails from './SolutionPackageCardDetails';
import SolutionPackageAccordeon from './SolutionPackageAccordeon';
import { buildAssetAbsolutePath } from '../../../lib/assetsHelper';
import { createClassName } from '../../../lib/classNameHelper';

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

const getSlots = (cards, availableSlotsCount) => {
	const slots = [ ...cards ];
	const emptySlotsCount = availableSlotsCount - cards.length;
	if (emptySlotsCount > 0) {
		for (let i = 0; i < emptySlotsCount; i++) {
			slots.push(null);
		}
	}
	return slots;
};
	
const SolutionPackageCards = ({ availableSlotsCount, cards, backgroundColor }) => {
	const [ isOpen, setIsOpen ] = useState(false);

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
			<SolutionPackageAccordeon
				isOpen={ isOpen }
				backgroundColor={ backgroundColor }
			>
				<SolutionPackageCardDetails details={ getSlots(cards, availableSlotsCount) } />
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
