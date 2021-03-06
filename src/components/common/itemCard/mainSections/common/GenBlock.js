import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../../../app/consts/consts';

const Container = styled.div`
 	display: flex;
`;

const Left = styled.div`
 	display: flex;
 	width: 80%;
 	flex-wrap: wrap;
 	font-size: ${ fonts.paragraphNormal };
 	align-content: center;
`;

const Right = styled.div`
 	display: flex;
 	width: 20%;
 	align-items: center;
 	flex-wrap: wrap;
 	justify-content: center;
 	text-align: center;
 	padding: 10px;
 	box-sizing: border-box;
`;

const Title = styled.div`
	width: 100%;
	font-weight: bold;
`;

const SubTitle = styled.div`
	color: ${ colors.textLightGray };
`;

const GbpsText = styled.div`
	font-size: ${ fonts.paragraphSmall };
`;

const GenBlock = ({ title, subTitle, gbps }) => {
	return (
		<Container>
			<Left>
				<Title>{ title }</Title>
				<SubTitle>{ subTitle }</SubTitle>
			</Left>
			<Right>
				<Title>{ gbps }</Title>
				<GbpsText>Gbps</GbpsText>
			</Right>
		</Container>
	);
};

export default GenBlock;
