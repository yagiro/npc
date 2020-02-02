import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SpecificationCard from './common/SpecificationCard';
import { colors, specificationsTypes } from '../../../../config/constants';
import Title from '../../../generic/Title';
import PortInfo, { portTypes } from './PortInfo';

const Container = styled.div`
 	display: flex;
 	width: calc(100% - 275px);
  	//height: 100%;
	justify-content: space-between;
	margin: 30px;
	min-width: 430px;
`;

const DescriptionSection = styled.div`
	width: 60%;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const SpecificationsSection = styled.div`
 	 width: 40%;
 	 height: 100%;
`;

const Description = styled.div`
	font-size: 14px;
	flex: 1;
	& > div {
		margin-top: 6px;
		cursor: pointer;
	}
`;

const UlTitle = styled.div`
	color: ${ colors.textLightGray };
	font-size: 14px;
	margin-bottom: 7px;
`;

const VerticalDivider = styled.div`
	width: 1px;
	background: ${colors.lightgray};
	margin: 15px 15px 0 10px;
`;

const DescriptionFooter = styled.div`
	display: flex;
	& > div {
		&:not(:first-child) {
			margin-left: 30px;
		}
		& > div:first-child {
			color: #16181D;
		}
		& > div:last-child {
			color: #858991;
		}
	}
`;

const DescriptionText = styled.div.attrs(prop => ({
	allTextSettings: !prop.showAllDescription ? `
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	` : ''
}))`
	margin-bottom: 20px;
	& > span {
		${ props => props.allTextSettings }
	}
`;

const SmallBusinessesMainSection = ({ title, description, specificationsTitles }) => {
	const [ showAllDescription, setShowAllDescription ] = useState(true);
	const decriptionElem = useRef(null);

	useEffect(() => {
		if (decriptionElem.current) {
			setShowAllDescription(decriptionElem.current.offsetHeight < 60);
		}
	}, [ decriptionElem ]);

	return (
		<Container>
			<DescriptionSection>
				<Title bold size="18px">
					{ title }
				</Title>
				<Description>
					<DescriptionText
						showAllDescription={ showAllDescription }
						decriptionElem={ decriptionElem }
					>
						<span ref={ decriptionElem }>{ description }</span>
					</DescriptionText>
					{
						!showAllDescription &&
						<div onClick={ () => setShowAllDescription(true) }>
							<strong>Read more...</strong>
						</div>
					}
				</Description>
				<DescriptionFooter>
					<div>
						<div><strong>{ specificationsTitles.formFactor }</strong></div>
						<div>Form Factor</div>
					</div>
					<div>
						<div><strong>{ specificationsTitles.wireless }</strong></div>
						<div>Wireless</div>
					</div>
				</DescriptionFooter>
			</DescriptionSection>
			<VerticalDivider/>
			<SpecificationsSection>
				<UlTitle>HARDWARE SPECIFICATION</UlTitle>
				{
					specificationsTitles.wanPort &&
					<PortInfo
						type={ portTypes.wanPort }
						{ ...specificationsTitles.wanPort }
					/>
				}
				{
					specificationsTitles.sfpDmzPort &&
					<PortInfo
						type={ portTypes.sfpDmzPort }
						{ ...specificationsTitles.sfpDmzPort }
					/>
				}
				{
					specificationsTitles.lanPort &&
					<PortInfo
						type={ portTypes.lanPort }
						{ ...specificationsTitles.lanPort }
					/>
				}
				{
					specificationsTitles.ports &&
					<SpecificationCard
						specificationType={ specificationsTypes.ports }
						specificationTitle={ specificationsTitles.ports }
					/>
				}
				{
					specificationsTitles.supportsExternal &&
					<SpecificationCard
						specificationType={ specificationsTypes.supportsExternal }
						specificationTitle={ specificationsTitles.supportsExternal }
					/>
				}
			</SpecificationsSection>
		</Container>
	);
};

SmallBusinessesMainSection.propTypes = {
	specificationsTitles: PropTypes.object,
	title: PropTypes.string,
	description: PropTypes.string,
};

export default SmallBusinessesMainSection;

