import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { buildChosenFiltersOnAdd, buildChosenFiltersOnRemove } from './filtersHelpers';
import Title from '../../generic/Title';
import { colors } from '../../../config/constants';
import FiltersOption from './FiltersOption';

const Container = styled.div`
	display: block;
`;

// styles for react-select
const customStyles = {
	control: (base) => ({
		...base,
		marginBottom: '20px'
	}),
};

const ComboFilter = ({ filterId, title, innerFilters, chosenFilters, onChange }) => {

	const options = innerFilters.multipleOptionsFilter.options;
	const dropDownOptions = innerFilters.dropdownFilter.options;

	//componentDidMount : we need to set Default value to select
	useEffect(() => {
		handleDropdownChange(dropDownOptions[0], chosenFilters);
	}, [ ]);


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
	
	// 
	const handleDropdownChange = useCallback((dropdownOption, chosenFilters) => {

		const prevFilter = { ...chosenFilters[filterId] };
		const multipleOptions = prevFilter.value || new Set([]);
		const updatedFilter = { ...prevFilter, dropdownFilter: dropdownOption, value: multipleOptions, filterId };
		
		onChange({ ...chosenFilters, [filterId]: updatedFilter });
	}, [filterId, onChange]);
	
	return (
		<Container>
			<Title color={ colors.textLightGray } margin="0 0 15px 0">{ title }</Title>
			{/*// render list of filter-options*/}

			<Select
				styles={ customStyles }
				value={ chosenFilters[filterId] ? chosenFilters[filterId].dropdownFilter : null }
				onChange={ (dropdownOption) => {
					handleDropdownChange(dropdownOption, chosenFilters);
				} }
				options={ dropDownOptions }
				components={{
					IndicatorSeparator: () => null
				}}
				theme={ theme => ({
					...theme,
					borderRadius: 3,
					colors: {
						...theme.colors,
						primary25: '#E856851A',
						primary: 'rgba(236,64,122,0.5)',
					},
				}) }
			/>
			
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

ComboFilter.propTypes = {
	filterId: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	title: PropTypes.string,
	innerFilters: PropTypes.object.isRequired,
	chosenFilters: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default ComboFilter;
