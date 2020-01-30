import React, { useState } from 'react';
import styled from 'styled-components';
import CollapseWrapper from '../../components/generic/CollapseWrapper';
import ItemCard from '../../components/common/itemCard/ItemCard';
import { cardTypes, colors, fonts } from '../../config/constants';
import { mockData } from '../../config/mockData';
import { subModelsNormalizer } from './categoryPageHalper';
import TabNavigation from '../../components/common/tabNavigation/TabNavigation';

const normalisedModels = subModelsNormalizer(mockData.categoryPage.models);
const MODELS_OPACITY_MS = 200;
const DEFAULT_TAB = 'smbAppliances';

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
		margin: 0;
		margin-bottom: 10px;
		
		strong {
			color: #EC407A;
			font-weight: bolder;
		}
	}
`;

const ModelsWrapper = styled.div`
	& > * {
		animation:appear ${ MODELS_OPACITY_MS }ms;
		opacity: ${props => props.disapear ? 0 : 1 };
		transition: opacity ${ MODELS_OPACITY_MS }ms;
		
		@keyframes appear {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	}
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

const CategoryPage = () => {
	const [ disapear, setDisapear ] = useState(false);
	const [ models, setModels ] = useState(filterModelsByTabId(normalisedModels, DEFAULT_TAB));

	const prepareRenderModels = (tabId) => {
		setDisapear(true);
		setTimeout(() => {
			setDisapear(false);
			const newModels = filterModelsByTabId(normalisedModels, tabId);
			setModels(newModels);
		}, MODELS_OPACITY_MS);
	};

	const renderModels = () => {
		return models.map(model => {
			return <CollapseWrapper
				key={ model.id }
				title={ model.name }
				imgSource="https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png"
			>
				{ renderSubModels(model.subModels) }
			</CollapseWrapper>;
		});
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
					options={[
						{ id: 'smbAppliances', label: 'SMB Appliances', imagePath: '/images/categorypage/tab1.svg' },
						{ id: 'smbManagment', label: 'SMB Managment', imagePath: '/images/categorypage/tab2.svg' },
						{ id: 'smbZoneAlarm', label: 'SMB Zone Alarm', imagePath: '/images/categorypage/tab3.svg' },
					]}
					onChange={ (val) => prepareRenderModels(val) } />
			</TabNavigationContainer>

			<ModelsWrapper disapear={ disapear }>
				{ renderModels() }
			</ModelsWrapper>

		</Container>
	);
};

CategoryPage.propTypes = {

};

export default CategoryPage;
