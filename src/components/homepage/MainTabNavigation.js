import React from 'react';
import styled from 'styled-components';
import TabNavigation from '../common/tabNavigation/TabNavigation';
import { mockData } from '../../config/mockData';

const TabsContainerMiddle = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 20px;
`;

const MainTabNavigation = () => {
	return (
		<TabsContainerMiddle>
			<TabNavigation
				options={ mockData.homePageMiddleTabs }
				defaultActiveTabId={ 1 }
				onChange={(value) => {
					console.log(value);
				}}
			/>
		</TabsContainerMiddle>
	);
};

export default MainTabNavigation;
