import React from 'react';
import styled from 'styled-components';
import { createClassName } from '../../lib/classNameHelper';
import Header from './Header';
import { mockData } from '../../config/mockData';
import TabNavigation from '../common/tabNavigation/TabNavigation';
import { colors } from '../../config/constants';
import Image from '../generic/Image';
import mainImage from '../../../src/assets/homepage/main_img.png';
import infinity from '../../../src/assets/homepage/infinity.png';
import Paragraph from '../generic/Paragraph';
import Title from '../generic/Title';
import Button from '../generic/Button';
import Span from '../generic/Span';


const classPrefix = 'home-page';
export const classes = {
	header: createClassName(classPrefix, 'header'),
};

const Container = styled.div`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Content = styled.div`
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
	margin-top: 15px;
	background-color: ${ colors.borderGrey };
`;

const TabsContainerTop = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-start;
	margin-top: 35px;
`;

const MainImageContainer = styled.div`
	width: 100vw;

	> img {
		max-height: 200px;
	}
`;

const TabsContainerMiddle = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 20px;
`;

const GetQuoteContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

const GetQuoteBlock = styled.div`
	display: flex;
	max-width: 535px;
	width: 535px;
	justify-content: center;
	align-items: center;
	height: 225px;
	-webkit-box-shadow: 0 103px 54px -100px rgba(178,184,214,1);
	-moz-box-shadow: 0 103px 54px -100px rgba(178,184,214,1);
	box-shadow: 0 103px 54px -100px rgba(178,184,214,1);
`;

const GetQuoteImageContainer = styled.div`
	display: flex;
`;

const GetQuoteTextsContainer = styled.div`
	margin-left: 25px;
`;

const OurSolutionsContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 35px;
`;

const MockSolutionsGroup = styled.div`
	max-width: 960px;
	height: 630px;
	width: 100%;
	margin-top: 35px;
	background-color: ${ colors.borderGrey };
`;


const Homepage = () => {
	return (
		<Container>
			<Header username="Ilia1 Shneider1"/>
			<Content>
				<MockTopBar/>
				<TabsContainerTop>
					<TabNavigation
						options={ mockData.menuItems }
						defaultActiveTabId={ 2 }
						// activeTabId={ selectedMenuItem }
						onChange={(value) => {
							console.log(value);
							// this.setState({ selectedMenuItem: value })
						}}
					/>
				</TabsContainerTop>
				<MainImageContainer>
					<Image path={ mainImage } />
				</MainImageContainer>
				<TabsContainerMiddle>
					<TabNavigation
						options={ mockData.homePageMiddleTabs }
						defaultActiveTabId={ 1 }
						// activeTabId={ selectedMenuItem }
						onChange={(value) => {
							console.log(value);
							// this.setState({ selectedMenuItem: value })
						}}
					/>
				</TabsContainerMiddle>
				<GetQuoteContainer>
					<GetQuoteBlock>
						<GetQuoteImageContainer>
							<Image path={ infinity } height="135px" width="150px"/>
						</GetQuoteImageContainer>
						<GetQuoteTextsContainer>
							<Title size="30px" bold>INFINITY</Title>
							<Paragraph color={ colors.paragraphBlack }>Check Point Infinity Total Protection</Paragraph>
							<Title size="24px">ALL-IN-ONE SOLUTION</Title>
							<Button styleType="fill" width="100px" height="36px">GET A QUOTE</Button>
						</GetQuoteTextsContainer>
					</GetQuoteBlock>
				</GetQuoteContainer>
				<OurSolutionsContainer>
					<Title size="30px">Our Solutions<Span size="12px" margin="0 0 0 5px" color={ colors.checkPointPink }>•</Span></Title>
				</OurSolutionsContainer>
				<MockSolutionsGroup/>
			</Content>
		</Container>
	);
};

export default Homepage;
