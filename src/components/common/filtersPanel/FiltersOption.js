import React from 'react';
import Checkbox from '../../generic/Checkbox';

const FiltersOption = ({ option, checked, onRemoveFilterOption, onAddFilterOption, chosenFilters }) => {
	return (
		<div key={ option.value }>
			<Checkbox label={ option.label } isChecked={ checked } onChange={() => {
				// our onChange depends on "checked":
				// if filter-option checked we need to remove option by click
				// if filter-option unchecked we need to add filter option
				const onChange = checked ? onRemoveFilterOption : onAddFilterOption;
				onChange(option, chosenFilters);
			}}/>
		</div>
	);
};

export default FiltersOption;
