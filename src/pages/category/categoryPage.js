import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CollapseWrapper from '../../components/generic/CollapseWrapper';
import ItemCard from '../../components/common/itemCard/ItemCard';
import { cardTypes, colors, fonts } from '../../config/constants';
import { buildAssetAbsolutePath } from '../../lib/assetsHelper';
import { buildModelsByTabs, tabIds, tabSettings } from './categoryPageHelper';
import DumbTabNavigation from '../../components/common/tabNavigation/DumbTabNavigation';

const Container = styled.div`
	margin: 0 auto;
	max-width: 1312px;
	& > div {
		width: 890px;
	}
`;

const TitleContainer = styled.div`
	font: ${ fonts.paragraph };
	margin-bottom: 35px;
	
	h2 {
		color: ${ colors.paragraphBlack };
		font: ${ fonts.header };
		line-height: 1em;
		margin: 0 0 10px 0;
		
		strong {
			color: ${ colors.checkPointPink };
			font-weight: bolder;
		}
	}
`;

const TabNavigationContainer = styled.div`
	border-bottom: 1px ${ colors.lightgray } solid;
	margin: 20px 0;
`;

const renderSubModels = (subModels) => {
	return subModels.map((subModel, i) => {
		return (
			<ItemCard
				key={ i }
				cardType={ cardTypes.smallBusinesses }
				data={ subModel }
			/>
		);
	});
};

const renderModels = (modelsByTabs, activeTab) => {
	if (!modelsByTabs || !activeTab) return null;
	return modelsByTabs[activeTab].map(model => {
		const imagePath = buildAssetAbsolutePath(model.image);
		return (
			<CollapseWrapper
				key={ model.id }
				title={ model.name }
				imagePath={ imagePath }
			>
				{ renderSubModels(model.subModels) }
			</CollapseWrapper>
		);
	});
};

const CategoryPage = ({ models }) => {
	const [ modelsByTabs, setModelsByTabs ] = useState(null);
	const [ activeTab, setActiveTab ] = useState(tabIds[0]);

	const handleChange = useCallback((tab) => {
		setActiveTab(tab);
	}, []);

	useEffect(() => {
		const newModelsByTabs = buildModelsByTabs(models);
		setModelsByTabs(newModelsByTabs);
	}, [ models ]);

	return (
		<Container>
			<div>
				<TitleContainer>
					<h2>Solution for Small and Medium Business<strong>.</strong></h2>
					Over <strong>1,300</strong> Security Gateway Appliance & Solutions
				</TitleContainer>
				<TabNavigationContainer>
					<DumbTabNavigation
						activeTabId={ activeTab }
						options={ tabSettings }
						onChange={ handleChange }
					/>
				</TabNavigationContainer>
				{ renderModels(modelsByTabs, activeTab) }
			</div>
		</Container>
	);
};

CategoryPage.propTypes = {
	models: PropTypes.array,
};


export default CategoryPage;
