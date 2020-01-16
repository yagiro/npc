import React, { useState } from 'react';
import styled from 'styled-components';
import Image from '../../generic/Image';
import verified from '../../../assets/verified@2x.png';
import img from '../../../assets/CloudGuard_Alibaba-Cloud.png.png';
import { colors } from '../../../config/constants';
import Title from '../../generic/Title';

const Container = styled.div`
	width: 70%;
  	height: 100%;
  	padding: 15px;
`;

const DescriptionSection = styled.div`
	display: flex;
	height: 100%;`;

const Description = styled.div`
	font-size: 14px;
	margin-bottom: 10px;
	max-height: ${({ isShortDescription }) => isShortDescription ? '60px' : ''};
	overflow-y: hidden;
`;

const FeatureContainer = styled.div`
	height: auto;
	display: flex;
	align-items: center;
`;

const FeatureText = styled.div`
	font-size: 14px;
	margin-left: 6px;
	margin-top: 6px;
`;

const UlTitle = styled.div`
	color: ${ colors.textLightGray };
	font-size: 14px;
	margin-bottom: 7px;
`;

const SeeMoreButton = styled.div`
	font-size: 14px;
	color: ${colors.checkPointPink};
	cursor: pointer;
`;

const CloudGuardMainSection = ({ title, description, includedPackages }) => {

	const [ isShortDescription, setIsShortDescription ] = useState(true);

	const renderPackageList = (packages) => {
		return packages.map((p) => {
			return (
				<FeatureContainer key={ p.id }>
					<Image path={ verified } width="15"/>
					<FeatureText>{ p.feature }</FeatureText>
				</FeatureContainer>
			);
		});
	};
	
	const handleSeeMoreClick = () => {
		setIsShortDescription(!isShortDescription);
	};

	return (
		<Container>
			<DescriptionSection>
				<div>
					<Image path={img} width='140'/>
				</div>
				<div>
					<Title bold size="18px">{ title }
					</Title>
					<Description isShortDescription={isShortDescription}>
						{ description }
					</Description>
					<SeeMoreButton onClick={handleSeeMoreClick}>
						{ isShortDescription ? '+' : '-'}See more
					</SeeMoreButton>
				</div>
			</DescriptionSection>
			<UlTitle>Hardware Specification:</UlTitle>
			{ renderPackageList(includedPackages) }
		</Container>
	);
};

export default CloudGuardMainSection;
