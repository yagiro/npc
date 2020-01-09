import React from 'react';
import styled from 'styled-components';
import Image from '../../../Image';
import cores from '../../../../assets/specifications/cores.png';
import mountable from '../../../../assets/specifications/mountable.png';
import networkInterfaces from '../../../../assets/specifications/networkInterfaces.png';
import ports from '../../../../assets/specifications/ports.png';
import powerSupply from '../../../../assets/specifications/powerSupply.png';
import raid from '../../../../assets/specifications/raid.png';
import ram from '../../../../assets/specifications/ram.png';
import { colors, specificationsTypes } from '../../../../config/constants';

const Container = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
`;

const TitlesContainer = styled.div`
	margin-left: 14px;
`;

const SpecificationTitle = styled.div`
	font-weight: bold;
`;

const SubTitle = styled.div`
	color: ${colors.textLightGray};
`;

const SpecificationCard = ({ specificationType, specificationTitle }) => {

	//For each type of Specification Card icon and subTitle are constants, but Title we get from props
	const iconSourceAndSubTitle = {
		[specificationsTypes.cores]: { icon: cores, subTitle: 'Cores' },
		[specificationsTypes.networkInterfaces]: networkInterfaces,
		[specificationsTypes.ports]: { icon: ports, subTitle: 'Ports' },
		[specificationsTypes.powerSupply]: powerSupply,
		[specificationsTypes.raid]: raid,
		[specificationsTypes.ram]: ram,
		[specificationsTypes.mountable]: mountable,
	};
	
	const iconSource = iconSourceAndSubTitle[specificationType].icon;
	
	return (
		<Container>
			{ iconSource &&
			<Image path={ iconSourceAndSubTitle[specificationType].icon } width={ 24 }/>
			}
			<TitlesContainer>
				<SpecificationTitle>
					{ specificationTitle }
				</SpecificationTitle>
				<SubTitle>
					{ iconSourceAndSubTitle[specificationType].subTitle }
				</SubTitle>
			</TitlesContainer>
		</Container>
	);
};

export default SpecificationCard;
