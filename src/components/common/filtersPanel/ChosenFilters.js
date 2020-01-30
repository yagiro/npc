import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from '../../generic/Image';
import CloseImage from '../../../assets/compare/x.png';
import { colors } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';
import { buildChosenFiltersOnRemove, buildFilterOptionObject } from './filtersHelpers';
import TransitionGroupWrapper from '../../generic/TransitionGroupWrapper';

const MS_FADE_ANIMATION = 200;

const classPrefix = 'chosen-filter';
export const classes = {
	animationGroup: createClassName(classPrefix, 'animation-wrapper'),
};

const Container = styled.div`

	> .${ classes.animationGroup } {
		display: flex;
		align-items: center;
		margin-left: 25px;
		flex-wrap: wrap;
	}
	
	.chosen-filter-enter {
	  opacity: 0;
	  transform: scale(0.2);	
 	 }
	
	.chosen-filter-enter.chosen-filter-enter-active {
	  opacity: 1;
	  transform: translateX(0);
  	  transition: opacity ${ MS_FADE_ANIMATION }ms ease-in, transform ${ MS_FADE_ANIMATION }ms ease-in;
	}
	
	.chosen-filter-leave {
	  opacity: 1;
	}
	
	.chosen-filter-leave.chosen-filter-leave-active {
	  opacity: 0;  
	  transform: scale(0.2);
	  transition: opacity ${ MS_FADE_ANIMATION }ms ease-in, transform ${ MS_FADE_ANIMATION }ms ease-in;
	}
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
	margin-bottom: 6px;
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

	const [ filterOptionLabels, setFilterOptionLabels ] = useState({});
	useEffect(() => {
		const filterOptionsObject = buildFilterOptionObject(filters);
		console.log(filterOptionsObject);
		setFilterOptionLabels(filterOptionsObject);
	}, [ filters ]);
	
	const getOptionByValue = (filters, value) => {
		return filterOptionLabels[value];
	};

	// render chosen filters in the Top Section of Filter Panel
	const renderChosenFilters = (chosenFilters) => {

		// encapsulate buildOptionValueArr
		let arrOptionValues = [];

		Object.keys(chosenFilters).forEach(function(key) {

			if(chosenFilters[key].dropdownFilter) {
				// so we now that this is combo-filter
				chosenFilters[key].value.forEach((value)=> {
					arrOptionValues.push(`${chosenFilters[key].dropdownFilter.value}${value}`);
				});

			} else {
				arrOptionValues.push(...chosenFilters[key].value);
			}
		});
		
		console.log(arrOptionValues);

		return arrOptionValues.map((optionValue) => {

			const option = getOptionByValue(filters, optionValue);

			return (
				<ChosenFilterContainer key={ option.value }>
					{ option.label }
					<CrossImgWrapper onClick={() => {
						onRemoveFilterOption(option, chosenFilters, option.valueForRemoving);
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
	}, [ onChange ]);

	// remove filter-option click handler
	const onRemoveFilterOption = useCallback((option, chosenFilters, valueForRemoving) => {
		const updatedChosenFilters = buildChosenFiltersOnRemove(option, chosenFilters, valueForRemoving);
		onChange(updatedChosenFilters);
	}, [ onChange ]);
	
	const hasChosenFilters = (chosenFilters) => {
		return !!Object.values(chosenFilters)
			.find(filter => {
				return filter.value.size > 0;
			});
	};
	
	return (

		<Container>
			<TransitionGroupWrapper animationDelayMs={ MS_FADE_ANIMATION } animationName="chosen-filter" classNameAnimationGroup={ classes.animationGroup }>
				{ renderChosenFilters(chosenFilters) }
				{ hasChosenFilters(chosenFilters) && <ClearAllButton onClick={ onClearFiltersClick }>Clear all</ClearAllButton> }
			</TransitionGroupWrapper>
		</Container>

	);
};

ChosenFilters.propTypes = {
	filters: PropTypes.array.isRequired,
	chosenFilters: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default ChosenFilters;
