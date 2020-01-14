import React from 'react';
import styled from 'styled-components';
import Image from '../../gereric/Image';
import GenBlock from './common/GenBlock';
import verified from '../../../assets/verified@2x.png';
import SpecificationCard from './common/SpecificationCard';
import { colors, specificationsTypes, } from '../../../config/constants';
import Title from '../../gereric/Title';

const Container = styled.div`
 	display: flex;
 	width: 70%;
  	height: 100%;
	justify-content: space-between;
	padding: 15px 0;
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
	margin-left: 55px;
`;

const Description = styled.div`
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
		return genBlocsk.map((genBlock, i) => {
			return <GenBlock {...genBlock} key={i}/>;
		});
	};

	return (
		<Container>
			<DescriptionSection>
				<Title bold size="18px">{ title }
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

