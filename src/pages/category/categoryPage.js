import React, { useState } from 'react';
import styled from 'styled-components';

import CollapseWrapper from '../../components/generic/CollapseWrapper';
import ItemCard from '../../components/common/itemCard/ItemCard';
import TabNavigation from '../../components/common/tabNavigation/TabNavigation';
import { cardTypes, colors, fonts } from '../../config/constants';
import { mockData } from '../../config/mockData';
import { modelsAdapter } from './categoryPageHalper';

const adaptedModels = modelsAdapter(mockData.categoryPage.models);
const DEFAULT_TAB = 'smbAppliances';
const tabs = [
	{ id: 'smbAppliances', label: 'SMB Appliances', imagePath: '/images/categorypage/tab1.svg' },
	{ id: 'smbManagment', label: 'SMB Managment', imagePath: '/images/categorypage/tab2.svg' },
	{ id: 'smbZoneAlarm', label: 'SMB Zone Alarm', imagePath: '/images/categorypage/tab3.svg' },
];

const Container = styled.div`
	margin: 0 auto;
	max-width: 1312px;
`;

const TitleContainer = styled.div`
	font: ${ fonts.paragraph };
	margin-bottom: 35px;
	
	h2 {
		color: #4C5059;
		font: ${ fonts.header };
		line-height: 1em;
		margin: 0 0 10px 0;
		
		strong {
			color: #EC407A;
			font-weight: bolder;
		}
	}
`;

/**
 * For some appear/disappear effects in the future
 */
const ModelsWrapper = styled.div`
	
`;

const TabNavigationContainer = styled.div`
	border-bottom: 1px ${ colors.lightgray } solid;
	margin: 20px 0;
`;

const filterModelsByTabId = (models, tabId) => models.filter(model => model.groupId === tabId);

const renderSubModels = (cardsData) => {
	return cardsData.map((cardData, i) => {
		return <ItemCard
			key={ i }
			cardType={ cardTypes.smallBusinesses }
			data={ cardData }
		/>;
	});
};

const renderModels = (filteredModels) => {
	return filteredModels.map(model => {
		return <CollapseWrapper
			key={ model.id }
			title={ model.name }
			imgSource="https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png"
		>
			{ renderSubModels(model.subModels) }
		</CollapseWrapper>;
	});
};

const CategoryPage = () => {
	const [ filteredModels, setFilteredModels ] = useState(filterModelsByTabId(adaptedModels, DEFAULT_TAB));

	const handleChange = (tab) => {
		const newFilteredModels = filterModelsByTabId(adaptedModels, tab);
		setFilteredModels(newFilteredModels);
	};

	return (
		<Container>
			<TitleContainer>
				<h2>Solution for Small and Medium Business<strong>.</strong></h2>
				Over <b>1,300</b> Security Gateway Appliance & Solutions
			</TitleContainer>
			<TabNavigationContainer>
				<TabNavigation
					defaultActiveTabId={ DEFAULT_TAB }
					options={ tabs }
					onChange={ handleChange } />
			</TabNavigationContainer>
			<ModelsWrapper>
				{ renderModels(filteredModels) }
			</ModelsWrapper>
		</Container>
	);
};

export default CategoryPage;
