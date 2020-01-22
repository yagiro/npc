import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { strObjToArray } from '../../../lib/utils';
import { colors, solutionPackageTypes } from '../../../config/constants';
import { ReactSVG } from 'react-svg';
import { buildAssetAbsolutePath, buildImageUrl } from '../../../lib/assetsHelper';
import { createClassName } from '../../../lib/classNameHelper';
import SolutionPackageHeadContent from './SolutionPackageHeadContent';

const typeSettings = {
	[solutionPackageTypes.base]: {
		gradientColors: [ '#7D7D7D', '#616161' ],
		flashCount: 1,
		title: 'Base package',
	},
	[solutionPackageTypes.plus]: {
		gradientColors: [ '#7D7D7D', '#616161' ],
		flashCount: 2,
		title: 'Base package',
	},
	[solutionPackageTypes.turbo]: {
		gradientColors: [ '#A13C71', '#752650' ],
		flashCount: 3,
		title: 'Base package',
	},
};

const classPrefix = 'solution-package-head';
export const classes = {
	images: createClassName(classPrefix, 'images'),
};

const Container = styled.div`  
	border: 1px solid blue;
	height: 197px;
	background-image: linear-gradient(180deg, ${ props => typeSettings[props.type].gradientColors[0] } 0%, 
		${ props => typeSettings[props.type].gradientColors[1] } 100%);
	position: relative;
		
	.${ classes.images } {
		display: flex;
		justify-content: flex-end;
		margin: 0 18px;
		
		> * {
			margin-left: 14px;
			z-index: 0;
			
			svg {
				height: 65px;
				width: auto;
			}
		}
	}
`;

const renderFlashes = (type) => {
	const arr = Array(typeSettings[type].flashCount).fill(null);
	return arr.map((item, i) =>
		<ReactSVG
			key={ i }
			src={ buildAssetAbsolutePath('/images/flash.svg') }
		/>);
};

const SolutionPackageHead = (props) => {
	const { type, ...otherProps } = props;
	return (
		<Container type={ type }>
			<div className={ classes.images }>
				{ renderFlashes(type) }
			</div>
			<SolutionPackageHeadContent
				title={ typeSettings[props.type].title }
				{...otherProps}
			/>
		</Container>
	);
};

SolutionPackageHead.propTypes = {
	type: PropTypes.oneOf(strObjToArray(solutionPackageTypes)).isRequired,
	subtitle: PropTypes.string,
	gbpsAmount: PropTypes.number,
};

export default SolutionPackageHead;