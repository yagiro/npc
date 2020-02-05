import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SpecificationCard from './common/SpecificationCard';
import { colors, fonts, specificationsTypes } from '../../../../app/consts/consts';
import Title from '../../../generic/Title';
import PortInfo from './PortInfo';

export const attrLabels = {
	formFactor: 'Form Factor',
	wireless: 'Wireless',
};

const Container = styled.div`
 	display: flex;
 	width: calc(100% - 275px);
	justify-content: space-between;
	margin: 30px;
	min-width: 430px;
`;

const DescriptionSection = styled.div`
	width: 63%;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const SpecificationsSection = styled.div`
 	 height: 100%;
`;

const Description = styled.div`
	font-size: ${ fonts.paragraph };
	flex: 1;
	& > div {
		margin-top: 6px;
		cursor: pointer;
	}
`;

const UlTitle = styled.div`
	color: ${ colors.textLightGray };
	font-size: ${ fonts.paragraphNormal };
	margin-bottom: 7px;
`;

const VerticalDivider = styled.div`
	width: 1px;
	background-color: ${colors.lightgray};
	margin: 15px 15px 0 10px;
`;

const DescriptionFooter = styled.div`
	font-size: ${ fonts.paragraph };
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

const specificationComponents = {
	[specificationsTypes.wanPort] : PortInfo,
	[specificationsTypes.sfpDmzPort]: PortInfo,
	[specificationsTypes.lanPort]: PortInfo,
	[specificationsTypes.ports]: SpecificationCard,
	[specificationsTypes.supportsExternal]: SpecificationCard,
};

const renderSpecifications = (specifications) => {
	return specifications.map((spec, i) => {
		const SpecificationComponent = specificationComponents[spec.type];
		if (!SpecificationComponent) return null;
		// prepare props for PortInfo or SpecificationCard cases
		let props = { specificationType: spec.type };
		props = typeof spec.value === 'object' ?
			{ ...props, ...spec.value } : { ...props, specificationTitle: spec.value };
		return (
			<SpecificationComponent	key={ i } { ...props }/>
		);
	});
};

const renderAttrs = (attrs) => {
	return attrs.map((attr, i) => {
		return (
			<div key={ i }>
				<div><strong>{ attr.value }</strong></div>
				<div>{ attrLabels[attr.type] }</div>
			</div>
		);
	});
};

const SmallBusinessesMainSection = ({ title, description, attrs, specs }) => {
	const [ showAllDescription, setShowAllDescription ] = useState(true);
	const descriptionElem = useRef(null);

	useEffect(() => {
		if (descriptionElem.current) {
			setShowAllDescription(descriptionElem.current.offsetHeight < 60);
		}
	}, []);

	return (
		<Container>
			<DescriptionSection>
				<Title
					bold
					size="18px"
				>
					{ title }
				</Title>
				<Description>
					<DescriptionText showAllDescription={ showAllDescription }>
						<span ref={ descriptionElem }>{ description }</span>
					</DescriptionText>
					{
						!showAllDescription &&
						<div onClick={ () => setShowAllDescription(true) }>
							<strong>Read more...</strong>
						</div>
					}
				</Description>
				<DescriptionFooter>
					{ renderAttrs(attrs) }
				</DescriptionFooter>
			</DescriptionSection>
			<VerticalDivider/>
			<SpecificationsSection>
				<UlTitle>HARDWARE SPECIFICATION</UlTitle>
				{ renderSpecifications(specs) }
			</SpecificationsSection>
		</Container>
	);
};

SmallBusinessesMainSection.propTypes = {
	specificationsTitles: PropTypes.object,
	title: PropTypes.string,
	description: PropTypes.string,
	attrs: PropTypes.array,
	specs: PropTypes.array,
};

export default SmallBusinessesMainSection;

