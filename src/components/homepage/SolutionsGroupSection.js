import React from 'react';
import styled from 'styled-components';
import Title from '../generic/Title';
import Span from '../generic/Span';
import { colors } from '../../app/consts/consts';

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

const SolutionsGroupSection = () => {
	return (
		<>
			<OurSolutionsContainer>
				<Title size="30px"><Span size="30px" margin="0 0 0 5px" color={ colors.checkPointPink }>Our</Span> Solutions
					<Span size="12px" margin="0 0 0 5px" color={ colors.checkPointPink }>•</Span>
				</Title>
			</OurSolutionsContainer>
			<MockSolutionsGroup/>
		</>
	);
};

export default SolutionsGroupSection;
