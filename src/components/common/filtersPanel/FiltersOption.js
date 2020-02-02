import React from 'react';
import styled from 'styled-components';
import Checkbox from '../../generic/Checkbox';

const Container = styled.div`
	margin-bottom: 12px;
`;

const FiltersOption = ({ option, checked, onRemoveFilterOption, onAddFilterOption, chosenFilters }) => {
	return (
		<Container key={ option.value }>
			<Checkbox label={ option.label } isChecked={ checked } onChange={() => {
				// our onChange depends on "checked":
				// if filter-option checked we need to remove option by click
				// if filter-option unchecked we need to add filter option
				const onChange = checked ? onRemoveFilterOption : onAddFilterOption;
				onChange(option, chosenFilters);
			}}
			/>
		</Container>
	);
};

export default FiltersOption;
