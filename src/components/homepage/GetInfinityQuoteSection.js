import React from 'react';
import styled from 'styled-components';
import Image from '../generic/Image';
import infinity from '../../assets/homepage/infinity.png';
import Title from '../generic/Title';
import Paragraph from '../generic/Paragraph';
import Button from '../generic/Button';

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

const GetInfinityQuoteSection = () => {
	return (
		<GetQuoteContainer>
			<GetQuoteBlock>
				<GetQuoteImageContainer>
					<Image path={ infinity } height="135px" width="150px"/>
				</GetQuoteImageContainer>
				<GetQuoteTextsContainer>
					<Title size="30px" bold>INFINITY</Title>
					<Paragraph color="black">Check Point Infinity Total Protection</Paragraph>
					<Title size="24px">ALL-IN-ONE SOLUTION</Title>
					<Button styleType="fill" width="100px" height="36px">GET A QUOTE</Button>
				</GetQuoteTextsContainer>
			</GetQuoteBlock>
		</GetQuoteContainer>    
	);
};

export default GetInfinityQuoteSection;
