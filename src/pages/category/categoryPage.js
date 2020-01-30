import React, { useState } from 'react';
import styled from 'styled-components';
import DumbTabNavigation from '../../components/common/tabNavigation/DumbTabNavigation';
import CollapseWrapper from '../../components/generic/CollapseWrapper';
import ItemCard from '../../components/common/itemCard/ItemCard';
import { cardTypes } from '../../config/constants';
import { mockData } from '../../config/mockData';
import { subModelsNormalizer } from './categoryPageHalper';

const models = subModelsNormalizer(mockData.categoryPage.models);
console.log(models);

const Container = styled.div`
	margin: 0 auto;
	max-width: 1312px;
`;

const TitleContainer = styled.div`
	
	
	h2 {
		
	}
`;

const CategoryPage = () => {
	const [ tabId, setTabId ] = useState(1);

	const renderCards = (cardsData) => {
		return cardsData.map((cardData, i) => {
			return <ItemCard
				key={ i }
				cardType={ cardTypes.smallBusinesses }
				data={ cardData }
			/>;
		});
	};

	return (
		<Container>

			<TitleContainer>
				<h2>Solution for Small and Medium Business</h2>
				Over <b>1,300</b> Security Gateway Appliance & Solutions
			</TitleContainer>

			<DumbTabNavigation
				activeTabId={ tabId }
				options={[
					{ id: 1, label: 'SMB Appliances', imagePath: '/images/categorypage/tab1.svg' },
					{ id: 2, label: 'SMB Managment', imagePath: '/images/categorypage/tab2.svg' },
					{ id: 3, label: 'SMB Zone Alarm', imagePath: '/images/categorypage/tab3.svg' },
				]}
				onChange={ (val) => setTabId(val) } />
			<hr/>

			<CollapseWrapper
				title="High End Enterprise"
				imgSource="https://h50003.www5.hpe.com/digmedialib/prodimg/lowres/i00017951.png"
				isOpen={ true }
			>
				{ renderCards(models[0].subModels) }
			</CollapseWrapper>

		</Container>
	);
};

CategoryPage.propTypes = {

};

export default CategoryPage;
