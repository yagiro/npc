import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../generic/Title';
import { colors } from '../../../config/constants';
import Checkbox from '../../generic/Checkbox';

const FilterOptionContainer = styled.div`
	display: flex;
`;
const VerticalDivider = styled.div`
	width: 1px;
	height: 120px;
	background: ${ colors.lightgray };
	margin:50px 25px 0 25px;
`;


const MultipleOptionsFilter = ({ filterId, title, options, chosenFilters, onChange }) => {

	const isChecked = (chosenFilters, filterId, value) => {
		return !!(chosenFilters[filterId] && chosenFilters[filterId].value.has(value));
	};

	// add filter-option click handler
	const onAddFilterOption = useCallback((option) => {
		onChange((prevChosenFilters) => {
			const filter = prevChosenFilters[option.filterId];

			//case when first option of filter type is adding
			if(!filter) {
				return {
					...prevChosenFilters, [option.filterId]: {
						filterId: option.filterId,
						value: new Set([option.value])
					}
				};
			}

			const prevOptions = [ ...filter.value ];
			const updatedOptions = [...prevOptions, option.value];
			return { ...prevChosenFilters, [filter.filterId]: { ...filter, value: new Set([ ...updatedOptions ]) } };
		});
	}, [onChange]);

	// remove filter-option click handler
	const onRemoveFilterOption = useCallback((option) => {
		onChange((prevChosenFilters) => {
			const filter = prevChosenFilters[option.filterId];
			const prevOptions = [ ...filter.value ];
			const updatedOptions = prevOptions.filter((filterOption) => filterOption !== option.value);
			return { ...prevChosenFilters, [filter.filterId]: { ...filter, value: new Set([ ...updatedOptions ]) } };
		});
	}, [onChange]);

	return (
		<FilterOptionContainer key={ filterId }>
			<div>
				<Title color={ colors.textLightGray } margin="0 0 15px 0">{ title }</Title>
				{/*// render list of filter-options*/}
				<div>
					{ options.map((option) => {
						const checked = isChecked(chosenFilters, option.filterId, option.value);
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

MultipleOptionsFilter.propTypes = {
	filterId: PropTypes.number.isRequired,
	title: PropTypes.string,
	options: PropTypes.array.isRequired,
	chosenFilters: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default MultipleOptionsFilter;
