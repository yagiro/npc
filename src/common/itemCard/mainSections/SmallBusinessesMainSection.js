import React from 'react';
import styled from 'styled-components';
import { colors, specificationsTypes } from '../../../config/constants';
import SpecificationCard from './specifications/SpecificationCard';

const Container = styled.div`
 	display: flex;
 	flex: 1;
  	height: 100%;
	justify-content: space-between`;

const DescriptionSection = styled.div`
 	 width: 60%;
 	 height: 100%;
	 padding: 15px 0 0 15px`;

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

const UlTitle = styled.div`
	color: ${ colors.textLightGray };
	font-size: 14px;
	margin-bottom: 7px;
`;

const WirelessText = styled.div`
	font-weight: bold;
	font-size: 14px;
`;

const VerticalDivider = styled.div`
	width: 1px;
	height: 60%;
	background: ${colors.lightgray};
	margin: 60px 15px 0 0;
`;

const SmallBusinessesMainSection = ({ title, description, specificationsTitles }) => {

	return (
		<Container>
			<DescriptionSection>
				<Title>{ title }
				</Title>
				<Description>
					{ description }
				</Description>
			</DescriptionSection>
			<VerticalDivider/>
			<PackagesSection>
				<UlTitle>HARDWARE SPECIFICATION</UlTitle>
				<SpecificationCard specificationType={ specificationsTypes.formFactor } specificationTitle={ specificationsTitles.formFactor }/>
				<SpecificationCard specificationType={ specificationsTypes.ports } specificationTitle={ specificationsTitles.ports }/>
				<SpecificationCard specificationType={ specificationsTypes.supportsExternal } specificationTitle={ specificationsTitles.supportsExternal }/>
				{specificationsTitles.wireless && <WirelessText>Wireless (optional)</WirelessText>}
			</PackagesSection>
		</Container>
	);
};

export default SmallBusinessesMainSection;
