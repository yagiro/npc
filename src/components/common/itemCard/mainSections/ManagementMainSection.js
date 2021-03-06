import React from 'react';
import styled from 'styled-components';
import SpecificationCard from './common/SpecificationCard';
import { colors, fonts, specificationsTypes } from '../../../../app/consts/consts';
import Title from '../../../generic/Title';

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

const Description = styled.span`
	font-size: ${ fonts.paragraphNormal };
`;

const UlTitle = styled.div`
	color: ${ colors.textLightGray };
	font-size: ${ fonts.paragraphNormal }
	margin-bottom: 7px;
`;

const SpecificationsItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 220px;
`;

const VerticalDivider = styled.div`
	width: 1px;
	height: 200px;
	background-color: ${colors.lightgray};
	margin: 60px 15px 0 10px;
`;

const ManagementMainSection = ({ title, description, specificationsTitles }) => {

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
				<SpecificationsItemsContainer>
					<SpecificationCard specificationType={ specificationsTypes.mountable } specificationTitle={ specificationsTitles.mountable }/>
					<SpecificationCard specificationType={ specificationsTypes.storage } specificationTitle={ specificationsTitles.storage }/>
					<SpecificationCard specificationType={ specificationsTypes.raid } specificationTitle={ specificationsTitles.raid }/>
					<SpecificationCard specificationType={ specificationsTypes.cores } specificationTitle={ specificationsTitles.cores }/>
					<SpecificationCard specificationType={ specificationsTypes.ram } specificationTitle={ specificationsTitles.ram }/>
					<SpecificationCard specificationType={ specificationsTypes.powerSupply } specificationTitle={ specificationsTitles.powerSupply }/>
					<SpecificationCard specificationType={ specificationsTypes.ports } specificationTitle={ specificationsTitles.ports }/>
				</SpecificationsItemsContainer>
			</SpecificationsSection>
		</Container>
	);
};

export default ManagementMainSection;

