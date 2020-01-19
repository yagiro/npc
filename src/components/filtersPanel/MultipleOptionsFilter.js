import React, { useCallback } from 'react';
import Title from '../generic/Title';
import { colors } from '../../config/constants';
import Checkbox from '../generic/Checkbox';
import styled from 'styled-components';

const FilterOptionContainer = styled.div`
	display: flex;
`;
const VerticalDivider = styled.div`
	width: 1px;
	height: 120px;
	background: ${ colors.lightgray };
	margin:50px 25px 0 25px;
`;


const MultipleOptionsFilter = ({ id, title, options, chosenFilters, onChange }) => {

	const isChecked = (chosenFilters, value) => {
		const filter = chosenFilters.find((chosenFilter) => {
			return chosenFilter.value === value;
		});

		return !!filter;
	};

	const isCheckedNew = (chosenFilters, filterId, optionId) => {
		return chosenFilters[filterId] && chosenFilters[filterId].value.has(optionId);
	};

	// add filter-option click handler
	const onAddFilterOption = useCallback((option) => {
		// onChange((prevChosenFilters) => {
		// 	return [...prevChosenFilters, option];
		// });
	}, [onChange]);

	// remove filter-option click handler
	const onRemoveFilterOption = useCallback((option) => {
		// onChange((prevChosenFilters) => {
		// 	return prevChosenFilters.filter((filterOption) => filterOption.value !== option.value);
		// });
	}, [onChange]);

	return (
		<FilterOptionContainer key={ id }>
			<div>
				<Title color={ colors.textLightGray } margin="0 0 15px 0">{ title }</Title>
				{/*// render list of filter-options*/}
				<div>
					{ options.map((option) => {
						const checked = isChecked(chosenFilters, option.filterId, option.value);
						console.log(isCheckedNew(chosenFilters, option.filterId, option.value));
						// render one filter-option
						return (
							<div key={ option.value }>
								<Checkbox label={ option.label } isChecked={ checked } onChange={() => {
									// our onChange depends on "checked":
									// if filter-option checked we need to remove option by click
									// if filter-option unchecked we need to add filter option
									const onChange = checked ? onRemoveFilterOption : onAddFilterOption;
									onChange(option);
								}}/>
							</div>
						);
					}) }
				</div>
			</div>
			<VerticalDivider/>
		</FilterOptionContainer>

	);
};

export default MultipleOptionsFilter;
