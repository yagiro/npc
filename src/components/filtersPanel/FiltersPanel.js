import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Title from '../generic/Title';
import Checkbox from '../generic/Checkbox';
import Span from '../generic/Span';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../generic/Image';
import CloseImage from '../../assets/compare/x.png';
import { colors, fonts } from '../../config/constants';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import ChosenFilters from './ChosenFilters';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	font: ${ fonts.paragraph };
`;

const TopSection = styled.div`
	display: flex;
`;

const BottomSection = styled.div`
	border-top: ${(props) => props.isCollapse ? 0 : '1px' } solid ${ colors.lightgray };
	border-bottom: ${(props) => props.isCollapse ? 0 : '1px' } solid ${ colors.lightgray };
	width: 100%;
`;

const FiltersSections = styled.div`
	display: flex;
	width: 100%;
`;

const SubTitle = styled.div`
	display: flex;
	margin-bottom: 20px;
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

const ToggleContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	align-content: center;
	margin: 20px 0;
	letter-spacing: 0;
	text-transform: capitalize;
	line-height: 100%;
`;

const ToggleArea = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	cursor: pointer;
`;

function FiltersPanel({ filters, chosenFilters, onChange, title, subTitleBold, subTitle }) {

	const [ isCollapse, setIsCollapse ] = useState(false);

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
		return filters.map(({ id, title, options, type }) => {
			if(type === 'multiple') {
				return (
					<FilterOptionContainer key={ id }>
						<div>
							<Title color={ colors.textLightGray } margin="0 0 15px 0">{ title }</Title>
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
										<div key={ option.value }>
											<Checkbox label={ option.label } isChecked={ checked } onChange={() => {
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
			}
		});
	};

	// add filter-option click handler
	const onAddFilterOption = useCallback((option) => {
		onChange((prevChosenFilters) => {
			return [...prevChosenFilters, option];
		});
	}, [ onChange ]);

	// remove filter-option click handler
	const onRemoveFilterOption = useCallback((option) => {
		onChange((prevChosenFilters) => {
			return prevChosenFilters.filter((filterOption) => filterOption.value !== option.value);
		});
	}, [ onChange ]);

	// show and hide Filters Section
	const onToggleView = useCallback(() => {
		setIsCollapse(!isCollapse);
	}, [ isCollapse, setIsCollapse ]);

	return (
		<Container>
			<TopSection>
				<div>
					<Title size="32px">{ title }</Title>
					<SubTitle>
						<Span bold margin="0 5px 0 0"> { subTitleBold } </Span> { subTitle }
					</SubTitle>
				</div>
				<ChosenFilters chosenFilters={ chosenFilters } onChange={ onChange }/>
			</TopSection>
			<BottomSection isCollapse={ isCollapse }>
				<ToggleContainer>
					<ToggleArea onClick={onToggleView}>
						{ isCollapse
							? <FontAwesomeIcon icon={ faSlidersH } size="sm"/>
							: <Image path={ CloseImage } width="12px" height="12px"/>
						}
						<Span bold margin="0 0 0 15px">Filter</Span>
					</ToggleArea>
				</ToggleContainer>
				{!isCollapse &&
				<FiltersSections>
					{ renderFilterBlock(filters) }
				</FiltersSections>
				}
			</BottomSection>
		</Container>
	);

}

export default FiltersPanel;


/*
filters: [
{
	type: 'marketSegment',
	options: [ { value, label } ],
},
],
onChange: (updatedFilters) => [ { type, selectedOptions } ]
 */
