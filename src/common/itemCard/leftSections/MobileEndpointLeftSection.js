import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;`;

const DescriptionSection = styled.div`
  width: 60%;
  height: 100%;
  padding: 0 15px;`;

const PackagesSection = styled.div`
  display: flex;
  width: 40%;
  height: 100%;`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;`;

const Description = styled.p`
    font-size: 14px;`;

const MobileEndpointLeftSection = (props) => {

	// renderPackageList = (packages) => {
	// 	return packeges.map((p) => {
	//		
	// 	})
	// }

	return (
		<Container>
			<DescriptionSection>
				<Title>Unified Endpoint Security
					<span className="additional-label"> Advanced</span>
				</Title>
				<Description>
					Check Point Unified Endpoint Security Advanced offers comprehensive,
					enterprise-grade endpoint and mobile device security that protects PCs, Mac, iOS and Android devices
					against known, unknown and Zero-day threats.
				</Description>
			</DescriptionSection>
			<PackagesSection>
				
			</PackagesSection>
		</Container>
	);
};

export default MobileEndpointLeftSection;
