import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CollapseWrapper from '../../components/generic/CollapseWrapper';
import ItemCard from '../../components/common/itemCard/ItemCard';
import DumbTabNavigation from '../../components/common/tabNavigation/DumbTabNavigation';
import { cardTypes, colors, fonts } from '../../config/constants';
import { buildAssetAbsolutePath } from '../../lib/assetsHelper';
import { buildModelsGroupedByTabs, tabIds, tabOptions } from './categoryPageHelper';
import { classes as classesToggleArea } from '../../components/generic/CollapseWrapper';

const Container = styled.div`
	margin: 30px auto;
	max-width: 1312px;
	& > div {
		width: 890px;
	}
	
	& .${ classesToggleArea.container } {
		padding-top: 15px;
	}
`;

const Title = styled.div`
	font-size: ${ fonts.paragraph };
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
	margin: 20px 0 0 0;
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

const renderModels = (modelsGroupedByTabs, activeTabId) => {
	if (!modelsGroupedByTabs || !activeTabId) return null;
	return modelsGroupedByTabs[activeTabId].map(model => {
		const modelImageUrl = buildAssetAbsolutePath(model.image);
		return (
			<CollapseWrapper
				key={ model.id }
				title={ model.name }
				imagePath={ modelImageUrl }
				isOpen={ true }
			>
				{ renderSubModels(model.subModels) }
			</CollapseWrapper>
		);
	});
};

const CategoryPage = ({ models }) => {
	const [ modelsGroupedByTabs, setModelsGroupedByTabs ] = useState(null);
	const [ activeTabId, setActiveTabId ] = useState(tabIds[0]);

	const handleChange = useCallback((tab) => {
		setActiveTabId(tab);
	}, []);

	useEffect(() => {
		const newModelsGroupedByTabs = buildModelsGroupedByTabs(models);
		setModelsGroupedByTabs(newModelsGroupedByTabs);
	}, [ models ]);

	return (
		<Container>
			<div>
				<Title>
					<h2>Solution for Small and Medium Business<strong>.</strong></h2>
					Over <strong>1,300</strong> Security Gateway Appliance & Solutions
				</Title>
				<TabNavigationContainer>
					<DumbTabNavigation
						activeTabId={ activeTabId }
						options={ tabOptions }
						onChange={ handleChange }
					/>
				</TabNavigationContainer>
				{ renderModels(modelsGroupedByTabs, activeTabId) }
			</div>
		</Container>
	);
};

CategoryPage.propTypes = {
	models: PropTypes.array,
};

export default CategoryPage;
