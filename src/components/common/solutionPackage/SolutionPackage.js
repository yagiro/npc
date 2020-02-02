import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SolutionPackageHead from './SolutionPackageHead';
import SolutionPackageIncluded from './SolutionPackageIncluded';
import SolutionPackageFooter from './SolutionPackageFooter';
import SolutionPackageSelect from './SolutionPackageSelect';
import { colors, solutionPackageTypes } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';
import SolutionPackageRibbon from './SolutionPackageRibbon';
import SolutionPackageCorner from './SolutionPackageCorner';
import { attrComps } from './SolutionPackageHelper';

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

const renderPackageInfoAttrs = (attrs) => {
	return attrs.map((attr, i) => {
		const AttrComp = attrComps[attr.type];
		return !AttrComp ? null :
			<AttrComp
				key={ i }
				backgroundColor={ i%2 === 0 ? colors.grey_100 : colors.background }
				{ ...attr.data }
			/>;
	});
};

const SolutionPackage = (props) => {
	const { type, gbpsAmount, subtitle, price, selected, onSelect, category, attrs , sku } = props;

	const handleSelect = useCallback(() => onSelect(), [onSelect]);

	return (
		<Container selected={ selected }>
			<SolutionPackageHead
				type={ type }
				subtitle={ subtitle }
				gbpsAmount={ gbpsAmount }
			/>
			<SolutionPackageRibbon label={ type === solutionPackageTypes.turbo ? 'Extra Security Power' : null }/>
			<SolutionPackageCorner selected={ selected }/>
			<SolutionPackageIncluded type={ type }/>
			{ renderPackageInfoAttrs(attrs) }
			<SolutionPackageFooter
				sku={ sku }
				price={ price }
				category={ category }
			/>
			<SolutionPackageSelect
				selected={ selected }
				onClick={ handleSelect }
			/>
		</Container>
	);
};

SolutionPackage.defaultProps = {
	attrs: [],
};

SolutionPackage.propTypes = {
	type: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	gbpsAmount: PropTypes.number,
	price: PropTypes.number,
	selected: PropTypes.bool,
	onSelect: PropTypes.func,
	category: PropTypes.string,
	sku: PropTypes.string,
	attrs: PropTypes.arrayOf(PropTypes.shape({
		type: PropTypes.oneOf([ 'ioCards', 'storage', 'ram', 'lom', 'powerSupply' ]),
		data: PropTypes.object,
	}))
};

export default SolutionPackage;
