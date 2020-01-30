import React from 'react';
import styled from 'styled-components';
import GetInfinityQuoteSection from './GetInfinityQuoteSection';
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
			<GetInfinityQuoteSection/>
			<SolutionsGroupSection/>
		</Container>
	);
};

export default Content;
