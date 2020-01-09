import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../config/constants';
import Image from '../../Image';
import verified from '../../../assets/verified@2x.png';
import PropTypes from 'prop-types';
import CommonPriceSection from '../priceSections/CommonPriceSection';

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

const MobileEndpointMainSection = ({ title, additionalLabel, description, includedPackages, ...otherProps }) => {

	const renderPackageList = (packages) => {
		return packages.map((p) => {
			return (
				<FeatureContainer key={p.id}>
					<Image path={verified} width="15"/>
					<FeatureText>{p.feature}</FeatureText>
				</FeatureContainer>
			);
		});
	};

	return (
		<Container>
			<DescriptionSection>
				<Title>{ title }
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
