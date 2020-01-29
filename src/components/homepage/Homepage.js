import React from 'react';
import styled from 'styled-components';
import { createClassName } from '../../lib/classNameHelper';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const classPrefix = 'home-page';
export const classes = {
	header: createClassName(classPrefix, 'header'),
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
`;

const Homepage = () => {
	return (
		<Container>
			<Header/> {/*Header should be removed*/}
			<Content/>
			<Footer/>
		</Container>
	);
};

export default Homepage;
