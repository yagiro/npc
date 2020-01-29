import React, { useCallback } from 'react';
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
import { colors, solutionPackageTypes } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';
import SolutionPackageRibbon from './SolutionPackageRibbon';
import SolutionPackageCorner from './SolutionPackageCorner';

const classPrefix = 'solution-package';
export const classes = {
	corner: createClassName(classPrefix, 'selected-corner'),
};

const Container = styled.div`
	margin: 5px;
	width: 266px;
	min-width: 266px;
	height: min-content;
	box-shadow: 0 2px 4px rgba(0, 0, 0, .29);
	border-radius: 12px 12px 0 0;
	overflow: hidden;
	background-color: ${ colors.background };
	display: flex;
	flex-direction: column;
	position: relative;
	border: ${ ({ selected }) => selected ? 1 : 0 }px solid #DE3970;

`;

const SolutionPackage = (props) => {
	const { type, gbpsAmount, subtitle, price, sku, selected, onSelect } = props;

	const handleSelect = useCallback(() => onSelect(), [ onSelect ]);

	return (
		<Container selected={ selected }>
			<SolutionPackageHead
				type={ type }
				subtitle={ subtitle }
				gbpsAmount={ gbpsAmount }
			/>
			<SolutionPackageRibbon>
				{ type === solutionPackageTypes.turbo ? 'Extra Security Power' : null }
			</SolutionPackageRibbon>
			<SolutionPackageCorner selected={ selected } />
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
			<SolutionPackageSelect
				selected={ selected }
				onClick={ handleSelect }
			/>
		</Container>
	);
};

SolutionPackage.propTypes = {
	type: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	gbpsAmount: PropTypes.number,
	price: PropTypes.number,
	sku: PropTypes.string,
	selected: PropTypes.bool,
	onSelect: PropTypes.func,
};

export default SolutionPackage;
