import React from 'react';
import styled from 'styled-components';
import TabNavigation from '../common/tabNavigation/TabNavigation';
import { mockData } from '../../config/mockData';
import { colors } from '../../app/consts/consts';

const Container = styled.div`
	width: 100%;
	max-width: 1188px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MockTopBar = styled.div`
	max-width: 1188px;
	height: 43px;
	width: 100%;
	margin: 15px 0;
	background-color: ${ colors.borderGrey };
`;

const TabsContainerTop = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-start;
	margin-top: 35px;
`;

const TopControls = () => {
	return (
		<Container>
			<MockTopBar/>
			<TabsContainerTop>
				<TabNavigation
					options={ mockData.menuItems }
					defaultActiveTabId={ 2 }
					onChange={ (value) => {
						console.log(value);
					} }
				/>
			</TabsContainerTop>
		</Container>
	);
};

export default TopControls;
