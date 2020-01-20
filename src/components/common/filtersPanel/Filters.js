import React from 'react';
import styled from 'styled-components';
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
				id={ id }
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

export default Filters;
