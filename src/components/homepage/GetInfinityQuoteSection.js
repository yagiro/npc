import React from 'react';
import styled from 'styled-components';
import Image from '../generic/Image';
import infinity from '../../assets/homepage/infinity.png';
import Title from '../generic/Title';
import Paragraph from '../generic/Paragraph';
import Button from '../generic/Button';

const Container = styled.div`
	display: flex;
	justify-content: center;
	max-width: 535px;
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

const GetInfinityQuoteSection = () => {
	return (
		<Container>
			<GetQuoteImageContainer>
				<Image path={ infinity } height="135px" width="150px"/>
			</GetQuoteImageContainer>
			<GetQuoteTextsContainer>
				<Title size="30px" bold>INFINITY</Title>
				<Paragraph color="black">Check Point Infinity Total Protection</Paragraph>
				<Title size="24px">ALL-IN-ONE SOLUTION</Title>
				<Button styleType="fill" width="100px" height="36px">GET A QUOTE</Button>
			</GetQuoteTextsContainer>
		</Container>
	);
};

export default GetInfinityQuoteSection;
