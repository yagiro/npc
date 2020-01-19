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


const ChosenFilters = ({ chosenFilters, onChange }) => {

	// render chosen filters in the Top Section of Filter Panel
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
		onChange([]);
	}, [ onChange ]);

	const onRemoveFilterOption = useCallback((option) => {
		onChange((prevChosenFilters) => {
			return prevChosenFilters.filter((filterOption) => filterOption.value !== option.value);
		});
	}, [ onChange ]);

	return (
		<ChosenFiltersSection>
			{ renderChosenFilters(chosenFilters) }
			{ chosenFilters.length > 0 && <ClearAllButton onClick={ onClearFiltersClick }>Clear all</ClearAllButton> }
		</ChosenFiltersSection>
	);
};

export default ChosenFilters;
