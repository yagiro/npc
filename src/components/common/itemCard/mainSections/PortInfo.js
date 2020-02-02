import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, fonts } from '../../../../config/constants';
import Image from '../../../generic/Image';
import { buildAssetAbsolutePath } from '../../../../lib/assetsHelper';

export const portTypes = {
	wanPort: 'Wan port',
	sfpDmzPort: 'SFP DMZ port',
	lanPort: 'SFP DMZ port',
};

const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	
	& > div:first-child {
		display: flex;
		align-items: flex-end;
		margin-right: 9px;
	}
`;

const ImageContainer = styled.div`
	img {
		width: 25px;
		height: auto;
	}
`;

const PortParams = styled.div`
	display: flex;
	justify-content: space-around;
	background-color: ${ colors.background };
	min-width: 150px;
	border: 1px #F6F6F6 solid ;
	height: 25px;
	width: 150px;
	
	&::after {
		content: '';
		height: 25px;
		width: 5px;
		background-color: #B87333;
		position: relative;
		top: -1px;
	}
	
	& > div {
		margin: 5px 0;
		width: 20% ;
		font: ${ fonts.paragraph };
		line-height: 1em;
		color: #333333;
		text-align: center;
	}
		 	
	& > div:not(:last-child) {
		 border-right: 1px ${ colors.borderGrey } solid;
		 width: 30%;
	}
		 	
	& > div:first-child {
		width: 25%;
	}
	
	& > div:last-child {
		flex: 1;
	}
`;

const PortParamsFooter = styled.div`
	font: ${ fonts.paragraph };
	color: #858991;
	line-height: 1em;
	margin-top: 4px;
`;

const PortInfo = ({ type, size, gbe, material }) => {
	return (
		<Container>
			<ImageContainer>
				<Image
					path={ buildAssetAbsolutePath('/images/categorypage/ports.png') }
					width="24px"
				/>
			</ImageContainer>
			<div>
				<PortParams>
					<div>{ size }x</div>
					<div>{ gbe }GbE</div>
					<div>{ material }</div>
				</PortParams>
				<PortParamsFooter>{ type }</PortParamsFooter>
			</div>
		</Container>
		
	);
};

PortInfo.propTypes = {
	type: PropTypes.oneOf([
		portTypes.sfpDmzPort,
		portTypes.wanPort,
		portTypes.lanPort,
	]),
	size: PropTypes.number,
	gbe: PropTypes.number,
	material: PropTypes.string,
};

export default PortInfo;

