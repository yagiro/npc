import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Content from './Content';
import Banner from './Banner';
import mainImage from '../../assets/homepage/main_img.png';
import TopControls from './TopControls';
import MainTabNavigation from './MainTabNavigation';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
`;

const Homepage = () => {
	return (
		<Container>
			<TopControls/>
			<Banner imagePath={ mainImage }/>
			<MainTabNavigation/>
			<Content/>
			<Footer/>
		</Container>
	);
};

export default Homepage;
