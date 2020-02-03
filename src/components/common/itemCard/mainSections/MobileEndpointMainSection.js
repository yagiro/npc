import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from '../../../generic/Image';
import Title from '../../../generic/Title';
import verified from '../../../../assets/verified@2x.png';
import CommonPriceSection from '../priceSections/CommonPriceSection';
import { colors, fonts } from '../../../../config/constants';

const Container = styled.div`
	display: flex;
 	width: 65%;
	height: 100%;
`;

const DescriptionSection = styled.div`
	width: 60%;
	height: 100%;
	padding: 15px;`;

const PackagesSection = styled.div`
	width: 40%;
	height: 100%;
	margin-top: 48px;
`;

const Description = styled.span`
    font-size: ${ fonts.paragraphSmall };
`;

const AdditionalLabel = styled.span`
	color: ${ colors.checkPointPink };
`;

const UlTitle = styled.div`
	color: ${ colors.textLightGray };
	font-size: ${ fonts.paragraphNormal };
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
	font-size: ${ fonts.paragraphNormal };
	display: inline-block;
	margin-left: 6px;
`;

const MobileEndpointMainSection = ({ title, additionalLabel, description, includedPackages }) => {

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
				<Title bold size="18px">{ title }
					<AdditionalLabel> { additionalLabel }</AdditionalLabel>
				</Title>
				<Description>
					{ description }
				</Description>
			</DescriptionSection>
			<PackagesSection>
				<UlTitle>INCLUDED PACKAGES:</UlTitle>
				{ renderPackageList(includedPackages) }
			</PackagesSection>
		</Container>
	);
};

CommonPriceSection.propTypes = {
	price: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	title: PropTypes.string,
	additionalLabel: PropTypes.string,
	description: PropTypes.string,
	includedPackages: PropTypes.array,
};

export default MobileEndpointMainSection;
