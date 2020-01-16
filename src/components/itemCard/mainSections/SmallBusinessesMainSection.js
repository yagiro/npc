import React from 'react';
import styled from 'styled-components';
import SpecificationCard from './common/SpecificationCard';
import { colors, specificationsTypes } from '../../../config/constants';
import Title from "../../generic/Title";

const Container = styled.div`
 	display: flex;
 	width: 65%;
  	height: 100%;
	justify-content: space-between`;

const DescriptionSection = styled.div`
 	 width: 60%;
 	 height: 100%;
	 padding: 15px 0 0 15px`;

const SpecificationsSection = styled.div`
 	 width: 40%;
 	 height: 100%;
	 margin-top: 48px;
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
	height: 150px;
	background: ${colors.lightgray};
	margin: 60px 15px 0 10px;
`;

const SmallBusinessesMainSection = ({ title, description, specificationsTitles }) => {

	return (
		<Container>
			<DescriptionSection>
				<Title bold size="18px">{ title }
				</Title>
				<Description>
					{ description }
				</Description>
			</DescriptionSection>
			<VerticalDivider/>
			<SpecificationsSection>
				<UlTitle>HARDWARE SPECIFICATION</UlTitle>
				<SpecificationCard specificationType={ specificationsTypes.formFactor } specificationTitle={ specificationsTitles.formFactor }/>
				<SpecificationCard specificationType={ specificationsTypes.ports } specificationTitle={ specificationsTitles.ports }/>
				<SpecificationCard specificationType={ specificationsTypes.supportsExternal } specificationTitle={ specificationsTitles.supportsExternal }/>
				{ specificationsTitles.wireless && <WirelessText>Wireless (optional)</WirelessText> }
			</SpecificationsSection>
		</Container>
	);
};

export default SmallBusinessesMainSection;

