import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, filterBlockTypes } from '../../../config/constants';
import MultipleOptionsFilter from './MultipleOptionsFilter';
import ComboFilter from './ComboFilter';

const Container = styled.div`
	display: flex;
	width: 100%;
`;

const FilterBlockContainer = styled.div`
	display: flex;
`;

const VerticalDivider = styled.div`
	width: 1px;
	height: 120px;
	background: ${ colors.lightgray };
	margin: 50px 25px 0 25px;
`;

const filterBlockComponents = {
	[filterBlockTypes.multiple]: MultipleOptionsFilter,
	[filterBlockTypes.comboFilter]: ComboFilter
};

const Filters = ({ filters, chosenFilters, onChange }) => {

	// function render block of filter-options for specific filter-type
	const renderFilterBlocks = (filters) => {
		// render filter-blocks
		return filters.map(({ id, title, innerFilters, type }, i) => {
			const FilterBlock = filterBlockComponents[type];


			return (
				<FilterBlockContainer key={ id }>
					{
						i !== 0 && <VerticalDivider/>
					}
					<FilterBlock
						filterId={ id }
						title={ title }
						innerFilters={ innerFilters }
						chosenFilters={ chosenFilters }
						onChange={ onChange }
					/>
				</FilterBlockContainer>
			);
		});
	};
    
	return (
		<Container>
			{ renderFilterBlocks(filters) }
		</Container>
	);
};

Filters.propTypes = {
	filters: PropTypes.array.isRequired,
	chosenFilters: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Filters;
