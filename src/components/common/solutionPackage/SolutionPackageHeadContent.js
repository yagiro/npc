import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, fonts, solutionPackageTypes } from '../../../config/constants';
import { createClassName } from '../../../lib/classNameHelper';

const classPrefix = 'solution-package-head';
export const classes = {
	title: createClassName(classPrefix, 'title'),
	subtitle: createClassName(classPrefix, 'subtitle'),
	gbps: createClassName(classPrefix, 'gbps'),
	gbpsCircle: createClassName(classPrefix, 'gbpsCircle'),
	gbpsText: createClassName(classPrefix, 'gbpsText'),
};

const Container = styled.div`  
	position: absolute;
	height: 100%;
	width: 100%;
	padding: 30px 0;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: ${ colors.background };
	
	& > div:first-child {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.${ classes.title } {
		font: ${ fonts.headerFourth };
		line-height: 1em;
		text-align: center;
		font-weight: bold;
		text-transform: capitalize;
	}
	
	.${ classes.subtitle } {
		margin-top: 3px;
		text-align: center;
		font: ${ fonts.paragraph };
		text-transform: capitalize;
		line-height: 1.5em;
		max-width: 80%;
	}
	
	.${ classes.gbps } {
		display: flex;
		justify-content: center;
		align-items: center;
		
		.${ classes.gbpsCircle } {
			margin-right: 10px;
			width: 54px;
			height: 54px;
			border-width: 2px;
			border-style: solid;
			border-color: ${ colors.checkPointPink };
			border-left-color: ${ ({ type }) => type === solutionPackageTypes.turbo ? colors.checkPointPink : colors.borderGrey };
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			font: ${ fonts.headerFourth };
			line-height: 1em;
			font-weight: bold;
			transform: rotate(45deg);
			> * {
				transform: rotate(-45deg);
			}
		}
		
		.${ classes.gbpsText } {
			> div:last-child {
				font: ${ fonts.headerFifth };
				color: #E1E3E5;
			}
		}
	}
`;

const SolutionPackageHeadContent = (props) => {
	const { title, subtitle, gbpsAmount, type } = props;
	return (
		<Container type={ type }>
			<div>
				<div className={ classes.title }>{ title }</div>
				<div className={ classes.subtitle }>{ subtitle }</div>
			</div>
			<div className={ classes.gbps }>
				<div className={ classes.gbpsCircle }>
					<span>{ gbpsAmount }</span>
				</div>
				<div className={ classes.gbpsText }>
					<div>Gbps</div>
					<div>NGTP</div>
				</div>
			</div>
		</Container>
	);
};

SolutionPackageHeadContent.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	gbpsAmount: PropTypes.number,
	type: PropTypes.string,
};

export default SolutionPackageHeadContent;
