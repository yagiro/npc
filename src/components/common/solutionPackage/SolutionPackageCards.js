import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from '../../generic/Image';
import SolutionPackageItem from './SolutionPackageItem';
import SolutionPackageItemText, {classes as textItemClasses} from './SolutionPackageItemText';
import SolutionPackageCardArrow from './SolutionPackageCardArrow';
import SolutionPackageCardDetails from './SolutionPackageCardDetails';
import SolutionPackageAccordion from './SolutionPackageAccordion';
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
	const emptySlotsCount = availableSlotsCount - cards.length;
	const slots = cards.concat(Array(emptySlotsCount).fill(null));
	return slots;
};

const Clickable = styled.div`
	cursor: pointer;
`;

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
					highlighted={ false }
				/>
				<SolutionPackageCardArrow isOpen={ isOpen } />
			</Clickable>
			<SolutionPackageAccordion
				isOpen={ isOpen }
				backgroundColor={ backgroundColor }
			>
				<SolutionPackageCardDetails details={ getSlots(cards, availableSlotsCount) } />
			</SolutionPackageAccordion>
		</SolutionPackageItem>
	);
};

SolutionPackageCards.propTypes = {
    availableSlotsCount: PropTypes.number,
    cards: PropTypes.array,
    backgroundColor: PropTypes.string,
};

export default SolutionPackageCards;
