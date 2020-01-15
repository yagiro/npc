import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from '../gereric/Title';
import Checkbox from '../gereric/Checkbox';
import Span from '../gereric/Span';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../gereric/Image';
import CloseImage from '../../assets/compare/x.png';
import { colors, fonts } from '../../config/constants';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

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

const ChosenFiltersSection = styled.div`
	display: flex;
	align-items: center;
	margin-left: 25px;
	flex-wrap: wrap;
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

const ChosenFilterContainer = styled.div`
	display: flex;
	border: ${ colors.lightgray } 1px solid;
	border-radius: 3px;
	background-color: ${ colors.background };
	margin-right: 6px;
	align-items: center;
	letter-spacing: 0;
	text-transform: capitalize;
	line-height: 100%;
	padding-left: 5px;
	font-size: 12px;
	color: ${ colors.textLightGray };
`;

const CrossImgWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 5px;
	height: 100%;
	border-left: ${ colors.lightgray } 1px solid;
	padding: 6px 7px 7px 7px;
	cursor: pointer;
	
	&:hover {
		background-color: ${colors.whitesmoke};
	}
`;

const ClearAllButton = styled.div`
	text-align: left;
	text-decoration: underline;
	margin-left: 15px;
	cursor: pointer;
`;

function NetworkSecurityFilter({ filters }) {

	const [ chosenFilters, setChosenFilters ] = useState([
		// { value: '15gbps', label: '1-5 Gbps' },
		// { value: '3u', label: '3 U' },
	]);
	const [ isCollapse, setIsCollapse ] = useState(false);

	useEffect(() => {
		console.log('REQUEST TO GET UPDATED PRODUCTS');
		console.log(chosenFilters);
	}, [ chosenFilters ]);

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
			}
		});
	};

	// render chosen filters in the Top Section
	const renderChosenFilters = (chosenFilters) => {
		return chosenFilters.map((chosenFilter) => {
			return (
				<ChosenFilterContainer key={ chosenFilter.value }>{ chosenFilter.label }
					<CrossImgWrapper onClick={() => {
						onRemoveFilterOption(chosenFilter);
					}}>
						<Image path={CloseImage} width="8px" height="8px"/>
					</CrossImgWrapper>
				</ChosenFilterContainer>
			);
		});
	};

	// clear filters click handler
	const onClearFiltersClick = useCallback(() => {
		setChosenFilters([]);
	}, [ setChosenFilters ]);

	// add filter-option click handler
	const onAddFilterOption = useCallback((option) => {
		setChosenFilters((prevChosenFilters) => {
			return [...prevChosenFilters, option];
		});
	}, [ setChosenFilters ]);

	// remove filter-option click handler
	const onRemoveFilterOption = useCallback((option) => {
		setChosenFilters((prevChosenFilters) => {
			return prevChosenFilters.filter((filterOption) => filterOption.value !== option.value);
		});
	}, [ setChosenFilters ]);

	// show and hide Filters Section
	const onToggleView = useCallback(() => {
		setIsCollapse(!isCollapse);
	}, [ isCollapse, setIsCollapse ]);

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
					{ chosenFilters.length > 0 && <ClearAllButton onClick={ onClearFiltersClick }>Clear all</ClearAllButton> }
				</ChosenFiltersSection>
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
