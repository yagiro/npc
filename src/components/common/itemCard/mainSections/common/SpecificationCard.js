import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from '../../../../generic/Image';
import cores from '../../../../../assets/specifications/cores.png';
import mountable from '../../../../../assets/specifications/mountable.png';
import networkInterfaces from '../../../../../assets/specifications/networkInterfaces.png';
import ports from '../../../../../assets/specifications/ports.png';
import powerSupply from '../../../../../assets/specifications/powerSupply.png';
import raid from '../../../../../assets/specifications/raid.png';
import ram from '../../../../../assets/specifications/ram.png';
import supportsExternal from '../../../../../assets/specifications/supportsExternal.png';
import maxNetworkPorts from '../../../../../assets/specifications/maxNetworkPorts.png';
import storage from '../../../../../assets/specifications/storage.png';
import { colors, specificationsTypes } from '../../../../../config/constants';

const Container = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	margin-bottom: 7px;
`;

const SpecificationTitle = styled.div`
	font-weight: bold;
`;

const SubTitle = styled.div`
	color: ${ colors.textLightGray };
`;

const StyledImage = styled(Image)`
	margin-right: 14px;
`;

const SpecificationCard = ({ specificationType, specificationTitle }) => {

	//For each type of Specification Card icon and subTitle are constants, but Title we get from props
	const iconSourceAndSubTitle = {
		[specificationsTypes.cores]: { icon: cores, subTitle: 'Cores' },
		[specificationsTypes.networkInterfaces]: { icon: networkInterfaces, subTitle: 'Network Interfaces' },
		[specificationsTypes.ports]: { icon: ports, subTitle: 'Ports' },
		[specificationsTypes.powerSupply]: { icon: powerSupply, subTitle: 'Power Supply' },
		[specificationsTypes.raid]: { icon: raid, subTitle: 'Raid' },
		[specificationsTypes.ram]: { icon: ram, subTitle: 'Ram' },
		[specificationsTypes.mountable]: { icon: mountable, subTitle: 'Mountable' },
		[specificationsTypes.formFactor]: { icon: null, subTitle: 'Form Factor' },
		[specificationsTypes.supportsExternal]: { icon: supportsExternal, subTitle: 'Supports External' },
		[specificationsTypes.storage]: { icon: storage, subTitle: 'Storage' },
		[specificationsTypes.maxNetworkPorts]: { icon: maxNetworkPorts, subTitle: 'Max Network Ports' },
	};
	
	const iconSource = iconSourceAndSubTitle[specificationType].icon;
	
	return (
		<Container>
			{ iconSource &&
			<StyledImage path={ iconSourceAndSubTitle[specificationType].icon } width="24" />
			}
			<div>
				<SpecificationTitle>
					{ specificationTitle }
				</SpecificationTitle>
				<SubTitle>
					{ iconSourceAndSubTitle[specificationType].subTitle }
				</SubTitle>
			</div>
		</Container>
	);
};

SpecificationCard.propTypes = {
	specificationType: PropTypes.oneOf(Object.values(specificationsTypes)).isRequired
};

export default SpecificationCard;

