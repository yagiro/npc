import React, { useCallback } from 'react';
import styled from 'styled-components';
import Image from '../generic/Image';
import CloseImage from '../../assets/compare/x.png';
import { colors } from '../../config/constants';

const ChosenFiltersSection = styled.div`
	display: flex;
	align-items: center;
	margin-left: 25px;
	flex-wrap: wrap;
`;

const ClearAllButton = styled.div`
	text-align: left;
	text-decoration: underline;
	margin-left: 15px;
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


const ChosenFilters = ({ chosenFilters, onChange, filters }) => {
	
	const getOptionByValue = (filters, value) => {
		let option = {};
		filters.forEach((filter)=> {
			const found = filter.options.find((op)=> {
				return op.value === value;
			});
			
			if(found) {
				option = found;
			}
		});
		
		return option;
	};

	// render chosen filters in the Top Section of Filter Panel
	const renderChosenFilters = (chosenFilters) => {
		let arrOptionValues = [];
		
		Object.keys(chosenFilters).forEach(function(key) {
			arrOptionValues.push(...chosenFilters[key].value);
		});

		return arrOptionValues.map((optionValue) => {

			const chosenFilter = getOptionByValue(filters, optionValue);
			return (
				<ChosenFilterContainer key={ chosenFilter.value }>{ chosenFilter.label }
					<CrossImgWrapper onClick={() => {
						onRemoveFilterOption(chosenFilter);
					}}>
						<Image path={ CloseImage } width="8px" height="8px"/>
					</CrossImgWrapper>
				</ChosenFilterContainer>
			);
		});
	};
	
	// clear filters click handler
	const onClearFiltersClick = useCallback(() => {
		onChange({});
	}, [onChange]);

	const onRemoveFilterOption = useCallback((option) => {
		onChange((prevChosenFilters) => {
			const filter = prevChosenFilters[option.filterId];
			const prevOptions = [ ...filter.value ];
			const updatedOptions = prevOptions.filter((filterOption) => filterOption !== option.value);
			return { ...prevChosenFilters, [filter.filterId]: { ...filter, value: new Set([...updatedOptions]) } };
		});
	}, [onChange]);
	
	const isChosenFilters = (chosenFilters) => {
		let flag = false;
		
		Object.keys(chosenFilters).forEach(function(key) {
			if([...chosenFilters[key].value].length > 0) {
				flag = true;
			}
		});
		
		return flag;
	};
	
	return (
		<ChosenFiltersSection>
			{ renderChosenFilters(chosenFilters) }
			{ isChosenFilters(chosenFilters) && <ClearAllButton onClick={ onClearFiltersClick }>Clear all</ClearAllButton> }
		</ChosenFiltersSection>
	);
};

export default ChosenFilters;