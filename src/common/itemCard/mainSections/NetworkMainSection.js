import React from 'react';
import styled from 'styled-components';
import Image from '../../Image';
import verified from '../../../assets/verified@2x.png';
import { colors, } from '../../../config/constants';

const Container = styled.div`
 	display: flex;
 	width: 65%;
  	height: 100%;
	justify-content: space-between`;

const DescriptionSection = styled.div`
 	 width: 40%;
 	 height: 100%;
	 padding: 15px 0 0 15px`;

const SpecificationsSection = styled.div`
 	 width: 60%;
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

const VerticalDivider = styled.div`
	width: 1px;
	height: 200px;
	background: ${colors.lightgray};
	margin: 60px 15px 0 10px;
`;

const FeatureContainer = styled.div`
	height: auto;
	margin-bottom: 15px;
	display: flex;
	align-items: center;
`;

const FeatureText = styled.div`
	font-size: 14px;
	margin-left: 6px;
`;

const NetworkMainSection = ({ title, description, includedPackages }) => {

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

	return (
		<Container>
			<DescriptionSection>
				<Title>{ title }
				</Title>
				<Description>
					{ description }
				</Description>
				{ renderPackageList(includedPackages) }
			</DescriptionSection>
			<VerticalDivider/>
			<SpecificationsSection>
				{/*//TODO*/}
			</SpecificationsSection>
		</Container>
	);
};

export default NetworkMainSection;

