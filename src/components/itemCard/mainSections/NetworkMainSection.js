import React from 'react';
import styled from 'styled-components';
import Image from '../../Image';
import GenBlock from './common/GenBlock';
import verified from '../../../assets/verified@2x.png';
import { colors, specificationsTypes, } from '../../../config/constants';
import SpecificationCard from './common/SpecificationCard';

const Container = styled.div`
 	display: flex;
 	width: 70%;
  	height: 100%;
	justify-content: space-between;
	padding: 15px 10px;
	align-items: center;
`;

const DescriptionSection = styled.div`
 	 width: 40%;
 	 height: 100%;
	 padding: 0 0 0 15px`;

const SpecificationsSection = styled.div`
	display: flex;
 	width: 70%;
 	height: 100%;
`;

const GenBlocks = styled.div`
	width: 55%;
`;

const Specifications = styled.div`
	width: 45%;
	margin-left: 25px;
`;

const Title = styled.p`
 	 font-size: 18px;
 	 font-weight: bold;
 	 margin: 0 0 5px 0;
`;

const Description = styled.div`
	font-size: 14px;
	margin-bottom: 20px;
`;

const VerticalDivider = styled.div`
	width: 1px;
	height: 150px;
	background: ${ colors.lightgray };
	margin: 30px 15px 0 10px;
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

const NetworkMainSection = ({ title, description, includedPackages, specificationsTitles, genBlocks }) => {

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
	
	const renderGenBlockList = (genBlocsk) => {
		return genBlocsk.map((genBlock) => {
			return <GenBlock {...genBlock} />;
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
				<GenBlocks>
					{ renderGenBlockList(genBlocks) }
				</GenBlocks>
				<Specifications>
					<SpecificationCard specificationType={specificationsTypes.ram} specificationTitle={specificationsTitles.ram}/>
					<SpecificationCard specificationType={specificationsTypes.maxNetworkPorts} specificationTitle={specificationsTitles.maxNetworkPorts}/>
					<SpecificationCard specificationType={specificationsTypes.storage} specificationTitle={specificationsTitles.storage}/>
					<SpecificationCard specificationType={specificationsTypes.networkInterfaces} specificationTitle={specificationsTitles.networkInterfaces}/>
				</Specifications>
			</SpecificationsSection>
		</Container>
	);
};

export default NetworkMainSection;

