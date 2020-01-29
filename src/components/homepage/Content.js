import React from 'react';
import styled from 'styled-components';
import TopControls from './TopControls';
import GetQuoteSection from './GetQuoteSection';
import SolutionsGroupSection from './SolutionsGroupSection';

const Container = styled.div`
	width: 100%;
	max-width: 1188px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;


const Content = () => {
	return (
		<Container>
			<TopControls/>
			<GetQuoteSection/>
			<SolutionsGroupSection/>
		</Container>
	);
};

export default Content;
