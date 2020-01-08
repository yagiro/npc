import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config/constants';
import Image from '../../Image';
import verified from '../../../assets/verified@2x.png';


const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;`;

const DescriptionSection = styled.div`
  width: 60%;
  height: 100%;
  padding: 15px 15px;`;

const PackagesSection = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 48px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px 0;
`;

const Description = styled.span`
    font-size: 14px;`;

const AdditionalLabel = styled.span`
color: ${colors.checkPointPink};
`;

const UlTitle = styled.div`
	color: ${colors.textLightGray};
	font-weight: lighter;
	font-size: 14px;
	margin-bottom: 15px;
`;

const FeatureContainer = styled.div`
	height: auto;
	margin-bottom: 15px;
	display: flex;
	align-items: center;
`;

const FeatureText = styled.div`
	font-weight: bold;
	font-size: 14px;
	display: inline-block;
	margin-left: 6px;
`;

const MobileEndpointLeftSection = (props) => {

	const mockPackages = [
		{	id: 1, feature: 'SandBlast Agent Advanced.' },
		{	id: 2, feature: 'SandBlast Mobile Per Device' },
		{	id: 3, feature: 'Two 6500 gateways' },
		{	id: 4, feature: '450 Gbps using 52 gateways' },
	];

	const renderPackageList = (packages) => {
		return packages.map((p) => {
			return (
				<FeatureContainer key={p.id}>
					<Image path={verified} width={15}/>
					<FeatureText>{p.feature}</FeatureText>
				</FeatureContainer>
			);
		});
	};

	return (
		<Container>
			<DescriptionSection>
				<Title>Unified Endpoint Security
					<AdditionalLabel> Advanced</AdditionalLabel>
				</Title>
				<Description>
					Check Point Unified Endpoint Security Advanced offers comprehensive,
					enterprise-grade endpoint and mobile device security that protects PCs, Mac, iOS and Android devices
					against known, unknown and Zero-day threats.
				</Description>
			</DescriptionSection>
			<PackagesSection>
				<UlTitle>INCLUDED PACKAGES:</UlTitle>
				{renderPackageList(mockPackages)}
			</PackagesSection>
		</Container>
	);
};

export default MobileEndpointLeftSection;
