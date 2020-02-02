import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../generic/Title';
import { colors } from '../../../config/constants';
import FiltersOption from './FiltersOption';
import { buildChosenFiltersOnAdd, buildChosenFiltersOnRemove } from './filtersHelpers';

const Container = styled.div`
	display: block;
`;

const MultipleOptionsFilter = ({ title, data, chosenFilters, onChange }) => {

	const options = data.options;

	const isChecked = (chosenFilters, filterId, value) => {
		return !!(chosenFilters[filterId] && chosenFilters[filterId].value.has(value));
	};

	// add filter-option click handler
	const handleAddFilterOption = useCallback((option, chosenFilters) => {
		const updatedChosenFilters = buildChosenFiltersOnAdd(option, chosenFilters);
		onChange(updatedChosenFilters);
	}, [ onChange ]);

	// remove filter-option click handler
	const handleRemoveFilterOption = useCallback((option, chosenFilters) => {
		const updatedChosenFilters = buildChosenFiltersOnRemove(option, chosenFilters);
		onChange(updatedChosenFilters);
	}, [ onChange ]);

	return (
		<Container>
			<Title color={ colors.textLightGray } margin="0 0 15px 0">{ title }</Title>
			{/*// render list of filter-options*/}
			<div>
				{ options.map((option) => {
					const checked = isChecked(chosenFilters, option.filterId, option.value);
					// render one filter-option
					return (
						<FiltersOption
							key={ option.value }
							option={ option } 
							checked={ checked }
							onRemoveFilterOption={ handleRemoveFilterOption }
							onAddFilterOption={ handleAddFilterOption }
							chosenFilters={ chosenFilters }
						/>					
					);
				})
				}
			</div>
		</Container>

	);
};

MultipleOptionsFilter.propTypes = {
	filterId: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	title: PropTypes.string,
	data: PropTypes.shape({
		options: PropTypes.arrayOf(PropTypes.shape({
			value: PropTypes.any,
			label: PropTypes.any,
			filterId: PropTypes.any
		})),
	}).isRequired,
	chosenFilters: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default MultipleOptionsFilter;
