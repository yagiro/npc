import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../gereric/Title';
import Checkbox from '../gereric/Checkbox';
import { colors, fonts } from '../../config/constants';
import Span from '../gereric/Span';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	font: ${ fonts.paragraph };
`;

const TopSection = styled.div`
	display: flex;
`;

const FiltersSections = styled.div`
	display: flex;
	width: 100%;
`;

const SubTitle = styled.div`
	display: flex;
`;

const ChosenFiltersSection = styled.div`
	display: flex;
	align-items: center;
`;

const FilterOptionContainer = styled.div`
	display: flex;
`;

const VerticalDivider = styled.div`
	width: 1px;
	height: 120px;
	background: ${ colors.lightgray };
	margin:50px 25px 0 25px;
`;

function NetworkSecurityFilter({ filters }) {

	const [ chosenFilters, setChosenFilters ] = useState([
		{ value: '15gbps', label: '1-5 Gbps' },
		{ value: '3u', label: '3 U' },
	]);


	// function makes check if value of some option there is in chosenFilters
	const isChecked = (chosenFilters, value) => {
		const filter = chosenFilters.find((chosenFilter) => {
			return chosenFilter.value === value;
		});

		return !!filter;
	};

	// function render block of filter-options for specific filter-type
	const renderFilterBlock = (filters) => {
		// render filter-blocks
		return filters.map(({ id, title, options }) => {
			return (
				<FilterOptionContainer key={id}>
					<div>
						<Title color={colors.textLightGray} margin="15px 0">{title}</Title>
						{/*// render list of filter-options*/}
						<div>
							{options.map((option) => {
								const checked = isChecked(chosenFilters, option.value);

								// our onChange depends on "checked":
								// if filter-option checked we need to remove option by click
								// if filter-option unchecked we need to add filter option
								const onChange = checked ? onRemoveFilterOption : onAddFilterOption;

								// render one filter-option
								return (
									<div key={option.value}>
										<Checkbox label={option.label} isChecked={checked} onChange={() => {
											onChange(option);
										}}/>
									</div>
								);
							})}
						</div>
					</div>
					<VerticalDivider/>
				</FilterOptionContainer>
			);
		});
	};

	// render chosen filters in the Top Section
	const renderChosenFilters = (chosenFilters) => {
		return chosenFilters.map((chosenFilter) => {
			return (
				<div key={chosenFilter.value} onClick={() => {
					onRemoveFilterOption(chosenFilter);
				}}>{`_ ${chosenFilter.label}_`}</div>
			);
		});
	};

	// clear filters click handler
	const onClearFiltersClick = () => {
		setChosenFilters([]);
	};

	// add filter-option click handler
	const onAddFilterOption = (option) => {
		setChosenFilters((prevChosenFilters) => {
			return [...prevChosenFilters, option];
		});
	};

	// remove filter-option click handler
	const onRemoveFilterOption = (option) => {
		setChosenFilters((prevChosenFilters) => {
			return prevChosenFilters.filter((filterOption) => filterOption.value !== option.value);
		});
	};
	

	return (
		<Container>
			<TopSection>
				<div>
					<Title size="32px">Network Security</Title>
					<SubTitle>
						<Span bold margin="0 5px 0 0">Displaying 400</Span> Security Gateway Appliance & Solutions
					</SubTitle>
				</div>
				<ChosenFiltersSection>
					{ renderChosenFilters(chosenFilters) }
					<div onClick={ onClearFiltersClick }>*Clear all*</div>
				</ChosenFiltersSection>
			</TopSection>
			<FiltersSections>
				{ renderFilterBlock(filters) }
			</FiltersSections>
		</Container>
	);

}


export default NetworkSecurityFilter;


/*
filters: [
{
	type: 'marketSegment',
	options: [ { value, label } ],
},
],
onChange: (updatedFilters) => [ { type, selectedOptions } ]
 */
