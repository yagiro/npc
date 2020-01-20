import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { filterBlockTypes } from '../../../config/constants';
import MultipleOptionsFilter from './MultipleOptionsFilter';

const FiltersSections = styled.div`
	display: flex;
	width: 100%;
`;

const filterBlock = {
	[filterBlockTypes.multiple]: MultipleOptionsFilter
};

const Filters = ({ filters, chosenFilters, onChange }) => {

	// function render block of filter-options for specific filter-type
	const renderFilterBlock = (filters) => {
		// render filter-blocks

		return filters.map(({ id, title, options, type }) => {
			const FilterBlock = filterBlock[type];
			return <FilterBlock
				key={ id }
				filterId={ id }
				title={ title }
				options={ options }
				chosenFilters={ chosenFilters }
				onChange={ onChange }/>;
		});
	};
    
	return (
		<FiltersSections>
			{ renderFilterBlock(filters) }
		</FiltersSections>
	);
};

Filters.propTypes = {
	filters: PropTypes.array.isRequired,
	chosenFilters: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Filters;
